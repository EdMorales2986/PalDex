import { PalTypeDropDown } from "./PalTypeDropDown"; // Adjust the path if necessary
import { Meta, StoryObj } from "@storybook/react";

// export default {
//   title: 'Components/PalTypeDropDown',
//   component: PalTypeDropDown,
// };

const meta: Meta = {
  component: PalTypeDropDown,
  title: "Molecules/PalTypeDropDown",
};

export default meta;
// interface PalTypeDropDownProps {
//   selectedType: string;
//   onTypeChange: (type: string) => void;
// }
type StoryType = StoryObj<typeof PalTypeDropDown>;

export const Basic: StoryType = {
  args: {
    selectedType: "", // Initial selected type (default: empty)
    onTypeChange: (type: any) => console.log("Type changed:", type), // Mock function
  },
};

// Optional stories with different props
export const PreselectedType: StoryType = {
  ...Basic,
  args: {
    ...Basic.args,
    selectedType: "Fire", // Pre-select a type
  },
};
