import P from 'prop-types';
import React from 'react';

// Style
import './style.css';

const Input = ({ handleChange, value, placeholder, label }) => {
  return (
    <div>
      <p className={value ? 'input-label' : 'input-label input-label-hidden'}>
        {label}
      </p>

      <input
        required
        placeholder={placeholder}
        className="form-input"
        onChange={handleChange}
        type="text"
        value={value}
      ></input>
    </div>
  );
};

Input.defaultProps = {
  placeholder: 'Digite aqui',
};

Input.propTypes = {
  handleChange: P.func.isRequired,
  value: P.string.isRequired,
  label: P.string.isRequired,
  placeholder: P.string,
};

export default Input;
