import React from 'react';
import PropTypes from 'prop-types';

export default function Button({ value, onClick }) {
  return (
    <input type="button" value={value} onClick={() => onClick(value)} />
  );
}

Button.propTypes = {
  value: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};
