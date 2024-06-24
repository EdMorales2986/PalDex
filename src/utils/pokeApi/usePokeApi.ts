import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { pokeApi } from "./api.ts";

// async function PokeQueryListFn() {
//   try {
//     const pokemons = await pokeApi.pokemon
//       .listPokemons(0, 10000)
//       .then((res) => {
//         res.results.forEach(async (pokemon, index) => {
//           const extraInfo = await pokeApi.pokemon.getPokemonByName(
//             pokemon.name
//           );
//           res.results[index] = { ...pokemon, ...extraInfo };
//         });
//         return res.results;
//       });
//     return pokemons;
//   } catch (error) {
//     throw new Error("Error fetching pokemon list");
//   }
// }

async function PokeQueryPaginatedListFn(limit: number) {
  try {
    const { results } = await pokeApi.pokemon.listPokemons(0, limit * 100);

    const pokemons = await Promise.all(
      results.map(async (pokemon) => {
        const extraInfo = await pokeApi.pokemon.getPokemonByName(pokemon.name);
        return { ...pokemon, ...extraInfo };
      })
    );

    // console.log(pokemons);
    return pokemons;
  } catch (error) {
    throw new Error("Error fetching pokemon list");
  }
}

// export function usePokemonList() {
//   return useQuery({
//     queryKey: ["pokemon"],
//     queryFn: () => PokeQueryListFn(),
//   });
// }

export function usePokemonPaginatedList(limit: number) {
  return useQuery({
    queryKey: ["pokemon", limit],
    queryFn: async () => PokeQueryPaginatedListFn(limit),
    placeholderData: keepPreviousData,
  });
}

export function usePokemonDetails(name: string) {
  return useQuery({
    queryKey: ["pokemon", name],
    queryFn: () => {
      try {
        return pokeApi.pokemon.getPokemonByName(name);
      } catch (error) {
        throw new Error("Error fetching pokemon details");
      }
    },
  });
}
