import  { ChangeEvent,  HTMLInputTypeAttribute } from 'react';
import PropTypes from "prop-types";
import "./SearchBar.css";


export interface SearchBarProps {
  label?: string;
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  type?: HTMLInputTypeAttribute;
  placeholder?: string;
  className?: string;
}

export const SearchBar = ({
  label,
  value,
  onChange,
  type = 'text',
  placeholder = '',
  className = '',
}: SearchBarProps) => {
  return (
    <div className={`input-group ${className}`}>
      {label && <label>{label}</label>}
      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="form-control"
      />
    </div>
  );
};


SearchBar.propTypes = {
  label: PropTypes.string,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  type: PropTypes.oneOf(['text', 'email', 'password', 'number']),
  placeholder: PropTypes.string,
  className: PropTypes.string,
};



