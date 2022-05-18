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
      <p className="mr-1">{text}</p>
      {category === 'TODO' && (
        <div className="tablet:invisible group-hover:visible">
          <button
            className="button-style bg-amber-100"
            onClick={() => onChangeCategory(id, 'DOING')}
          >
            Doing
          </button>
          <button
            className="button-style bg-blue-300"
            onClick={() => onChangeCategory(id, 'DONE')}
          >
            Done
          </button>
          <button
            onClick={() => onDeleteTodo(id)}
            className="button-style tablet:invisible group-hover:visible bg-gray-400"
          >
            x
          </button>
        </div>
      )}
      {category === 'DOING' && (
        <div className="tablet:invisible group-hover:visible">
          <button
            className="button-style bg-rose-100"
            onClick={() => onChangeCategory(id, 'TODO')}
          >
            Todo
          </button>
          <button
            className="button-style bg-blue-300"
            onClick={() => onChangeCategory(id, 'DONE')}
          >
            Done
          </button>
          <button
            onClick={() => onDeleteTodo(id)}
            className="button-style tablet:invisible group-hover:visible bg-gray-400"
          >
            x
          </button>
        </div>
      )}
      {category === 'DONE' && (
        <div className="tablet:invisible group-hover:visible">
          <button
            className="button-style bg-rose-100"
            onClick={() => onChangeCategory(id, 'TODO')}
          >
            Todo
          </button>
          <button
            className="button-style bg-amber-100"
            onClick={() => onChangeCategory(id, 'DOING')}
          >
            Doing
          </button>
          <button
            onClick={() => onDeleteTodo(id)}
            className="button-style tablet:invisible group-hover:visible bg-gray-400"
          >
            x
          </button>
        </div>
      )}
    </li>
  );
};

export default Todo;
