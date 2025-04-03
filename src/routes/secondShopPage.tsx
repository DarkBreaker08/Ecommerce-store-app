import { createFileRoute } from "@tanstack/react-router";
import { SecondShopPage } from "../Components/Shop/SecondShopPage/SecondShopPage";

export const Route = createFileRoute("/secondShopPage")({
  component: SecondShopPage,
});
