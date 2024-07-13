
import PropTypes from 'prop-types';
import './PalTypeDropDown.css';

export interface PalTypeDropDownProps {
  selectedType: string;
  onTypeChange: (type: string) => void;
}

export const PalTypeDropDown= ({
  selectedType,
  onTypeChange,
}: PalTypeDropDownProps ) => {
  const pokemonTypes = [
    { type: 'Normal', color: '#A8A77A' },
    { type: 'Fighting', color: '#C22E28' },
    { type: 'Flying', color: '#A98FF3' },
    { type: 'Poison', color: '#A33EA1' },
    { type: 'Ground', color: '#E2BF65' },
    { type: 'Rock', color: '#B6A136' },
    { type: 'Bug', color: '#A6B91A' },
    { type: 'Ghost', color: '#735797' },
    { type: 'Steel', color: '#B7B7CE' },
    { type: 'Fire', color: '#EE8130' },
    { type: 'Water', color: '#6390F0' },
    { type: 'Grass', color: '#7AC74C' },
    { type: 'Electric', color: '#F7D02C' },
    { type: 'Psychic', color: '#F95587' },
    { type: 'Ice', color: '#96D9D6' },
    { type: 'Dragon', color: '#6F35FC' },
    { type: 'Dark', color: '#705746' },
    { type: 'Fairy', color: '#D685AD' },
  ];

  return (
    <div className="pal-type-dropdown">
      <select
        value={selectedType}
        onChange={(e) => onTypeChange(e.target.value)}
        className="pal-type-select"
      >
        <option value="">Select a Pokémon Type</option>
        {pokemonTypes.map((type) => (
          <option
            key={type.type}
            value={type.type}
            style={{ color: type.color }}
          >
            {type.type}
          </option>
        ))}
      </select>
    </div>
  );
};

PalTypeDropDown.propTypes = {
  selectedType: PropTypes.string.isRequired,
  onTypeChange: PropTypes.func.isRequired,
};

