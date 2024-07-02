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

  return (
    <img
      className="sprite"
      src={imageSrc}
      alt={data?.name}
      {...props}
      onMouseEnter={() => setImageSrc(data?.sprites?.back_default)}
      onMouseLeave={() => setImageSrc(data?.sprites?.front_default)}
    />
  );
};

PalFrame.propTypes = {
  // onMouseEnter: PropTypes.func,
  // onMouseLeave: PropTypes.func,
  onClick: PropTypes.func,
  data: PropTypes.object,
};
