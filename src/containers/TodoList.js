/* @flow */
import { connect } from 'react-redux';
import { addTodo } from 'src/modules/todoList';
import TodoList from 'src/components/pages/TodoList';

const mapStateToProps = () => ({});

const mapDispatchToProps = dispatch => ({
  addTodo: todo => dispatch(addTodo(todo)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(TodoList);
