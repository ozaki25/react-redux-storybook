import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledTable = styled.table`
  border: 1px solid #bbb;
  border-radius: 0.1rem;
  width: 100%;
`;

const Table = ({ header, body }) => (
  <StyledTable>
    <thead>
      {header.map((th, key) => (
        <th key={key}>{th}</th>
      ))}
    </thead>
    <tbody>
      {body.map((tr, key) => (
        <tr key={key}>
          {tr.map((td, i) => (
            <td key={i}>{td}</td>
          ))}
        </tr>
      ))}
    </tbody>
  </StyledTable>
);

Table.propTypes = {
  header: PropTypes.arrayOf(PropTypes.string).isRequired,
  body: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.string)).isRequired,
};

export default Table;
