import React from 'react';
import PropTypes from 'prop-types';

const COMPONENT_NAME = ({ children }) => (
  <div>
    <p>{children}</p>
  </div>
);

COMPONENT_NAME.propTypes = {
  children: PropTypes.node,
};

COMPONENT_NAME.defaultProps = {
  children: null,
};

export default COMPONENT_NAME;
