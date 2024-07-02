import { SearchBar} from "./SearchBar";
import { Meta, StoryObj } from "@storybook/react";


const meta: Meta<typeof SearchBar> = {
  title: "Components/SearchBar",
  component: SearchBar,
  argTypes: {
    onChange: { action: 'onChange' },
    type: {
      control: {
        type: 'select',
        options: ['text', 'email', 'password', 'number'],
      },
    },
  },
};

export default meta;

type StoryType = StoryObj<typeof SearchBar>;

export const Default: StoryType = {
  args: {
    value: '',
    placeholder: 'Search...',
  },
};

export const WithLabel: StoryType = {
  args: {
    label: 'Search',
    value: '',
    placeholder: 'Search...',
  },
};

export const WithType: StoryType = {
  args: {
    value: '',
    type: 'number',
    placeholder: 'Enter a number',
  },
};

export const WithClassName: StoryType = {
  args: {
    value: '',
    placeholder: 'Search...',
    className: 'custom-search-bar',
  },
};