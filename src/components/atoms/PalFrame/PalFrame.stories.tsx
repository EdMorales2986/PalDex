import { PalFrame } from "./PalFrame";
import { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";

const meta: Meta = {
  title: "Atoms/PalFrame",
  component: PalFrame,
  args: {
    data: {
      name: "bulbasaur",
      sprites: {
        front_default:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
        back_default:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/1.png",
      },
    },
    onClick: fn(),
    onMouseEnter: fn(),
    onMouseLeave: fn(),
  },
  tags: ["autodocs"],
};

export default meta;
type StoryType = StoryObj<typeof PalFrame>;

export const Default: StoryType = {
  args: {
    data: {
      name: "bulbasaur",
      sprites: {
        front_default:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
        back_default:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/1.png",
      },
    },
  },
};
