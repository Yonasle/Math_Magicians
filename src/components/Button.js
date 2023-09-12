import React from 'react';
import PropTypes from 'prop-types'; // Import prop-types

function Button({ type, label }) {
  return (
    <button type="button" className={type}>
      {label}
    </button>
  );
}

// Define prop types for Button component
Button.propTypes = {
  type: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};

export default Button;
