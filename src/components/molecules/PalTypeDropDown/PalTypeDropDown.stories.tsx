
import { PalTypeDropDown } from './PalTypeDropDown'; // Adjust the path if necessary
import { Meta, StoryObj } from '@storybook/react';

export default {
  title: 'Components/PalTypeDropDown',
  component: PalTypeDropDown,
};

const meta: Meta<typeof PalTypeDropDown> = {
  component: PalTypeDropDown,
  title: 'PalTypeDropDown',
};

// Sample types for props (adjust if needed)
interface PalTypeDropDownProps {
  selectedType: string;
  onTypeChange: (type: string) => void;
}

export const Basic: StoryObj<typeof PalTypeDropDown> = {
  args: {
    selectedType: '', // Initial selected type (default: empty)
    onTypeChange: (type:any) => console.log('Type changed:', type), // Mock function
  },
};

// Optional stories with different props
export const PreselectedType: StoryObj<typeof PalTypeDropDown> = {
  ...Basic,
  args: {
    ...Basic.args,
    selectedType: 'Fire', // Pre-select a type
  },
};
