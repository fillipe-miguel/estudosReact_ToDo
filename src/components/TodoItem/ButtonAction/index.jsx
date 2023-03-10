import P from 'prop-types';
import './style.css';

export const ButtonAction = ({ handleEffect, children, customClass }) => {
  return (
    <button className={`button-action ${customClass}`} onClick={handleEffect}>
      {children}
    </button>
  );
};

//TODO resolver o undefined do classname

ButtonAction.propTypes = {
  handleEffect: P.func.isRequired,
  children: P.node.isRequired,
  customClass: P.string,
};
