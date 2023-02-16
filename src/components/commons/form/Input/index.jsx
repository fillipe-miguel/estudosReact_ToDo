import P from 'prop-types';
import React from 'react';

// Style
import './style.css';

const Input = ({ handleChange, value, placeholder }) => {
  return (
    <input
      required
      placeholder={placeholder}
      className="form-input"
      onChange={handleChange}
      type="text"
      value={value}
    ></input>
  );
};

Input.defaultProps = {
  placeholder: 'Digite aqui',
};

Input.propTypes = {
  handleChange: P.func.isRequired,
  value: P.string.isRequired,
  placeholder: P.string,
};

export default Input;
