// import {
//   // useState,
//   useEffect,
// } from "react";
import { createLazyFileRoute, useNavigate } from "@tanstack/react-router";
import { atoms } from "../components/index.tsx";
import { molecules } from "../components/index.tsx";
// import { atoms, molecules } from "paldex-ui";
import { usePokemonDetails } from "../utils/pokeApi/usePokeApi";

import "./about.css";

export const Route = createLazyFileRoute("/about/$pokemon")({
  component: AboutPokemon,
});

function AboutPokemon() {
  const navigate = useNavigate();
  const { pokemon } = Route.useParams();
  const { data, isSuccess, isLoading, isFetching } = usePokemonDetails(pokemon);

  const formatPalId = (id: any) => {
    return id.toString().padStart(4, "0");
  };

  return (
    <div>
      {isFetching || isLoading ? (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
          }}
        >
          <atoms.Loader />
        </div>
      ) : (
        <>
          {data && isSuccess && (
            <div className="about-container">
              <div className="about-dataContainer">
                <div className="about-leftSide">
                  <atoms.PalFrame data={data} />
                  <div className="about-pal-id">
                    {"#" +
                      formatPalId(data?.id) +
                      " " +
                      data?.name?.toUpperCase()}
                  </div>
                  <div className="about-pal-types">
                    {data?.types?.map((type: any) => (
                      <atoms.TypeLabel
                        key={type.type.name}
                        type={type.type.name}
                      />
                    ))}
                  </div>

                  <div className="about-evolutions">
                    {data?.evolutions && data?.evolutions?.length > 0 && (
                      <>
                        {data?.evolutions.map(
                          (evolution: any, index: number) => (
                            <div
                              key={evolution.evolution}
                              onClick={() => {
                                navigate({
                                  to: `/about/${evolution.evolution}`,
                                });
                              }}
                            >
                              {evolution.evolution}
                              {index !== data.evolutions.length - 1 && (
                                <span>    &#8594;</span>
                              )}
                            </div>
                          )
                        )}
                      </>
                    )}
                  </div>
                </div>

                <div className="about-rightSide">
                  {data?.stats?.map((stat: any) => (
                    <div key={stat.stat.name} style={{ width: "80%" }}>
                      <atoms.PalStatBar
                        name={stat.stat.name}
                        value={stat.base_stat}
                        max={200}
                      />
                    </div>
                  ))}
                </div>

                <div className="about-underSide">
                  {data?.abilities && data?.abilities?.length > 0 && (
                    <div style={{ width: 300 }}>
                      <molecules.Accordion label="Abilities">
                        {data?.abilities.map((ability: any) => (
                          <div key={ability.name}>
                            <molecules.Accordion label={ability.name}>
                              {ability.effect && <div>{ability.effect}</div>}
                            </molecules.Accordion>
                          </div>
                        ))}
                      </molecules.Accordion>
                    </div>
                  )}

                  {data?.moves && data?.moves?.length > 0 && (
                    <div style={{ width: 300 }}>
                      <molecules.Accordion label="Moves">
                        {data?.moves.map((move: any) => (
                          <div key={move.name}>
                            <molecules.Accordion label={move.name}>
                              {move?.type && <div>Type: {move.type}</div>}
                              {move?.power && <div>Power: {move.power}</div>}
                              {move?.pp && <div>PP: {move.pp}</div>}
                              {move?.accuracy && (
                                <div>Accuracy: {move.accuracy}</div>
                              )}
                            </molecules.Accordion>
                          </div>
                        ))}
                      </molecules.Accordion>
                    </div>
                  )}

                  {data?.locations && data?.locations?.length > 0 && (
                    <div style={{ width: 550 }}>
                      <molecules.Accordion label="Locations">
                        {data?.locations.map((location: any) => (
                          <div
                            key={location.location_area.name}
                            style={{ marginBottom: 2 }}
                          >
                            {location.location_area.name} - (
                            {location.version_details[0].version.name})
                          </div>
                        ))}
                      </molecules.Accordion>
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
}
