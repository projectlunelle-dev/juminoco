import { createFileRoute } from "@tanstack/react-router";
import { V2Home } from "@/components/v2-home";

export const Route = createFileRoute("/v2")({ component: V2Home });
