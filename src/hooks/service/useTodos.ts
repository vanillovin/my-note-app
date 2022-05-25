import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../modules';
import { addTodo, changeCategory, deleteTodo } from '../../modules/todos';

const useTodos = () => {
  const dispatch = useDispatch();

  const todos = useSelector((state: RootState) => state.todos);

  const onCreate = useCallback((text) => dispatch(addTodo(text)), [dispatch]);

  const onDelete = useCallback(
    (id, category) => dispatch(deleteTodo(id, category)),
    [dispatch]
  );

  const onChangeCategory = useCallback(
    (id, curCat, cat) => dispatch(changeCategory(id, curCat, cat)),
    [dispatch]
  );

  return {
    todos,
    onCreate,
    onDelete,
    onChangeCategory,
  };
};

export default useTodos;
