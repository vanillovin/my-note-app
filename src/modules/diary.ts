const ADD_CATEGORY = `diary/ADD_CATEGORY` as const;
const DELETE_CATEGORY = `diary/DELETE_CATEGORY` as const;
const EDIT_CATEGORY = `diary/EDIT_CATEGORY` as const;

export const addCategory = (title: string, color: string) => ({
  type: ADD_CATEGORY,
  payload: {
    id: Date.now(),
    title,
    color,
    createDate: new Date().toISOString(),
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

// 모든 액션 객체들에 대한 타입
type TodosAction =
  | ReturnType<typeof addCategory>
  | ReturnType<typeof deleteCategory>
  | ReturnType<typeof editCategory>;

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
    title: '첫 번째 일기장',
    color: '#F38181',
    createDate: '2022-05-20T05:08:42.052Z',
    items: [
      {
        id: 'category-1-item1',
        title: 'first diary',
        content: 'im first',
        createDate: '',
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
    default:
      return state;
  }
}
