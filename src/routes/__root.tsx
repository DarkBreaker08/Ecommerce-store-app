import { createRootRoute, Outlet } from "@tanstack/react-router";
import { Home } from "../Components/Home/Home";

const Root = () => {
  return <Home />;
};

export const Route = createRootRoute({
  component: Root,
});
