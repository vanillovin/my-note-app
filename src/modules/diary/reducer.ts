import {
  ADD_CATEGORY,
  DELETE_CATEGORY,
  EDIT_CATEGORY,
  ADD_ITEM,
  DELETE_ITEM,
  EDIT_ITEM,
} from './actions';
import { DiaryState, TodosAction } from './types';

const initialState: DiaryState = [
  {
    id: 1,
    title: '첫 번째 다요리',
    color: '#F38181',
    createDate: 1684391453697,
    updateDate: 1684391453697,
    items: [
      {
        id: 11,
        title: '첫 번째 아이템',
        content: '안녕하세요구르트 :>',
        createDate: 1684391466600,
        emoji: '😁',
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
              updateDate: new Date().getTime(),
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
