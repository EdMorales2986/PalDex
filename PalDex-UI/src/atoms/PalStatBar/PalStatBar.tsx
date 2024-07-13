import PropTypes from "prop-types";
import "./PalStatBar.css";

export interface PalStatBarProps {
  name?: string;
  value?: number;
  max?: number;
  //   onClick?: () => void;
}

export const PalStatBar = ({
  name = "unknown",
  value = 0,
  max = 200,
  ...props
}: PalStatBarProps) => {
  return (
    <div className="stat-bar" {...props}>
      <span className="stat-bar--name">{name}</span>
      <span className="stat-bar--value">{value}</span>
      <div className="stat-bar--bar">
        <div
          className="stat-bar--fill"
          style={{ width: `${(value / max) * 100}%` }}
        />
      </div>
    </div>
  );
};

PalStatBar.propTypes = {
  name: PropTypes.string,
  value: PropTypes.number,
  max: PropTypes.number,
  //   onClick: PropTypes.func,
};
