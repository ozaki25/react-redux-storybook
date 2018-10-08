import React from 'react';
import PropTypes from 'prop-types';
import Button from 'src/components/atoms/Button';
import Table from 'src/components/molecules/Table';

const TodoTable = ({ todoList }) => (
  <Table
    body={todoList.map(todo => [
      todo.content,
      <Button onClick={() => alert(todo.id)}>削除</Button>,
    ])}
  />
);

TodoTable.propTypes = {
  todoList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      content: PropTypes.string,
    }),
  ),
};

TodoTable.defaultProps = {
  todoList: [],
};

export default TodoTable;
