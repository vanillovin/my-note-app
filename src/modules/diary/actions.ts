export const ADD_CATEGORY = `diary/ADD_CATEGORY` as const;
export const DELETE_CATEGORY = `diary/DELETE_CATEGORY` as const;
export const EDIT_CATEGORY = `diary/EDIT_CATEGORY` as const;
export const ADD_ITEM = `diary/ADD_ITEM` as const;
export const DELETE_ITEM = `diary/DELETE_ITEM` as const;
export const EDIT_ITEM = `diary/EDIT_ITEM` as const;

export const addCategory = (title: string, color: string) => ({
  type: ADD_CATEGORY,
  payload: {
    id: Date.now(),
    title,
    color,
    createDate: new Date().getTime(),
    updateDate: new Date().getTime(),
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
      createDate: new Date().getTime(),
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
