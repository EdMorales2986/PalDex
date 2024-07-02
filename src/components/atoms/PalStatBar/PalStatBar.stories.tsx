import { PalStatBar } from "./PalStatBar";
import { Meta, StoryObj } from "@storybook/react";
// import { fn } from "@storybook/test";

const meta: Meta = {
  title: "Atoms/PalStatBar",
  component: PalStatBar,
  argTypes: {
    value: {
      control: {
        type: "range",
        min: 0,
        max: 200,
        step: 1,
      },
    },
  },
  args: {
    name: "HP",
    value: 100,
    max: 200,
  },
  tags: ["autodocs"],
};

export default meta;
type StoryType = StoryObj<typeof PalStatBar>;

export const HP: StoryType = {
  args: {
    name: "HP",
    value: 100,
  },
};

export const Attack: StoryType = {
  args: {
    name: "Attack",
    value: 50,
  },
};

export const Defense: StoryType = {
  args: {
    name: "Defense",
    value: 75,
  },
};

export const SpecialAttack: StoryType = {
  args: {
    name: "Special-Attack",
    value: 100,
  },
};

export const SpecialDefense: StoryType = {
  args: {
    name: "Special-Defense",
    value: 125,
  },
};

export const Speed: StoryType = {
  args: {
    name: "Speed",
    value: 150,
  },
};
