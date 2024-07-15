import { useState } from "react";
import "./Accordion.css";
import PropTypes from "prop-types";

export interface AccordionProps {
  // data: { [key: string]: any };
  label: string;
  children: React.ReactNode;
}

// Francisco, the Accordion component should receive children as props, so you can render the content of the accordion.

export const Accordion = ({
  // data
  label,
  children,
}: AccordionProps) => {
  // const [activeIndex, setActiveIndex] = useState<string | null>(null);
  const [isExpanded, setIsExpanded] = useState(false);

  // const toggleCollapse = (key: string) => {
  //   setActiveIndex(key === activeIndex ? null : key);
  // };

  const toggleAccordion = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="collapsable-container">
      <div className="collapsable-header" onClick={toggleAccordion}>
        <h3>{label}</h3>
        <span className="toggle-icon">{isExpanded ? "-" : "+"}</span>
      </div>
      {isExpanded && <div className="collapsable-content">{children}</div>}
    </div>
  );
};

Accordion.propTypes = {
  // data: PropTypes.object.isRequired,
  label: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
