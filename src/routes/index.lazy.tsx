import { createLazyFileRoute, useNavigate } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { atoms } from "../components/index.tsx";
import { molecules } from "../components/index.tsx";
import { usePokemonPaginatedList } from "../utils/pokeApi/usePokeApi.ts";
import "./index.css";
import { usePokemonList } from '../utils/pokeApi/usePokeApi.ts';
import Molecules from '../components/molecules/index';

export const Route = createLazyFileRoute("/")({
  component: Index,
});

function Index() {
  const navigate = useNavigate();
  const [limit, setLimit] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [filteredData, setFilteredData] = useState([]);
  const [masterData, setMasterData] = useState([]);
  const [search, setSearch] = useState('');
  // const [selectedMove, setSelectedMove] = useState(null);

  const pokemonPaginated = usePokemonPaginatedList(limit);

  const pokemonList = usePokemonList()

  console.log("pokemonPaginated: ", pokemonPaginated.data)

  const [selectedType, setSelectedType] = useState('');

  const handleTypeChange = (newType: any) => {
    setSelectedType(newType);
    console.log(selectedType)

     
  };

  useEffect(() => {
    console.log('Selected type:', selectedType);
  }, [selectedType]);



  //Este useEffeect es el que me redefiniria "filteredData" que es aquel en el que se renderizan los pokemones a partir de algun tipo de filtrado
  // Si puedes ayudarme te lo agradeceria :)


  // useEffect(() => {

  
  //   const filterData = () => {
    
  //     if (!search && !selectedType) {
  //       // En caso que no exista alguna alteracion por filtro
  //       return pokemonPaginated.data;
  //     } else if (search) {
  //       // solo barra de busqueda
  //       return pokemonPaginated.data?.filter((pokemon) =>
  //         pokemon.name.toUpperCase().includes(search.toUpperCase())
  //       );
  //     } else {
  //       // Solo select de filtro
  //       return pokemonPaginated.data?.filter((pokemon) =>
  //         pokemon?.types?.some((typeObject) => typeObject?.type.name === selectedType)
  //       );
  //     }
  //   };
  //     const filteredData:any = filterData();
  //   setFilteredData(filteredData);
  //   }, [search, selectedType, limit, pokemonPaginated]);

  if(pokemonPaginated.data){
    console.log("pokemonList: ", pokemonPaginated.data)
  }

  // const handleMoveChange = (string: any) => {
  //   setSelectedMove(string);
  // };

  const spriteExists = (sprites: any) => {
    return sprites?.front_default;
    // sprites?.other?.dream_world?.front_default ||
    // sprites?.other?.official_artwork?.front_default ||
    // sprites?.other?.showdown?.front_default
  };

  useEffect(() => {
    const handleScroll = () => {
      if (search) {
        return; // Si search está definida y existe, no se ejecuta el handleScroll
      }
      const scrollHeight = document.documentElement.scrollHeight;
      const scrollTop = document.documentElement.scrollTop;
      const clientHeight = document.documentElement.clientHeight;
  
      // Calcular el porcentaje de la página que ha sido scrolleada
      const scrolledPercentage = (scrollTop + clientHeight) / scrollHeight * 100;
  
      // Establecer un porcentaje mínimo, por ejemplo 80%
      const minPercentage = 95;

      
  
      if ( limit<=11 && pokemonPaginated.data && !pokemonPaginated.isLoading && scrolledPercentage >= minPercentage ) {
        setIsLoading(true);
        setLimit((prev) => prev + 1);
        console.log("limit: ",limit)
      }
    };



    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [search, limit, pokemonPaginated]);

  const pokemonData:any = pokemonPaginated.data

  useEffect(() => {
    if ( pokemonData) {
      setFilteredData(pokemonData);
      setMasterData(pokemonData);
      setIsLoading(false);
    }
  }, [ pokemonData]);



  

  const searchFilter = (text: string) => {
    const searchText = text.toUpperCase();
    if (searchText) {
      const newData: any = pokemonList.data?.filter((pokemon) =>
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
    {pokemonPaginated.isLoading  || isLoading ?(
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
           {/* Dropdown Menu */}
            <div className="move-dropdown">
          <molecules.PalTypeDropDown 
              selectedType={selectedType}
            onTypeChange={handleTypeChange}
            />

        
              </div>

        </div>
        {pokemonPaginated.data && pokemonPaginated.isSuccess && filteredData && filteredData.length >= 0 ? (
          <molecules.DynaWrapper orientation="horizontal">
            {filteredData.map((pokemon: any) => (
              <div key={pokemon.name}>
                {spriteExists(pokemon?.sprites) &&  
                <molecules.PalCard
                    data={pokemon}
                    onClick={() => navigate({ to: `/about/${pokemon.name}` })}
                  />}
              </div>
            ))}
          </molecules.DynaWrapper>
        ) : (
          <molecules.DynaWrapper orientation="horizontal">
            {pokemonPaginated.data?.map((pokemon: any) => (
              <div key={pokemon.name}>
                {spriteExists(pokemon?.sprites) &&  
                <molecules.PalCard
                    data={pokemon}
                    onClick={() => navigate({ to: `/about/${pokemon.name}` })}
                  />}
              </div>
            ))}
          </molecules.DynaWrapper>
        )}
      </div>
    )}
  </div>
  );


}
