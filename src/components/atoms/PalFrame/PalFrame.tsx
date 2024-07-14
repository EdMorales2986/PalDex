import PropTypes from "prop-types";
import "./PalFrame.css";
import { useState } from "react";

export interface PalFrameProps {
  //   onMouseEnter?: () => void;
  //   onMouseLeave?: () => void;
  onClick?: () => void;
  data: any;
}

export const PalFrame = ({ data, ...props }: PalFrameProps) => {
  const [imageSrc, setImageSrc] = useState(data?.sprites?.front_default);

  const handleEnter = () => {
    if (data?.sprites?.back_default) {
      setImageSrc(data?.sprites?.back_default);
    }
  };

  const handleLeave = () => {
    if (data?.sprites?.front_default) {
      setImageSrc(data?.sprites?.front_default);
    }
  };

  return (
    <img
      className="sprite"
      src={imageSrc}
      alt={data?.name}
      {...props}
      onMouseEnter={() => handleEnter()}
      onMouseLeave={() => handleLeave()}
    />
  );
};

PalFrame.propTypes = {
  // onMouseEnter: PropTypes.func,
  // onMouseLeave: PropTypes.func,
  onClick: PropTypes.func,
  data: PropTypes.object,
};
