import useTodos from '../../hooks/service/useTodos';
import { Categories } from '../../modules/todos';

interface TodoProps {
  id: number;
  text: string;
  category: Categories;
}

const Todo = ({ id, text, category }: TodoProps) => {
  const { onDelete, onChangeCategory } = useTodos();

  return (
    <li className="flex items-center my-1 flex-wrap group">
      <p className="ml-1 text-sm tablet:text-base text-stone-600 dark:text-stone-300">
        - {text}
      </p>
      <div className="tablet:hidden group-hover:block">
        {(category === 'doing' || category === 'done') && (
          <button
            className={`todo-button bg-rose-100`}
            onClick={() => onChangeCategory(id, category, 'todo')}
          >
            Todo
          </button>
        )}
        {(category === 'todo' || category === 'done') && (
          <button
            className={`todo-button bg-amber-100`}
            onClick={() => onChangeCategory(id, category, 'doing')}
          >
            Doing
          </button>
        )}
        {(category === 'todo' || category === 'doing') && (
          <button
            className="todo-button bg-blue-300"
            onClick={() => onChangeCategory(id, category, 'done')}
          >
            Done
          </button>
        )}
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
