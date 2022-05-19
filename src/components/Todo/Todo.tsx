import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { Categories, deleteTodo } from '../../modules/todos';

interface TodoProps {
  id: number;
  text: string;
  category: Categories;
}

const Todo = ({ id, text, category }: TodoProps) => {
  const dispatch = useDispatch();
  const onDelete = useCallback(
    (id, category) => dispatch(deleteTodo(id, category)),
    [dispatch]
  );

  return (
    <li className="flex items-center my-1 flex-wrap group">
      <p>▪{text}</p>
      <div className="tablet:hidden group-hover:block">
        {/* {(category === 'DOING' || category === 'DONE') && (
          <button
            className={`todo-button bg-rose-100`}
            onClick={() => onChangeCategory(id, 'TODO')}
          >
            Todo
          </button>
        )}
        {(category === 'TODO' || category === 'DONE') && (
          <button
            className={`todo-button bg-amber-100`}
            onClick={() => onChangeCategory(id, 'DOING')}
          >
            Doing
          </button>
        )}
        {(category === 'TODO' || category === 'DOING') && (
          <button
            className="todo-button bg-blue-300"
            onClick={() => onChangeCategory(id, 'DONE')}
          >
            Done
          </button>
        )} */}
        <button
          onClick={() => onDelete(id, category)}
          className="todo-button group-hover:visible bg-gray-400"
        >
          x
        </button>
      </div>
    </li>
  );
};

export default Todo;
