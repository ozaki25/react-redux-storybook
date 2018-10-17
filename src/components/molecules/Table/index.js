import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledTable = styled.table`
  border-collapse: collapse;
  width: 100%;
`;

const StyledTh = styled.th`
  border-bottom: 1px solid #bbb;
  border-top: 1px solid #bbb;
  padding: 0.75rem;
  text-align: left;
  vertical-align: top;
`;

const StyledTd = styled.td`
  border-bottom: 1px solid #bbb;
  border-top: 1px solid #bbb;
  padding: 0.75rem;
  text-align: left;
  vertical-align: top;
`;

const TableRow = ({ tds }) => (
  <tr>
    {tds.map((td, key) => (
      <StyledTd key={key}>{td}</StyledTd>
    ))}
  </tr>
);

TableRow.propTypes = {
  tds: PropTypes.arrayOf(PropTypes.node).isRequired,
};

const Table = ({ header, body }) => (
  <StyledTable>
    <thead>
      <tr>
        {header.map((th, key) => (
          <StyledTh key={key}>{th}</StyledTh>
        ))}
      </tr>
    </thead>
    <tbody>
      {body.map((tr, key) => (
        <TableRow key={key} tds={tr} />
      ))}
    </tbody>
  </StyledTable>
);

Table.propTypes = {
  header: PropTypes.arrayOf(PropTypes.node),
  body: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.node)),
};

Table.defaultProps = {
  header: [],
  body: [],
};

export default Table;
