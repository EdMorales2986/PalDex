import React from "react";
import PropTypes from "prop-types";
import "./DynaWrapper.css";

export interface DynaWrapperProps {
  children: React.ReactNode;
  orientation?: "horizontal" | "vertical";
}

export const DynaWrapper = ({
  children,
  orientation = "horizontal",
  ...props
}: DynaWrapperProps) => {
  return (
    <div className={`dyna-wrapper dyna-wrapper--${orientation}`} {...props}>
      {children}
    </div>
  );
};

DynaWrapper.propTypes = {
  children: PropTypes.node.isRequired,
  orientation: PropTypes.oneOf(["horizontal", "vertical"]),
};
