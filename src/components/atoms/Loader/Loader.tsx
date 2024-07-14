import "./Loader.css";
// import PropTypes from "prop-types";

// Francisco, las props de un componente se supone que deben de hacer algo, no solo ser requeridas.

export const Loader = () => {
  return (
    <div className="loader" aria-label="loader">
      <span></span>

      <span></span>

      <span></span>

      <span></span>
    </div>
  );
};

// Loader.propTypes = {
// size: PropTypes.number.isRequired,
// color: PropTypes.string.isRequired,
// };
