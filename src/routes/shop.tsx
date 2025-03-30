import { createFileRoute } from "@tanstack/react-router";
import { Shop } from "../Components/Shop/Shop";
import { SingleProduct } from "../Components/SingleProduct/SingleProduct";

export const Route = createFileRoute("/shop")({
  component: SingleProduct,
});
