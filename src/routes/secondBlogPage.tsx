import { createFileRoute } from "@tanstack/react-router";
import { SecondBlogPage } from "../Components/Blog/SecondBlogPage/SecondBlogPage";

export const Route = createFileRoute("/secondBlogPage")({
  component: SecondBlogPage,
});
