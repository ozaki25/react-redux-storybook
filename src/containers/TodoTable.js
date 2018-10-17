import { connect } from 'react-redux';
import { removeTodo } from 'src/modules/todoList';
import TodoTable from 'src/components/organisms/TodoTable';

const mapStateToProps = state => state.todoList;

const mapDispatchToProps = dispatch => ({
  removeTodo: id => dispatch(removeTodo(id)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(TodoTable);
