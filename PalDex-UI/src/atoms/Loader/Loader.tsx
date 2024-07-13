import './Loader.css'
import PropTypes from 'prop-types';



export const Loader = () => {

  return (
            
    <div className="loader">
        <span></span>

            <span></span>

            <span></span>

            <span></span>
    </div>
       
  );
};

Loader.propTypes = {
    size: PropTypes.number.isRequired,
    color: PropTypes.string.isRequired,

  };




