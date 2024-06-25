import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/about/$pokemon")({
  component: AboutPokemon,
});

function AboutPokemon() {
  return <div>about/$pokemon</div>;
}
