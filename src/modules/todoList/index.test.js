import reducer, {
  addTodo, removeTodo, ADD, REMOVE,
} from '.';

describe('TodoList', () => {
  describe('action', () => {
    it('should create an action to add todo', () => {
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

    describe('action typeがADDの場合', () => {
      describe('stateがinitialStateの場合', () => {
        it('1件追加されていること', () => {
          const state = undefined;
          const todo = { id: '0001', content: 'todo1' };
          const action = { type: ADD, payload: { todo } };
          const expected = { todoList: [todo] };
          expect(reducer(state, action)).toEqual(expected);
        });
      });

      describe('stateに値が入っている場合', () => {
        it('1件追加されていること', () => {
          const todoList = [{ id: '0001', content: 'todo1' }, { id: '0002', content: 'todo2' }];
          const todo = { id: '0003', content: 'todo3' };
          const state = { todoList };
          const action = { type: ADD, payload: { todo } };
          const expected = { todoList: [...todoList, todo] };
          expect(reducer(state, action)).toEqual(expected);
        });
      });
    });

    describe('action typeがREMOVEの場合', () => {
      describe('stateがinitialStateの場合', () => {
        it('initialStateがそのまま返ること', () => {
          const state = undefined;
          const action = { type: REMOVE, payload: { id: '0001' } };
          const expected = { todoList: [] };
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
