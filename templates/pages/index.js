
import React from 'react';

const COMPONENT_NAME = ({ children }) => (
  <div>
    <p>{children}</p>
  </div>
);

COMPONENT_NAME.defaultProps = {
  children: null,
};

export default COMPONENT_NAME;
