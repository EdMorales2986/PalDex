// import React from "react";
import PropTypes from "prop-types";
import "./PalCard.css";
import atoms from "../atoms";

export interface PalCardProps {
  data: any;
  onClick?: () => void;
}

export const PalCard = ({ data, onClick }: PalCardProps) => {
  const capitalizeFirstLetter = (string: string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  return (
    <div className="pal-card" onClick={onClick}>
      <div className="pal-card--top">
        {/* Replace what's in here with a comp */}
        <img
          className="pal-card--img"
          src={
            data?.sprites?.front_default ||
            data?.sprites?.other?.dream_world?.front_default ||
            data?.sprites?.other?.official_artwork?.front_default ||
            data?.sprites?.other?.showdown?.front_default
          }
          alt={data.name}
        />
      </div>
      <div className="pal-card--bottom">
        <h3 className="pal-card--name">
          {capitalizeFirstLetter(data?.name)} #{data?.id}
        </h3>
        <div className="pal-card--types">
          {data.types.map((type: any) => (
            <atoms.TypeLabel
              key={data.id + type.type.name}
              type={type.type.name}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

PalCard.propTypes = {
  data: PropTypes.object.isRequired,
  onClick: PropTypes.func,
};
