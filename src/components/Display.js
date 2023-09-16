// Display.js

import React from 'react';
import PropTypes from 'prop-types'; // Import PropTypes

export default function Display({ displayValue }) {
  return (
    <input
      type="text"
      value={displayValue}
      readOnly
      className="calculator-display"
    />
  );
}

// Add prop type validation
Display.propTypes = {
  displayValue: PropTypes.string.isRequired, // Make sure displayValue is a string and is required
};
