import { createFileRoute } from "@tanstack/react-router";
import { FirstShopPage } from "../Components/Shop/FirstShopPage/FirstShopPage";

export const Route = createFileRoute("/firstShopPage")({
  component: FirstShopPage,
});
