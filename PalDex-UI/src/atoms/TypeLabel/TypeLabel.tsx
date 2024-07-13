// import React from "react";
import PropTypes from "prop-types";
import "./TypeLabel.css";

export interface TypeLabelProps {
  type?:
    | "normal"
    | "fire"
    | "water"
    | "grass"
    | "electric"
    | "ice"
    | "fighting"
    | "poison"
    | "ground"
    | "flying"
    | "psychic"
    | "bug"
    | "rock"
    | "ghost"
    | "dark"
    | "dragon"
    | "steel"
    | "fairy"
    | "unknown";
  onClick?: () => void;
}

export const TypeLabel = ({ type = "unknown", ...props }: TypeLabelProps) => {
  if (
    ![
      "normal",
      "fire",
      "water",
      "grass",
      "electric",
      "ice",
      "fighting",
      "poison",
      "ground",
      "flying",
      "psychic",
      "bug",
      "rock",
      "ghost",
      "dark",
      "dragon",
      "steel",
      "fairy",
      "unknown",
    ].includes(type)
  ) {
    throw new Error("Invalid type");
  }

  return (
    <span className={`type-label type-label--${type}`} {...props}>
      {type}
    </span>
  );
};

TypeLabel.propTypes = {
  type: PropTypes.oneOf([
    "normal",
    "fire",
    "water",
    "grass",
    "electric",
    "ice",
    "fighting",
    "poison",
    "ground",
    "flying",
    "psychic",
    "bug",
    "rock",
    "ghost",
    "dark",
    "dragon",
    "steel",
    "fairy",
    "unknown",
  ]),
  onClick: PropTypes.func,
};
