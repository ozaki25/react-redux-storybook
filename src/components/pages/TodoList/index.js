import React from 'react';
import PropTypes from 'prop-types';
import Title from 'src/components/atoms/Title';
import TextInput from 'src/components/atoms/TextInput';
import Button from 'src/components/atoms/Button';
import TodoTable from 'src/containers/TodoTable';
import Container from 'src/components/utils/Container';
import Margin from 'src/components/utils/Margin';

class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.input = React.createRef();
  }

  add = () => {
    const id = Date.now().toString();
    const content = this.input.current.value;
    const { addTodo } = this.props;
    addTodo({ id, content });
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

TodoList.propTypes = {
  addTodo: PropTypes.func.isRequired,
};

export default TodoList;
