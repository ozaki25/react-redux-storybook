import React from 'react';
import Container from 'src/components/utils/Container';
import Title from 'src/components/atoms/Title';
import TextInput from '../../atoms/TextInput/index';

const TodoList = () => (
  <Container>
    <Title>TODO</Title>
    <TextInput />
  </Container>
);

export default TodoList;
