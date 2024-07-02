import {
  createRootRoute,
  // Link,
  Outlet,
  ScrollRestoration,
} from "@tanstack/react-router";
// import { TanStackRouterDevtools } from "@tanstack/router-devtools";

export const Route = createRootRoute({
  component: () => (
    <>
      <div
        style={{
          display: "flex",
          width: "100%",
          alignItems: "center",
          justifyContent: "center",
          gap: "1rem",
        }}
      >
        {/* <Link to="/">Home</Link> <Link to="/about">About</Link> */}
      </div>
      <Outlet />
      <ScrollRestoration />
      {/* <TanStackRouterDevtools /> */}
    </>
  ),
});
