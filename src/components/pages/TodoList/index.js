import React from 'react';
import Container from 'src/components/utils/Container';
import Title from 'src/components/atoms/Title';
import TextInput from 'src/components/atoms/TextInput';
import Button from 'src/components/atoms/Button';

const TodoList = () => (
  <Container>
    <Title>TODO</Title>
    <TextInput />
    <Button wide>追加</Button>
  </Container>
);

export default TodoList;
