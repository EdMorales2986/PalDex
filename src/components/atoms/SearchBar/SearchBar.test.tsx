import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import { expect } from 'chai';
import { SearchBar } from './SearchBar';

describe('SearchBar', () => {
  it('renders an input element', () => {
    // Arrange
    render(<SearchBar value="" onChange={() => {}} />);

    // Assert
    expect(screen.getByRole('textbox')).to.exist;
  });

  it('calls the onChange handler when the input value changes', () => {
    // Arrange
    let inputValue = '';
    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      inputValue = event.target.value;
    };

    // Act
    render(<SearchBar value={inputValue} onChange={onChange} />);
    fireEvent.change(screen.getByRole('textbox'), { target: { value: 'test' } });

    // Assert
    expect(inputValue).to.equal('test');
  });

  it('displays the correct value in the input', () => {
    // Arrange
    const value = 'Hello, world!';

    // Act
    render(<SearchBar value={value} onChange={() => {}} />);


  });
});