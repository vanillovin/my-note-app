import React from 'react';
import { Categories } from '../../App';

interface TodoProps {
  id: number;
  text: string;
  category: 'TODO' | 'DOING' | 'DONE';
  onChangeCategory: (id: number, category: Categories) => void;
  onDeleteTodo: (id: number) => void;
}

const Todo = ({
  id,
  text,
  category,
  onChangeCategory,
  onDeleteTodo,
}: TodoProps) => {
  return (
    <li className="flex items-center my-1 flex-wrap group">
      <p>▪{text}</p>
      <div className="tablet:hidden group-hover:block">
        {(category === 'DOING' || category === 'DONE') && (
          <button
            className={`button-style bg-rose-100`}
            onClick={() => onChangeCategory(id, 'TODO')}
          >
            Todo
          </button>
        )}
        {(category === 'TODO' || category === 'DONE') && (
          <button
            className={`button-style bg-amber-100`}
            onClick={() => onChangeCategory(id, 'DOING')}
          >
            Doing
          </button>
        )}
        {(category === 'TODO' || category === 'DOING') && (
          <button
            className="button-style bg-blue-300"
            onClick={() => onChangeCategory(id, 'DONE')}
          >
            Done
          </button>
        )}
        <button
          onClick={() => onDeleteTodo(id)}
          className="button-style group-hover:visible bg-gray-400"
        >
          x
        </button>
      </div>
    </li>
  );
};

export default Todo;
