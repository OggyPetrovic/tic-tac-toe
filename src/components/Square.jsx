import React from 'react';
import PropTypes from 'prop-types';

export default function Square(props) {
  const { value, onClick } = props;
  return (
    <button type="button" className="square" onClick={() => { onClick(); }}>
      {value}
    </button>
  );
}

Square.propTypes = {
  value: PropTypes.string,
  onClick: PropTypes.func.isRequired,
};

Square.defaultProps = {
  value: null,
};
