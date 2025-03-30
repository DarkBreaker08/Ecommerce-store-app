import { createFileRoute } from "@tanstack/react-router";
import { Shop } from "../Components/Shop/Shop";

export const Route = createFileRoute("/shop")({
  component: Shop,
});
