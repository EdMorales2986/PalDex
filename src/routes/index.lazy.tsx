import { createLazyFileRoute, useNavigate } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { atoms } from "../components/index.tsx";
import { molecules } from "../components/index.tsx";
import { usePokemonPaginatedList } from "../utils/pokeApi/usePokeApi.ts";
import "./index.css";
import { usePokemonList } from "../utils/pokeApi/usePokeApi.ts";

export const Route = createLazyFileRoute("/")({
  component: Index,
});

function Index() {
  const navigate = useNavigate();
  const [limit, setLimit] = useState(1);
  const [filteredData, setFilteredData] = useState<any[]>([]);
  const [filterUsed, usingFilter] = useState(false);
  const [search, setSearch] = useState("");
  const [selectedType, setSelectedType] = useState("");
  // const [isLoading, setIsLoading] = useState(false);
  // const [masterData, setMasterData] = useState([]);

  const pokemonPaginated = usePokemonPaginatedList(limit);
  const pokemonList = usePokemonList();

  // With the changes made by me, DIO!!!, this useEffect is not needed anymore
  // const handleTypeChange = (newType: any) => {
  //   setSelectedType(newType);
  // };
  // this belongs to francisco
  // useEffect(() => {
  //   const data = () => {
  //     if (search) {
  //       // solo barra de busqueda
  //       return pokemonList.data?.filter((pokemon) =>
  //         pokemon.name.toUpperCase().includes(search.toUpperCase())
  //       );
  //     } else if (selectedType) {
  //       // Solo select de filtro
  //       return pokemonList.data?.filter((pokemon) =>
  //         pokemon?.types?.some(
  //           (typeObject) => typeObject?.type.name === selectedType.toLowerCase()
  //         )
  //       );
  //     }
  //   };
  //   setFilteredData(data());
  //   // console.log("Filtered Data: ", filteredData);
  // }, [search, selectedType]);

  const spriteExists = (sprites: any) => {
    return sprites?.front_default;
    // sprites?.other?.dream_world?.front_default ||
    // sprites?.other?.official_artwork?.front_default ||
    // sprites?.other?.showdown?.front_default
  };

  // Francisco this doesn't work as expected
  // useEffect(() => {
  //   const handleScroll = () => {
  //     if (search) {
  //       return; // Si search está definida y existe, no se ejecuta el handleScroll
  //     }
  //     const scrollHeight = document.documentElement.scrollHeight;
  //     const scrollTop = document.documentElement.scrollTop;
  //     const clientHeight = document.documentElement.clientHeight;

  //     // Calcular el porcentaje de la página que ha sido scrolleada
  //     const scrolledPercentage =
  //       ((scrollTop + clientHeight) / scrollHeight) * 100;

  //     // Establecer un porcentaje mínimo, por ejemplo 80%
  //     const minPercentage = 95;

  //     if (
  //       limit <= 11 &&
  //       pokemonPaginated.data &&
  //       !pokemonPaginated.isLoading &&
  //       scrolledPercentage >= minPercentage
  //     ) {
  //       setIsLoading(true);
  //       setLimit((prev) => prev + 1);
  //     }
  //   };

  //   window.addEventListener("scroll", handleScroll);
  //   return () => window.removeEventListener("scroll", handleScroll);
  // }, [search, limit, pokemonPaginated]);

  const searchFilter = (text: string) => {
    const searchText = text.toUpperCase();
    if (searchText) {
      usingFilter(true);
      const newData: any = pokemonList.data?.filter((pokemon) =>
        pokemon.name.toUpperCase().includes(searchText)
      );
      setFilteredData(newData);
      setSearch(text);
    } else {
      usingFilter(false);
      setSearch(text);
    }
  };

  const selectFilter = (type: string) => {
    if (type) {
      usingFilter(true);
      const newData: any = pokemonList.data?.filter((pokemon) =>
        pokemon?.types?.some(
          (typeObject) => typeObject?.type.name === type.toLowerCase()
        )
      );
      setFilteredData(newData);
      setSelectedType(type);
    } else {
      usingFilter(false);
      setSelectedType(type);
    }
  };

  useEffect(() => {
    if (filterUsed || search) {
      return;
    }

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
  }, [filterUsed]);

  return (
    <div>
      {pokemonPaginated.isLoading ? (
        <div className="containerr">
          <div>
            {/* <atoms.Loader size={80} color="red" /> */}
            <atoms.Loader />
          </div>
        </div>
      ) : (
        <div className="container">
          <div className="top">
            <atoms.SearchBar
              placeholder="Who is that pokemon?"
              type="text"
              onChange={(event) => searchFilter(event.target.value)}
              value={search}
            />
            <div className="move-dropdown">
              <molecules.PalTypeDropDown
                selectedType={selectedType}
                onTypeChange={(event) => {
                  console.log(event);
                  selectFilter(event);
                }}
              />
            </div>
          </div>

          <div className="bottom">
            {filterUsed && filteredData.length > 0 ? (
              <molecules.DynaWrapper orientation="horizontal">
                {filteredData.map((pokemon: any) => (
                  <div key={pokemon.name}>
                    {spriteExists(pokemon?.sprites) && (
                      <molecules.PalCard
                        data={pokemon}
                        onClick={() =>
                          navigate({ to: `/about/${pokemon.name}` })
                        }
                      />
                    )}
                  </div>
                ))}
              </molecules.DynaWrapper>
            ) : (
              <molecules.DynaWrapper orientation="horizontal">
                {pokemonPaginated.data?.map((pokemon: any) => (
                  <div key={pokemon.name}>
                    {spriteExists(pokemon?.sprites) && (
                      <molecules.PalCard
                        data={pokemon}
                        onClick={() =>
                          navigate({ to: `/about/${pokemon.name}` })
                        }
                      />
                    )}
                  </div>
                ))}
              </molecules.DynaWrapper>
            )}
          </div>

          {pokemonPaginated.isFetching && (
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                padding: "10px",
                margin: "10px",
              }}
            >
              <atoms.Loader />
            </div>
          )}

          <button
            className="scroll-top-button"
            onClick={() => {
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
          >
            UP
          </button>
        </div>
      )}
    </div>
  );
}
