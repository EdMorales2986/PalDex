// Francisco, what is this? 201% done by AI...
// import * as jest from 'jest';
// import { render, fireEvent } from '@testing-library/react';
// import { PalTypeDropDown, PalTypeDropDownProps } from './PalTypeDropDown'; // Assuming this is the path to your component

// describe('PalTypeDropDown', () => {
//   it('renders the dropdown with the correct options', () => {
//     const mockOnTypeChange = jest.fn();
//     const props: PalTypeDropDownProps = {
//       selectedType: '',
//       onTypeChange: mockOnTypeChange,
//     };

//     const { getByText, getAllByRole } = render(<PalTypeDropDown {...props} />);

//     expect(getByText('Select a Pokémon Type')).toBeInTheDocument();

//     const options = getAllByRole('option');
//     expect(options.length).toBe(19); // 18 types + "Select a Pokémon Type"

//     expect(options[0].textContent).toBe('Select a Pokémon Type');
//     expect(options[1].textContent).toBe('Normal');
//     expect(options[2].textContent).toBe('Fighting');
//     // You can add assertions for the remaining options here if needed

//     // Tip: Consider using a loop to iterate and check all options for efficiency
//   });

//   it('calls the onTypeChange callback when an option is selected', () => {
//     const mockOnTypeChange = jest.fn();
//     const props: PalTypeDropDownProps = {
//       selectedType: '',
//       onTypeChange: mockOnTypeChange,
//     };

//     const { getByRole } = render(<PalTypeDropDown {...props} />);

//     fireEvent.change(getByRole('combobox'), { target: { value: 'Fire' } });

//     expect(mockOnTypeChange).toHaveBeenCalledWith('Fire');
//   });
// });

import { PalTypeDropDown, PalTypeDropDownProps } from "./PalTypeDropDown";
import { render, cleanup, screen, fireEvent } from "@testing-library/react";

afterEach(cleanup);

describe("PalTypeDropDown", () => {
  const mockOnTypeChange = vi.fn();

  beforeEach(() => {
    const props: PalTypeDropDownProps = {
      selectedType: "",
      onTypeChange: mockOnTypeChange,
    };

    render(<PalTypeDropDown {...props} />);
  });

  test("renders the dropdown with the correct options", () => {
    expect(screen.getByText("Select a Pokémon Type")).toBeDefined();

    const options = screen.getAllByRole("option");
    expect(options.length).toBe(19); // 18 types + "Select a Pokémon Type"

    expect(options[0].textContent).toBe("Select a Pokémon Type");
    expect(options[1].textContent).toBe("Normal");
    expect(options[2].textContent).toBe("Fighting");
    expect(options[3].textContent).toBe("Flying");
    expect(options[4].textContent).toBe("Poison");
    expect(options[5].textContent).toBe("Ground");
    expect(options[6].textContent).toBe("Rock");
    expect(options[7].textContent).toBe("Bug");
    expect(options[8].textContent).toBe("Ghost");
    expect(options[9].textContent).toBe("Steel");
    expect(options[10].textContent).toBe("Fire");
    expect(options[11].textContent).toBe("Water");
    expect(options[12].textContent).toBe("Grass");
    expect(options[13].textContent).toBe("Electric");
    expect(options[14].textContent).toBe("Psychic");
    expect(options[15].textContent).toBe("Ice");
    expect(options[16].textContent).toBe("Dragon");
    expect(options[17].textContent).toBe("Dark");
    expect(options[18].textContent).toBe("Fairy");
  });

  test("calls the onTypeChange callback when an option is selected", () => {
    fireEvent.change(screen.getByRole("combobox"), {
      target: { value: "Fire" },
    });

    expect(mockOnTypeChange).toHaveBeenCalledWith("Fire");
  });
});
