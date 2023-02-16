import P from 'prop-types';
import './style.css';

export const ButtonForm = ({ handleEffect, text }) => {
  return (
    <button className="form-button" onClick={handleEffect}>
      {text}
    </button>
  );
};

ButtonForm.propTypes = {
  handleEffect: P.func.isRequired,
  text: P.string.isRequired,
};
