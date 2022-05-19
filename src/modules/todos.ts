export type Categories = 'todo' | 'doing' | 'done';

// const actionPrefix = 'TODOS';
const ADD_TODO = `todos/ADD_TODO` as const;
const DELETE_TODO = 'todos/DELETE_TODO' as const;
const CHANGE_CATEGORY = 'todos/CHANGE_CATEGORY' as const;

export const addTodo = (text: string) => ({
  type: ADD_TODO,
  payload: {
    id: Date.now(),
    text,
  },
});
export const deleteTodo = (id: number, category: Categories) => ({
  type: DELETE_TODO,
  payload: { id, category },
});
export const changeCategory = (id: number, category: Categories) => ({
  type: CHANGE_CATEGORY,
  payload: { id, category },
});

// 모든 액션 객체들에 대한 타입
type TodosAction =
  | ReturnType<typeof addTodo>
  | ReturnType<typeof deleteTodo>
  | ReturnType<typeof changeCategory>;

export type Todo = {
  id: number;
  text: string;
};

export type TodosState = { todo: Todo[]; doing: Todo[]; done: Todo[] };

const initialState: TodosState = {
  todo: [
    { id: 1, text: "Hello I'm TODO1" },
    { id: 2, text: "Hello I'm TODO2" },
  ],
  doing: [
    { id: 1, text: "Hello I'm DOING1" },
    { id: 2, text: "Hello I'm DOING2" },
  ],
  done: [
    { id: 1, text: "Hello I'm DONE1" },
    { id: 2, text: "Hello I'm DONE2" },
  ],
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
        // ex) todo-id:1 -> done = 투두에서 지우고 던에 추가
        [action.payload.category]: state[action.payload.category].filter(
          (todo) => todo.id !== action.payload.id
        ),
      };
    default:
      return state;
  }
}
