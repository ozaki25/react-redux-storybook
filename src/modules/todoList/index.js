// Actions
export const ADD = 'TODO_LIST/ADD';
export const REMOVE = 'TODO_LIST/REMOVE';

// Reducer
const initialState = {
  todoList: [
    { id: '0001', content: 'todoリスト1つ目' },
    { id: '0002', content: 'todoリスト2つ目' },
    { id: '0003', content: 'todoリスト3つ目' },
  ],
};

export default function reducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case ADD:
      return {
        ...state,
        todoList: [...state.todoList, payload.todo],
      };
    case REMOVE:
      return { ...state, todoList: state.todoList.filter(todo => todo.id !== payload.id) };
    default:
      return state;
  }
}

// ActionCreators
export function addTodo(todo) {
  return { type: ADD, payload: { todo } };
}

export function removeTodo(id) {
  return { type: REMOVE, payload: { id } };
}
