import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Button from 'src/components/atoms/Button';

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

const Table = ({ header, body }) => (
  <StyledTable>
    <thead>
      <tr>
        {header.map((th, key) => (
          <StyledTh key={key}>{th}</StyledTh>
        ))}
        <StyledTh />
        <StyledTh />
      </tr>
    </thead>
    <tbody>
      {body.map((tr, key) => (
        <tr key={key}>
          {tr.map((td, i) => (
            <StyledTd key={i}>{td}</StyledTd>
          ))}
          <StyledTd>
            <Button>編集</Button>
          </StyledTd>
          <StyledTd>
            <Button>削除</Button>
          </StyledTd>
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
