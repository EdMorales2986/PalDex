import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { pokeApi } from "./api.ts";

// API Calls

async function PokeQueryListFn() {
  try {
    const { results } = await pokeApi.pokemon.listPokemons(0, 10000);
    // .then((res) => {
    //   res.results.forEach(async (pokemon, index) => {
    //     const extraInfo = await pokeApi.pokemon.getPokemonByName(
    //       pokemon.name
    //     );
    //     res.results[index] = { ...pokemon, ...extraInfo };
    //   });
    //   return res.results;
    // });

    const pokemons = await Promise.all(
      results.map(async (pokemon) => {
        const extraInfo = await pokeApi.pokemon.getPokemonByName(pokemon.name);
        return { ...pokemon, ...extraInfo };
      })
    );

    return pokemons;
  } catch (error) {
    throw new Error("Error fetching pokemon list");
  }
}

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

async function PokeQueryDetailsFn(name: string) {
  try {
    const pokemon = await pokeApi.pokemon.getPokemonByName(name);

    const pokeSpecie = await pokeApi.pokemon
      .getPokemonSpeciesById(pokemon.id)
      .catch(() => {
        console.log("Error fetching pokemon species", pokemon.id);
        return null;
      });

    const modifiedPokemon: any = { ...pokemon };

    // Fetch abilities
    const abilities = await Promise.all(
      pokemon.abilities.map(async (ability) => {
        const abilityInfo = await pokeApi.pokemon.getAbilityByName(
          ability.ability.name
        );

        const englishAbilities = abilityInfo.effect_entries.filter(
          (entry: any) => entry.language.name === "en"
        );

        console.log(englishAbilities);

        if (englishAbilities.length === 0) {
          const altAbilityInfo = abilityInfo.flavor_text_entries.find(
            (entry: any) => entry.language.name === "en"
          );

          return {
            name: ability.ability.name,
            effect: altAbilityInfo?.flavor_text || "No description available",
          };
        }

        return {
          name: ability.ability.name,
          effect:
            englishAbilities[0]?.short_effect ||
            englishAbilities[0]?.effect ||
            "No description available",
        };
      })
    );

    modifiedPokemon.abilities = abilities;
    console.log(modifiedPokemon.abilities);

    // Fetch evolution chain
    if (pokeSpecie?.evolution_chain) {
      const evolutions = await fetch(pokeSpecie.evolution_chain.url).then(
        (res) => res.json()
      );
      function extractSpeciesFromEvolvesTo(chain: any) {
        let species: any = [];

        species.push({
          evolution: chain.species.name,
          trigger: null,
        });

        chain.evolves_to.forEach((evolution: any) => {
          species.push({
            evolution: evolution.species.name,
            trigger: evolution.evolution_details,
          });
          evolution.evolves_to.forEach((evolution: any) => {
            species.push({
              evolution: evolution.species.name,
              trigger: evolution.evolution_details,
            });
          });
        });

        return species;
      }
      modifiedPokemon.evolutions = extractSpeciesFromEvolvesTo(
        evolutions.chain
      );
    }
    // Fetch moves
    const moves = await Promise.all(
      pokemon.moves.map(async (move) => {
        const moveInfo = await pokeApi.move.getMoveByName(move.move.name);
        return {
          name: move.move.name,
          type: moveInfo.type.name,
          power: moveInfo.power,
          pp: moveInfo.pp,
          accuracy: moveInfo.accuracy,
        };
      })
    );
    modifiedPokemon.moves = moves;

    // Fetch locations
    const locations = await pokeApi.pokemon.getPokemonLocationAreaById(
      pokemon.id
    );

    modifiedPokemon.locations = locations;

    return modifiedPokemon;
  } catch (error) {
    throw new Error("Error fetching pokemon details");
  }
}

// Hooks

export function usePokemonList() {
  return useQuery({
    queryKey: ["pokemon"],
    queryFn: () => PokeQueryListFn(),
  });
}

export function usePokemonPaginatedList(limit: number) {
  return useQuery({
    queryKey: ["pokemon", limit],
    queryFn: () => PokeQueryPaginatedListFn(limit),
    placeholderData: keepPreviousData,
  });
}

export function usePokemonDetails(name: string) {
  return useQuery({
    queryKey: ["pokemon", name],
    queryFn: () => PokeQueryDetailsFn(name),
    enabled: !!name,
  });
}
