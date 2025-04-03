import { createFileRoute } from "@tanstack/react-router";
import { FirstBlogPage } from "../Components/Blog/FirstBlogPage/FirstBlogPage";

export const Route = createFileRoute("/firstBlogPage")({
  component: FirstBlogPage,
});
