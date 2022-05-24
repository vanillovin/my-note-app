import { ADD_TODO, DELETE_TODO, CHANGE_CATEGORY } from './actions';
import { TodosAction, TodosState } from './types';

const initialState: TodosState = {
  todo: [{ id: 1, text: "Hello I'm TODO" }],
  doing: [{ id: 2, text: "Hello I'm DOING" }],
  done: [{ id: 3, text: "Hello I'm DONE" }],
};

export default function todos(
  state: TodosState = initialState,
  action: TodosAction
): TodosState {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todo: [...state.todo, action.payload],
      };
    case DELETE_TODO:
      return {
        ...state,
        [action.payload.category]: state[action.payload.category].filter(
          (todo) => todo.id !== action.payload.id
        ),
      };
    case CHANGE_CATEGORY:
      return {
        ...state,
        [action.payload.curCat]: state[action.payload.curCat].filter(
          (todo) => todo.id !== action.payload.id
        ),
        [action.payload.cat]: [
          ...state[action.payload.cat],
          {
            ...state[action.payload.curCat].find(
              (todo) => todo.id === action.payload.id
            ),
          },
        ],
      };

    default:
      return state;
  }
}
