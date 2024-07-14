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
      {isExpanded && (
        <div className="collapsable-content">
          {/* {data.map((item: any, index: any) => (
            <div key={index} className="collapsable-item">
              <div
                className={`collapsable-header ${
                  activeIndex === index ? "active" : ""
                }`}
                onClick={() => toggleCollapse(index)}
              >
                <h3>{item.move.name}</h3>
                <span className="toggle-icon">
                  {activeIndex === index ? "-" : "+"}
                </span>
              </div>
              {activeIndex === index && (
                <div className="collapsable-content">
                  <div>
                    <h4>Descripcion:</h4>
                    <p>información del movimiento</p>
                  </div>
                </div>
              )}
            </div>
          ))} */}

          {children}
        </div>
      )}
    </div>
  );
};

Accordion.propTypes = {
  // data: PropTypes.object.isRequired,
  label: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
