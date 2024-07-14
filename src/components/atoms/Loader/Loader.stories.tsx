import { Meta, StoryObj } from "@storybook/react";
import { Loader } from "./Loader";

const meta: Meta<typeof Loader> = {
  title: "Atoms/Loader",
  component: Loader,
  // argTypes: {
  //   size: { control: { type: 'number' } },
  //   color: { control: { type: 'color' } },
  // },
};

export default meta;

type StoryType = StoryObj<typeof Loader>;

export const Default: StoryType = {
  // args: {
  //   size: 40,
  //   color: '#f60000',
  // },
};
