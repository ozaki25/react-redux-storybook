/* @flow */
import React from 'react';
import Title from 'src/components/atoms/Title';
import TextInput from 'src/components/atoms/TextInput';
import Button from 'src/components/atoms/Button';
import TodoTable from 'src/containers/TodoTable';
import Container from 'src/components/utils/Container';
import Margin from 'src/components/utils/Margin';

type Todo = {
  id: string,
  content: string,
};

type Props = {
  addTodo: Todo => void,
};

class TodoList extends React.Component<Props> {
  constructor(props: Props) {
    super(props);
    this.input = React.createRef();
  }

  add = () => {
    const id = Date.now().toString();
    const content = this.input.current.value;
    const { addTodo } = this.props;
    addTodo(({ id, content }: Todo));
    this.input.current.value = '';
  };

  render() {
    return (
      <Container>
        <Title>TodoList</Title>
        <TextInput ref={this.input} />
        <Button onClick={this.add} wide>
          追加
        </Button>
        <Margin bottom="20" />
        <TodoTable />
      </Container>
    );
  }
}

export default TodoList;
