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

Display.propTypes = {
  displayValue: PropTypes.string.isRequired,
};
