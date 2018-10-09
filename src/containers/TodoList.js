import { connect } from 'react-redux';
import { addTodo, removeTodo } from 'src/modules/todoList';
import TodoList from 'src/components/pages/TodoList';

const mapStateToProps = state => state.todoList;

const mapDispatchToProps = dispatch => ({
  addTodo: todo => dispatch(addTodo(todo)),
  removeTodo: id => dispatch(removeTodo(id)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(TodoList);
