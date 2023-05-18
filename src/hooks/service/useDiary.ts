import { editCategory, addItem } from './../../modules/diary/actions';
import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../modules';
import {
  addCategory,
  deleteCategory,
  deleteItem,
  editItem,
} from '../../modules/diary';

const useDiary = () => {
  const categories = useSelector((state: RootState) => state.diary);

  const dispatch = useDispatch();

  const onAddCategory = useCallback(
    (title, color) => dispatch(addCategory(title, color)),
    [dispatch]
  );

  const onAddItem = useCallback(
    (id: number, title: string, content: string, emoji: string) =>
      dispatch(addItem(id, title, content, emoji)),
    [dispatch]
  );

  const onDeleteItem = useCallback(
    (catId: number, itemId: number) => dispatch(deleteItem(catId, itemId)),
    [dispatch]
  );

  const onEditItem = useCallback(
    (
      catId: number,
      itemId: number,
      title: string,
      content: string,
      emoji: string
    ) => dispatch(editItem(catId, itemId, title, content, emoji)),
    [dispatch]
  );

  const onDeleteCategory = useCallback(
    (id) => dispatch(deleteCategory(id)),
    [dispatch]
  );

  const onEditCategory = useCallback(
    (id: number, title: string, color: string) =>
      dispatch(editCategory(id, title, color)),
    [dispatch]
  );

  return {
    categories,
    onAddCategory,
    onDeleteItem,
    onAddItem,
    onEditItem,
    onDeleteCategory,
    onEditCategory,
  };
};

export default useDiary;
