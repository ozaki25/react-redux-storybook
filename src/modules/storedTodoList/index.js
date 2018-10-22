// @flow

const api = 'http://localhost:3003/todos';

// Actions
export const REMOVE = 'STORED_TODO_LIST/REMOVE';
export const POST_REQUEST = 'STORED_TODO_LIST/POST_REQUEST';
export const POST_DONE = 'STORED_TODO_LIST/POST_DONE';
export const POST_ERROR = 'STORED_TODO_LIST/POST_ERROR';

type TodoType = {
  id: string,
  content: string,
};

type TodoListType = Array<TodoType>;

// ActionCreators
export function postRequest() {
  return { type: POST_REQUEST };
}

export function postDone(todo: TodoType) {
  return { type: POST_DONE, payload: { todo } };
}

export function postError(error: string) {
  return { type: POST_ERROR, payload: { error } };
}

export function removeTodo(id: string) {
  return { type: REMOVE, payload: { id } };
}

export function addTodo() {
  return async (dispatch: any) => {
    dispatch(postRequest());
    try {
      const res = await fetch(api, {
        method: 'post',
        headers: { 'content-type': 'application/json' },
      });
      const body = await res.json();
      dispatch(postDone(body));
    } catch (e) {
      dispatch(postError(e.message));
    }
  };
}

// Reducer
type TodoState = {
  todoList: TodoListType,
  loading: boolean,
};

type TodoAction =
  | typeof postRequest
  | typeof postDone
  | typeof postError
  | typeof addTodo
  | typeof removeTodo;

const initialState: TodoState = {
  todoList: [
    // { id: '0001', content: 'todoリスト1つ目' },
    // { id: '0002', content: 'todoリスト2つ目' },
    // { id: '0003', content: 'todoリスト3つ目' },
  ],
  loading: false,
  error: null,
};

function remove(todoList: TodoListType, targetId: string): TodoListType {
  return todoList.filter(todo => todo.id !== targetId);
}

export default function reducer(state: TodoState = initialState, action: TodoAction) {
  const { type, payload } = action;
  switch (type) {
    case REMOVE:
      return { ...state, todoList: remove(state.todoList, payload.id) };
    case POST_REQUEST:
      return { ...state, loading: true };
    case POST_DONE:
      return { ...state, loading: false, todoList: [...state.todoList, payload.todo] };
    case POST_ERROR:
      return { ...state, loading: false, error: payload.error };
    default:
      return state;
  }
}
