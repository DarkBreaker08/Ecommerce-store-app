import { createRootRoute, Navigate, Outlet } from "@tanstack/react-router";
const Root = () => {
  return (
    <>
      <Navigate to="/home" />
      <Outlet />
    </>
  );
};

export const Route = createRootRoute({
  component: Root,
});
