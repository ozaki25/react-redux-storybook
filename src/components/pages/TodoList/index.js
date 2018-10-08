import React from 'react';
import Container from 'src/components/utils/Container';
import Title from 'src/components/atoms/Title';
import TextInput from 'src/components/atoms/TextInput';
import Button from 'src/components/atoms/Button';
import TodoTable from 'src/components/organisms/TodoTable';

const todoList = [
  { id: 1, content: 'todoリスト1つ目' },
  { id: 2, content: 'todoリスト2つ目' },
  { id: 3, content: 'todoリスト3つ目' },
];

const TodoList = () => (
  <Container>
    <Title>TODO</Title>
    <TextInput />
    <Button wide>追加</Button>
    <TodoTable todoList={todoList} />
  </Container>
);

export default TodoList;
