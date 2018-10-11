/* @flow */
import React from 'react';
import Button from 'src/components/atoms/Button';
import Table from 'src/components/molecules/Table';

type Props = {
  todoList?: Array<{ id: string, content: string }>,
  removeTodo: string => void,
};

const TodoTable = ({ todoList, removeTodo }: Props) => (
  <Table
    body={todoList.map(todo => [
      todo.content,
      <Button onClick={() => (window.confirm('削除しますか？') ? removeTodo(todo.id) : null)}>
        削除
      </Button>,
    ])}
  />
);

TodoTable.defaultProps = {
  todoList: [],
};

export default TodoTable;
