import P from 'prop-types';
import React from 'react';

// style
import './style.css';

const Container = ({ children }) => {
  return <div className="container">{children}</div>;
};

Container.propTypes = {
  children: P.node.isRequired,
};

export default Container;
