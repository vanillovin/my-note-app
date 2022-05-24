import { addTodo, changeCategory, deleteTodo } from './actions';

export type Categories = 'todo' | 'doing' | 'done';

export type Todo = {
  id: number;
  text: string;
};

export type TodosState = { todo: Todo[]; doing: Todo[]; done: Todo[] };

export type TodosAction =
  | ReturnType<typeof addTodo>
  | ReturnType<typeof deleteTodo>
  | ReturnType<typeof changeCategory>;
