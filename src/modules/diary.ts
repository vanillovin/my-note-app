const ADD_CATEGORY = `diary/ADD_CATEGORY` as const;
const DELETE_CATEGORY = `diary/DELETE_CATEGORY` as const;
const EDIT_CATEGORY = `diary/EDIT_CATEGORY` as const;
const ADD_ITEM = `diary/ADD_ITEM` as const;
const DELETE_ITEM = `diary/DELETE_ITEM` as const;
const EDIT_ITEM = `diary/EDIT_ITEM` as const;

export const addCategory = (title: string, color: string) => ({
  type: ADD_CATEGORY,
  payload: {
    id: Date.now(),
    title,
    color,
    createDate: new Date().toLocaleString(),
    items: [],
  },
});
export const deleteCategory = (id: number) => ({
  type: DELETE_CATEGORY,
  payload: { id },
});
export const editCategory = (id: number, title: string, color: string) => ({
  type: EDIT_CATEGORY,
  payload: { id, title, color },
});
export const addItem = (id: number, title: string, content: string) => ({
  type: ADD_ITEM,
  payload: {
    id,
    item: {
      id: Date.now(),
      title,
      content,
      createDate: new Date().toLocaleString(),
    },
  },
});
export const deleteItem = (catId: number, itemId: number) => ({
  type: DELETE_ITEM,
  payload: { catId, itemId },
});
export const editItem = (
  catId: number,
  itemId: number,
  title: string,
  content: string
) => ({
  type: EDIT_ITEM,
  payload: {
    catId,
    itemId,
    item: { title, content },
  },
});

// 모든 액션 객체들에 대한 타입
type TodosAction =
  | ReturnType<typeof addCategory>
  | ReturnType<typeof deleteCategory>
  | ReturnType<typeof editCategory>
  | ReturnType<typeof addItem>
  | ReturnType<typeof deleteItem>
  | ReturnType<typeof editItem>;

export type Diary = {};

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

const initialState: DiaryState = [
  {
    id: 1,
    title: '첫 번째 다요리',
    color: '#F38181',
    createDate: '2022. 5. 01. 오후 1:23:45',
    items: [
      {
        id: 11,
        title: 'first item',
        content: '안녕하세요구르트 :>',
        createDate: '2022. 5. 21. 오후 0:00:00',
      },
    ],
  },
];

export default function diary(
  state: DiaryState = initialState,
  action: TodosAction
): DiaryState {
  switch (action.type) {
    case ADD_CATEGORY:
      return [...state, action.payload];
    case DELETE_CATEGORY:
      return state.filter((cat) => cat.id !== action.payload.id);
    case EDIT_CATEGORY:
      return state.map((cat) =>
        cat.id === action.payload.id
          ? {
              ...cat,
              title: action.payload.title,
              color: action.payload.color,
            }
          : cat
      );
    case ADD_ITEM:
      return state.map((cat) =>
        cat.id === action.payload.id
          ? {
              ...cat,
              items: [action.payload.item, ...cat.items],
            }
          : cat
      );
    case DELETE_ITEM:
      return state.map((cat) =>
        cat.id === action.payload.catId
          ? {
              ...cat,
              items: cat.items.filter(
                (item) => item.id !== action.payload.itemId
              ),
            }
          : cat
      );
    case EDIT_ITEM:
      return state.map((cat) =>
        cat.id === action.payload.catId
          ? {
              ...cat,
              items: cat.items.map((item) =>
                item.id === action.payload.itemId
                  ? { ...item, ...action.payload.item }
                  : item
              ),
            }
          : cat
      );
    default:
      return state;
  }
}
