import { createFileRoute } from "@tanstack/react-router";
import { Cart } from "../Components/Cart/Cart";

export const Route = createFileRoute("/cart")({
  component: Cart,
});
