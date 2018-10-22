// @flow
// Actions
export const ADD = 'TODO_LIST/ADD';
export const REMOVE = 'TODO_LIST/REMOVE';

type TodoType = {
  id: string,
  content: string,
};

type TodoListType = Array<TodoType>;

// ActionCreators
export function addTodo(todo: TodoType) {
  return { type: ADD, payload: { todo } };
}

export function removeTodo(id: string) {
  return { type: REMOVE, payload: { id } };
}

// Reducer
type TodoState = {
  todoList: TodoListType,
};

type TodoAction = typeof addTodo | typeof removeTodo;

const initialState: TodoState = {
  todoList: [
    // { id: '0001', content: 'todoリスト1つ目' },
    // { id: '0002', content: 'todoリスト2つ目' },
    // { id: '0003', content: 'todoリスト3つ目' },
  ],
};

function remove(todoList: TodoListType, targetId: string): TodoListType {
  return todoList.filter(todo => todo.id !== targetId);
}

export default function reducer(state: TodoState = initialState, action: TodoAction) {
  const { type, payload } = action;
  switch (type) {
    case ADD:
      return {
        ...state,
        todoList: [...state.todoList, payload.todo],
      };
    case REMOVE:
      return { ...state, todoList: remove(state.todoList, payload.id) };
    default:
      return state;
  }
}
