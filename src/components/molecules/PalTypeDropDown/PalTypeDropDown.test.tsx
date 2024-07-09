// // PalTypeDropDown.test.tsx
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
