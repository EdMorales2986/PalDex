// import {
//   useState,
//   useEffect,
// } from "react";
import { createLazyFileRoute } from "@tanstack/react-router";
import { atoms } from "../components/index.tsx";
// import { molecules } from "../components/index.tsx";
import { usePokemonDetails } from "../utils/pokeApi/usePokeApi";

import "./about.css";

export const Route = createLazyFileRoute("/about/$pokemon")({
  component: AboutPokemon,
});

function AboutPokemon() {
  const { pokemon } = Route.useParams();
  const { data, isLoading, isSuccess } = usePokemonDetails(pokemon);

  // useEffect(() => {
  //   console.log(data);
  // }, [data && isSuccess]);

  // there is a better way to do this..
  // function formatPalId(id: any, name:any ) {
  //   let formattedId = '';
  //   if (id < 10) {
  //     formattedId = `N.º 000${id}`;
  //   } else if (id < 100) {
  //     formattedId = `N.º 00${id}`;
  //   } else if (id < 1000) {
  //     formattedId = `N.º 0${id}`;
  //   } else {
  //     formattedId = `N.º ${id}`;
  //   }

  //   const formattedName = (name) ? name.toUpperCase() : '';

  //   return `${formattedId} ${formattedName}`;
  // }

  const formatPalId = (id: any) => {
    return id.toString().padStart(4, "0");
  };

  return (
    <div>
      {isLoading && <p>Loading...</p>}

      {data && isSuccess && (
        <div className="container">
          <div className="dataContainer">
            <div className="leftSide">
              <atoms.PalFrame data={data} />
              <div>
                {formatPalId(data?.id) + " " + data?.name?.toUpperCase()}
              </div>
              <div className="pal-types">
                {data?.types?.map((type: any) => (
                  <atoms.TypeLabel key={type.type.name} type={type.type.name} />
                ))}
              </div>
            </div>

            <div className="rightSide">
              {data?.stats?.map((stat: any) => (
                <div key={stat.stat.name}>
                  <atoms.PalStatBar
                    name={stat.stat.name}
                    value={stat.base_stat}
                    max={200}
                  />
                </div>
              ))}
            </div>

            <div>
              {/* <div className="Accordion">
                <molecules.Accordion 
                data = {data.moves}/>
            
            </div> */}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
