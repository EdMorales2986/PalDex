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

  return (
    <div>
      {isLoading && <p>Loading...</p>}

      {data && isSuccess && (
        <div className="container">
          <div className="dataContainer">
            <div className="leftSide">
              {/* <img
                src={data?.sprites?.front_default || undefined}
                alt={data?.name}
                className="sprite"
              /> */}
              <atoms.PalFrame data={data} />
              <div>
                <span className="pal-id">
                  {data?.name} #{data?.id}
                </span>
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
          </div>
        </div>
      )}
    </div>
  );
}
