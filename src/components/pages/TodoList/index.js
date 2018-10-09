import React from 'react';
import PropTypes from 'prop-types';
import Container from 'src/components/utils/Container';
import Title from 'src/components/atoms/Title';
import TextInput from 'src/components/atoms/TextInput';
import Button from 'src/components/atoms/Button';
import TodoTable from 'src/components/organisms/TodoTable';

const TodoList = ({ todoList, addTodo, removeTodo }) => (
  <Container>
    <Title>TODO</Title>
    <TextInput />
    <Button onClick={() => addTodo({ id: String(Date.now()), content: 'aaa' })} wide>
      追加
    </Button>
    <TodoTable todoList={todoList} />
  </Container>
);

TodoList.propTypes = {
  todoList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      content: PropTypes.string,
    }),
  ).isRequired,
  addTodo: PropTypes.func.isRequired,
  removeTodo: PropTypes.func.isRequired,
};

export default TodoList;
