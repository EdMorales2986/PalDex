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


  const [filteredData, setFilteredData] = useState([]);
  const [masterData, setMasterData] = useState([]);
  const [search, setSearch] = useState('');

  const [limit, setLimit] = useState(20); // Charge 20 pokémons à la fois
  const pokemonPaginated = usePokemonPaginatedList(limit);

  const spriteExists = (sprites: any) => {
    return (
      sprites?.front_default ||
      sprites?.other?.dream_world?.front_default ||
      sprites?.other?.official_artwork?.front_default ||
      sprites?.other?.showdown?.front_default
    );
  };


  const pokemonData:any = pokemonPaginated.data
  
  useEffect(() => {
    if ( pokemonData) {
      setFilteredData(pokemonData);
      setMasterData(pokemonData);
    }
  }, [ pokemonData]);



  console.log(pokemonPaginated.data)

  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + document.documentElement.scrollTop ===
        document.documentElement.offsetHeight
      ) {
        setLimit((prev) => prev + 20); // Augmenter la limite par incréments de 20
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

;

  const searchFilter = (text: string) => {
    const searchText = text.toUpperCase();
    if (searchText) {
      const newData: any = pokemonPaginated.data?.filter((pokemon) =>
        pokemon.name.toUpperCase().includes(searchText)
      );

      // console.log("NewData",newData)
      setFilteredData(newData);
      setMasterData(pokemonData);
      setSearch(text);
    } else {
     
      // console.log("masterData",masterData)
      setFilteredData(pokemonData);
      setMasterData(pokemonData);
      setSearch(text);
    }
  };


  return (
    <div>
    {pokemonPaginated.isLoading ? (
      <div className="containerr">
      <div className="loader">
        <atoms.Loader size={80} color="red" />
      </div>
      </div>
    ) : (
      <div className="container">
        <div className="search-container">
          <atoms.SearchBar
            placeholder="Who is that pokemon? ..."
            type="text"
            onChange={(event) => searchFilter(event.target.value)}
            value={search}
          />
        </div>
        {pokemonPaginated.data && pokemonPaginated.isSuccess && filteredData && filteredData.length >= 0 ? (
          <molecules.DynaWrapper orientation="horizontal">
            {filteredData.map((pokemon: any) => (
              <div key={pokemon.name}>
                {spriteExists(pokemon?.sprites) && <molecules.PalCard data={pokemon} />}
              </div>
            ))}
          </molecules.DynaWrapper>
        ) : (
          <molecules.DynaWrapper orientation="horizontal">
            {pokemonPaginated.data?.map((pokemon: any) => (
              <div key={pokemon.name}>
                {spriteExists(pokemon?.sprites) && <molecules.PalCard data={pokemon} />}
              </div>
            ))}
          </molecules.DynaWrapper>
        )}
      </div>
    )}
  </div>
  );
}