import { useState } from 'react';
import './Accordion.css';
import PropTypes from 'prop-types';

export interface AccordionProps {
  data: { [key: string]: any };
}


export const Accordion = ({ data }: AccordionProps) => {
  const [activeIndex, setActiveIndex] = useState<string | null>(null);
  const [isExpanded, setIsExpanded] = useState(false);


  const toggleCollapse = (key: string) => {
    setActiveIndex(key === activeIndex ? null : key);
  };
  console.log("data: ", data)

  const toggleAccordion = () => {
    setIsExpanded(!isExpanded);
  };

  return (
<div className="collapsable-container">

<div className="collapsable-header" onClick={toggleAccordion}>
        <h3>Movimientos</h3>
        <span className="toggle-icon">{isExpanded ? '-' : '+'}</span>
      </div>
      {isExpanded && (
        <div className="collapsable-content">
           
      {data.map((item: any, index: any) => (
        <div key={index} className="collapsable-item">
          <div
            className={`collapsable-header ${
              activeIndex === index ? 'active' : ''
            }`}
            onClick={() => toggleCollapse(index)}
          >
            <h3>{item.move.name}</h3>
            <span className="toggle-icon">
              {activeIndex === index ? '-' : '+'}
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
      ))}
        </div>
      )}


    </div>
  );
};

Accordion.propTypes = {
  data: PropTypes.object.isRequired,
};