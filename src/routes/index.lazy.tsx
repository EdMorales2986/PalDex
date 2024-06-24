import { createLazyFileRoute } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { atoms } from "../components/index.tsx";
import { molecules } from "../components/index.tsx";
import { usePokemonPaginatedList } from "../utils/pokeApi/usePokeApi.ts";
import "./index.css";

export const Route = createLazyFileRoute("/")({
  component: Index,
});

function Index() {
  const [limit, setLimit] = useState(1);
  const pokemonPaginated = usePokemonPaginatedList(limit);

  // const [pokemons, setPokemons] = useState<any[]>([]);
  // Old code used to filter out duplicates -- no longer needed but kept for reference
  // useEffect(() => {
  //   if (pokemonPaginated.data) {
  //     setPokemons((prev) => {
  //       const newPokemons = pokemonPaginated.data.filter(
  //         (pokemon: any) => !prev.find((p) => p.name === pokemon.name)
  //       );

  //       return [...prev, ...newPokemons];
  //     });
  //   }
  // }, [pokemonPaginated.isSuccess]);

  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + document.documentElement.scrollTop !==
        document.documentElement.offsetHeight
      )
        return;
      setLimit((prev) => prev + 1);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div>
      {/* <button onClick={() => setLimit((prev) => prev + 1)}>Load More</button> */}

      {pokemonPaginated.isLoading && <p>Loading...</p>}

      {pokemonPaginated.data && pokemonPaginated.isSuccess && (
        <div className="container">
          <atoms.DynaWrapper orientation="horizontal">
            {pokemonPaginated.data.map((pokemon: any) => (
              <molecules.PalCard key={pokemon.name} data={pokemon} />
            ))}
          </atoms.DynaWrapper>
        </div>
      )}
    </div>
  );
}
