import {
  addCategory,
  deleteCategory,
  editCategory,
  addItem,
  deleteItem,
  editItem,
} from './actions';

export type Items = {
  id: number | string;
  title: string;
  content: string;
  createDate: string;
};

export type Categories = {
  id: number;
  title: string;
  color: string;
  createDate: string;
  items: Items[];
};

export type DiaryState = Categories[];

// 모든 액션 객체들에 대한 타입
export type TodosAction =
  | ReturnType<typeof addCategory>
  | ReturnType<typeof deleteCategory>
  | ReturnType<typeof editCategory>
  | ReturnType<typeof addItem>
  | ReturnType<typeof deleteItem>
  | ReturnType<typeof editItem>;
