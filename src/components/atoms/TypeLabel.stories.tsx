import { TypeLabel } from "./TypeLabel";
import { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";

const meta: Meta = {
  title: "Atoms/TypeLabel",
  component: TypeLabel,
  argTypes: {
    type: {
      control: {
        type: "select",
        options: [
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
        ],
      },
    },
  },
  args: {
    onClick: fn(),
  },
  tags: ["autodocs"],
};

export default meta;
type StoryType = StoryObj<typeof TypeLabel>;

export const Normal: StoryType = {
  args: {
    type: "normal",
  },
};

export const Fire: StoryType = {
  args: {
    type: "fire",
  },
};

export const Water: StoryType = {
  args: {
    type: "water",
  },
};

export const Grass: StoryType = {
  args: {
    type: "grass",
  },
};

export const Electric: StoryType = {
  args: {
    type: "electric",
  },
};

export const Ice: StoryType = {
  args: {
    type: "ice",
  },
};

export const Fighting: StoryType = {
  args: {
    type: "fighting",
  },
};

export const Poison: StoryType = {
  args: {
    type: "poison",
  },
};

export const Ground: StoryType = {
  args: {
    type: "ground",
  },
};

export const Flying: StoryType = {
  args: {
    type: "flying",
  },
};

export const Psychic: StoryType = {
  args: {
    type: "psychic",
  },
};

export const Bug: StoryType = {
  args: {
    type: "bug",
  },
};

export const Rock: StoryType = {
  args: {
    type: "rock",
  },
};

export const Ghost: StoryType = {
  args: {
    type: "ghost",
  },
};

export const Dark: StoryType = {
  args: {
    type: "dark",
  },
};

export const Dragon: StoryType = {
  args: {
    type: "dragon",
  },
};

export const Steel: StoryType = {
  args: {
    type: "steel",
  },
};

export const Fairy: StoryType = {
  args: {
    type: "fairy",
  },
};
