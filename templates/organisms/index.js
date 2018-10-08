import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const COMPONENT_NAME = ({ children }) => (
  <div>
    <p>{children}</p>
  </div>
);

const COMPONENT_NAME = styled.div``;

COMPONENT_NAME.propTypes = {
  children: PropTypes.node,
};

COMPONENT_NAME.defaultProps = {
  children: null,
};

export default COMPONENT_NAME;
