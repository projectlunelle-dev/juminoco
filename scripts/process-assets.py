#!/usr/bin/env python3
"""Process isolated design plates into site assets."""
from pathlib import Path

import numpy as np
from PIL import Image, ImageDraw, ImageFilter, ImageEnhance

ROOT = Path("/workspace")
ATT = ROOT / "attachments"
OUT_IMG = ROOT / "public" / "images"
OUT_STK = ROOT / "public" / "stickers"
OUT_IMG.mkdir(parents=True, exist_ok=True)
OUT_STK.mkdir(parents=True, exist_ok=True)


def dilate(mask: np.ndarray, radius: int) -> np.ndarray:
    m = mask.astype(bool)
    out = m.copy()
    for i in range(1, radius + 1):
        out[:, i:] |= m[:, :-i]
        out[:, :-i] |= m[:, i:]
    m = out
    out = m.copy()
    for i in range(1, radius + 1):
        out[i:, :] |= m[:-i, :]
        out[:-i, :] |= m[i:, :]
    return out


def erode(mask: np.ndarray, radius: int) -> np.ndarray:
    return ~dilate(~mask.astype(bool), radius)


def process_camera() -> None:
    src = ATT / "3ED58027-2D8A-46AA-B205-14EEBD258A52"
    rgb = np.array(Image.open(src).convert("RGB"))
    h, w = rgb.shape[:2]
    mx = rgb.max(axis=2).astype(np.int16)
    mn = rgb.min(axis=2).astype(np.int16)
    chroma = mx - mn
    gray = rgb.mean(axis=2)

    # Checkerboard cells are near-achromatic and very light.
    is_bg = (chroma < 14) & (gray > 218)
    body = ~is_bg
    # Keep white sticker outline + charm outline by dilating the body.
    keep = dilate(body, 16)
    # Drop speckles in the checkerboard.
    keep = dilate(erode(keep, 2), 2)

    # Tight crop
    ys, xs = np.where(keep)
    pad = 12
    x0, x1 = max(0, xs.min() - pad), min(w, xs.max() + pad)
    y0, y1 = max(0, ys.min() - pad), min(h, ys.max() + pad)

    rgb_c = rgb[y0:y1, x0:x1]
    keep_c = keep[y0:y1, x0:x1]
    gray_c = gray[y0:y1, x0:x1]
    chroma_c = chroma[y0:y1, x0:x1]

    # LCD: large dark, low-chroma rectangle inside the body.
    lcd = (gray_c > 48) & (gray_c < 138) & (chroma_c < 10) & keep_c
    lcd = erode(dilate(lcd, 4), 6)
    rows = lcd.sum(axis=1)
    cols = lcd.sum(axis=0)
    ys = np.where(rows > 80)[0]
    xs = np.where(cols > 80)[0]
    lx0, lx1 = int(xs[0]), int(xs[-1])
    ly0, ly1 = int(ys[0]), int(ys[-1])
    # Inset a couple of pixels so the bezel stays.
    lx0 += 3
    ly0 += 3
    lx1 -= 3
    ly1 -= 3

    train = Image.open(OUT_IMG / "lcd-train.jpg").convert("RGB")
    tw, th = lx1 - lx0, ly1 - ly0
    # Cover the LCD, slightly zoomed.
    scale = max(tw / train.width, th / train.height) * 1.08
    nw, nh = int(train.width * scale), int(train.height * scale)
    train = train.resize((nw, nh), Image.Resampling.LANCZOS)
    cx = (nw - tw) // 2
    cy = max(0, (nh - th) // 2 - nh // 18)
    train = train.crop((cx, cy, cx + tw, cy + th))

    cam = Image.fromarray(rgb_c).convert("RGBA")
    alpha = np.where(keep_c, 255, 0).astype(np.uint8)
    cam.putalpha(Image.fromarray(alpha))
    cam.paste(train, (lx0, ly0))

    # Soft inner shade on the LCD so it sits in the bezel.
    overlay = Image.new("RGBA", (tw, th), (0, 0, 0, 0))
    d = ImageDraw.Draw(overlay)
    d.rectangle([0, 0, tw - 1, th - 1], outline=(0, 0, 0, 70), width=3)
    d.rectangle([0, 0, tw - 1, 8], fill=(255, 255, 255, 28))
    cam.paste(overlay, (lx0, ly0), overlay)

    cam.save(OUT_IMG / "camera-hero.png", optimize=True)
    ch, cw = cam.size
    print(
        "camera-hero",
        cam.size,
        "lcd%",
        round(lx0 / cw * 100, 2),
        round(ly0 / ch * 100, 2),
        round(tw / cw * 100, 2),
        round(th / ch * 100, 2),
    )
    # Also keep a copy under the old name.
    cam.save(OUT_IMG / "camera-sticker.png", optimize=True)


def process_watercolor() -> None:
    bg = Image.open(ATT / "IMG_3407.jpg").convert("RGB")
    w, h = bg.size
    # Drop the baked header + gingham footer; keep the wash.
    wash = bg.crop((0, 72, w, 1768))
    wash.save(OUT_IMG / "watercolor.jpg", quality=92, optimize=True)
    print("watercolor", wash.size)

    # Crop a gingham strip for the footer (optional fallback).
    foot = bg.crop((0, 1788, w, h))
    if foot.size[1] > 8:
        foot.save(OUT_IMG / "gingham-footer.jpg", quality=90, optimize=True)
        print("footer", foot.size)


def process_film() -> None:
    film = Image.open(ATT / "IMG_3404.jpg").convert("RGBA")
    arr = np.array(film)
    rgb = arr[:, :, :3].astype(np.int16)
    # Outer paper and inner windows are near-white.
    white = (rgb[:, :, 0] > 247) & (rgb[:, :, 1] > 247) & (rgb[:, :, 2] > 247)
    arr[:, :, 3] = np.where(white, 0, 255).astype(np.uint8)
    out = Image.fromarray(arr, "RGBA")
    out.save(OUT_IMG / "film-strip.png", optimize=True)
    print("film-strip", out.size, "transparent", int(white.mean() * 100), "%")

    # Crop authentic film frames from the decorated plate.
    filled = Image.open(ATT / "IMG_3408.jpg").convert("RGB")
    # Windows of IMG_3404, mapped onto the film band of IMG_3408.
    # Film photos occupy roughly y=658-778 across the six windows.
    windows = [
        (30, 258, "film-summer"),
        (284, 502, "film-friend"),
        (528, 746, "film-rain"),
        (771, 984, "film-finds"),
        (1010, 1226, "film-slow"),
        (1251, 1470, "film-sweet"),
    ]
    y0, y1 = 656, 780
    for x0, x1, name in windows:
        crop = filled.crop((x0, y0, x1, y1)).resize((640, 420), Image.Resampling.LANCZOS)
        crop = ImageEnhance.Contrast(crop).enhance(1.04)
        crop.save(OUT_IMG / f"{name}.jpg", quality=90, optimize=True)
        print(" ", name, crop.size)


def process_content_photos() -> None:
    filled = Image.open(ATT / "IMG_3408.jpg").convert("RGB")
    # Card photos along the bottom of the four cards.
    cards = [
        ("card-daisies", (70, 1188, 360, 1310)),
        ("card-clover-art", (410, 1165, 720, 1315)),
        ("card-brand", (760, 1168, 1075, 1318)),
        ("card-photographer", (1115, 1175, 1410, 1318)),
    ]
    for name, box in cards:
        crop = filled.crop(box).resize((900, 560), Image.Resampling.LANCZOS)
        crop.save(OUT_IMG / f"{name}.jpg", quality=90, optimize=True)
        print("card", name, crop.size)

    journals = [
        ("journal-clovers", (95, 1418, 360, 1628)),
        ("journal-street", (390, 1410, 655, 1625)),
        ("journal-sketchbook", (680, 1410, 950, 1628)),
    ]
    for name, box in journals:
        crop = filled.crop(box).resize((720, 540), Image.Resampling.LANCZOS)
        crop.save(OUT_IMG / f"{name}.jpg", quality=90, optimize=True)
        print("journal", name, crop.size)


def knockout_sticker(im: Image.Image, threshold: int = 246) -> Image.Image:
    im = im.convert("RGBA")
    arr = np.array(im)
    rgb = arr[:, :, :3].astype(np.int16)
    white = (rgb[:, :, 0] > threshold) & (rgb[:, :, 1] > threshold) & (rgb[:, :, 2] > threshold)
    # Also knock very pale cream page.
    cream = (rgb[:, :, 0] > threshold - 8) & (rgb[:, :, 1] > threshold - 16) & (rgb[:, :, 2] > threshold - 22)
    arr[:, :, 3] = np.where(white | cream, 0, 255).astype(np.uint8)
    # Soft edge
    a = Image.fromarray(arr[:, :, 3])
    a = a.filter(ImageFilter.GaussianBlur(0.6))
    arr[:, :, 3] = np.array(a)
    return Image.fromarray(arr, "RGBA")


def process_stickers() -> None:
    filled = Image.open(ATT / "IMG_3408.jpg").convert("RGB")
    crops = {
        "gummy-bear": (338, 368, 430, 490),
        "take-slow": (18, 548, 130, 662),
        "star-left": (18, 770, 95, 845),
        "star-right": (1410, 768, 1494, 850),
        "forest-spirit": (0, 1568, 110, 1758),
        "bunny-keychain": (1268, 1478, 1498, 1758),
        "apple-intro": (300, 12, 370, 90),
        "washi": (18, 1278, 130, 1328),
        "binoculars": (640, 1228, 760, 1320),
        "green-bottle": (1008, 1165, 1120, 1325),
        "cat": (1348, 1238, 1455, 1338),
    }
    for name, box in crops.items():
        crop = knockout_sticker(filled.crop(box))
        # Trim transparent
        arr = np.array(crop)
        a = arr[:, :, 3]
        ys, xs = np.where(a > 12)
        if len(xs) == 0:
            print("skip empty", name)
            continue
        pad = 2
        x0, x1 = max(0, xs.min() - pad), min(arr.shape[1], xs.max() + pad)
        y0, y1 = max(0, ys.min() - pad), min(arr.shape[0], ys.max() + pad)
        crop = crop.crop((x0, y0, x1, y1))
        dest = OUT_STK / f"{name}.png"
        crop.save(dest, optimize=True)
        print("sticker", name, crop.size)


def main() -> None:
    process_camera()
    process_watercolor()
    process_film()
    process_content_photos()
    process_stickers()
    print("done")


if __name__ == "__main__":
    main()
