import { Categories } from './types';

export const ADD_TODO = `todos/ADD_TODO` as const;
export const DELETE_TODO = 'todos/DELETE_TODO' as const;
export const CHANGE_CATEGORY = 'todos/CHANGE_CATEGORY' as const;

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

export const changeCategory = (
  id: number,
  curCat: Categories,
  cat: Categories
) => ({
  type: CHANGE_CATEGORY,
  payload: { id, curCat, cat },
});
