import {
  createLazyFileRoute,
  Outlet,
  ScrollRestoration,
} from "@tanstack/react-router";

export const Route = createLazyFileRoute("/about")({
  component: About,
});

function About() {
  return (
    <>
      <Outlet />
      <ScrollRestoration />
    </>
  );
}
