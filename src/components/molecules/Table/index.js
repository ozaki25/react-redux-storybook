/* @flow */
import React from 'react';
import styled from 'styled-components';

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

const TableRow = ({ tds }: { tds: Array<React.Node> }) => (
  <tr>
    {tds.map((td, key) => (
      <StyledTd key={key}>{td}</StyledTd>
    ))}
  </tr>
);

type Props = {
  header?: Array<any>,
  body?: Array<Array<any>>,
};

const Table = ({ header, body }: Props) => (
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

Table.defaultProps = {
  header: [],
  body: [],
};

export default Table;
