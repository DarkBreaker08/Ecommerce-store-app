import { createFileRoute } from "@tanstack/react-router";
import { About } from "../Components/About/About";

export const Route = createFileRoute("/about")({
  component: About,
});
