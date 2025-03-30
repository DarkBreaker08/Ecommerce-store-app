import { createFileRoute } from "@tanstack/react-router";
import { Blog } from "../Components/Blog/Blog";

export const Route = createFileRoute("/blog")({
  component: Blog,
});
