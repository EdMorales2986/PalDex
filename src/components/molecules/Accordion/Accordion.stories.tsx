
import { Accordion } from './Accordion'; // Adjust the path if necessary
import { Meta, StoryObj } from '@storybook/react';

export default {
  title: 'Components/Accordion',
  component: Accordion,
};

const meta: Meta<typeof Accordion> = {
  component: Accordion,
  title: 'Accordion',
  argTypes: {
    data: {
      control: { type: 'object' },
      description: 'Data for accordion items',
    },
  },
};

export const Basic: StoryObj<typeof Accordion> = {
  args: {
    data: [
      {
        move: { name: 'Tackle' },
        description: 'A basic attack that deals damage to the opponent.',
      },
      {
        move: { name: 'Ember' },
        description: 'A fiery attack that deals fire-type damage to the opponent.',
      },
    ],
  },
};

export const Expanded: StoryObj<typeof Accordion> = {
  ...Basic,
  args: {
    ...Basic.args,

  },
};

export const ActiveItem: StoryObj<typeof Accordion> = {
  ...Basic,
  args: {
    ...Basic.args,

  },
};
