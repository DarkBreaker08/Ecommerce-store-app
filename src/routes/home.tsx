import { createFileRoute } from "@tanstack/react-router";
import { Home } from "../Components/Home/Home";

export const Route = createFileRoute("/home")({
  component: Home,
});
