import reducer, {
  addTodo, removeTodo, POST_REQUEST, POST_DONE, POST_ERROR, REMOVE,
} from '.';

describe('TodoList', () => {
  describe('action', () => {
    it.skip('should create an action to add todo', () => {
      const todo = {
        id: '0001',
        content: 'todo1',
      };
      const expectedAction = {
        type: ADD,
        payload: { todo },
      };
      expect(addTodo(todo)).toEqual(expectedAction);
    });

    it('should create an action to remove todo', () => {
      const id = '0001';
      const expectedAction = {
        type: REMOVE,
        payload: { id },
      };
      expect(removeTodo(id)).toEqual(expectedAction);
    });
  });

  describe('reducer', () => {
    describe('想定しないaction typeの場合', () => {
      it('stateがそのまま返ること', () => {
        const todoList = [{ id: '0001', content: 'todo1' }];
        const state = { todoList };
        const action = {};
        const expected = { todoList };
        expect(reducer(state, action)).toEqual(expected);
      });
    });

    describe('action typeがPOST_REQUESTの場合', () => {
      it('loadingがtrueで返ること', () => {
        const state = undefined;
        const action = { type: POST_REQUEST };
        const expected = { todoList: [], loading: true, error: null };
        expect(reducer(state, action)).toEqual(expected);
      });
    });

    describe('action typeがPOST_DONEの場合', () => {
      it('loadingがtrueで返ること', () => {
        const state = undefined;
        const todo = { id: '0001', content: 'todo1' };
        const action = { type: POST_DONE, payload: { todo } };
        const expected = { todoList: [todo], loading: false, error: null };
        expect(reducer(state, action)).toEqual(expected);
      });
    });

    describe('action typeがPOST_ERRORの場合', () => {
      it('loadingがtrueで返ること', () => {
        const state = undefined;
        const error = new Error('error').message;
        const action = { type: POST_ERROR, payload: { error } };
        const expected = { todoList: [], loading: false, error };
        expect(reducer(state, action)).toEqual(expected);
      });
    });

    describe('action typeがPOST_REQUESTの場合', () => {
      it('loadingがtrueで返ること', () => {
        const state = undefined;
        const action = { type: POST_REQUEST };
        const expected = { todoList: [], loading: true, error: null };
        expect(reducer(state, action)).toEqual(expected);
      });
    });
    describe('action typeがREMOVEの場合', () => {
      describe('stateがinitialStateの場合', () => {
        it('initialStateがそのまま返ること', () => {
          const state = undefined;
          const action = { type: REMOVE, payload: { id: '0001' } };
          const expected = { todoList: [], loading: false, error: null };
          expect(reducer(state, action)).toEqual(expected);
        });
      });

      describe('stateに値が入っている場合', () => {
        it('actionで指定したidの値が削除されていること', () => {
          const todoList = [
            { id: '0001', content: 'todo1' },
            { id: '0002', content: 'todo2' },
            { id: '0003', content: 'todo3' },
          ];
          const state = { todoList };
          const action = { type: REMOVE, payload: { id: '0002' } };
          const expected = {
            todoList: [{ id: '0001', content: 'todo1' }, { id: '0003', content: 'todo3' }],
          };
          expect(reducer(state, action)).toEqual(expected);
        });
      });
    });
  });
});
