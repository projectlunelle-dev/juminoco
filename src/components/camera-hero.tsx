import { HeartIcon } from "@/components/marks";

export function CameraHero({
  onOpen,
}: {
  onOpen: (src: string, alt: string) => void;
}) {
  return (
    <div className="cam-stage">
      <button
        type="button"
        className="cam-photo-btn"
        onClick={() =>
          onOpen("/images/lcd-train.jpg", "A green coastal train passing hydrangeas")
        }
        aria-label="Open the photograph on the camera screen"
      >
        <img
          src="/images/camera-hero.png"
          alt="Silver compact camera showing a green train among hydrangeas"
          className="cam-photo no-outline"
          width={1476}
          height={924}
        />
        <span className="speech">
          Collecting beautiful moments.
          <HeartIcon />
        </span>
      </button>
    </div>
  );
}
