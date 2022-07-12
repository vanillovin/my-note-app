import React from 'react';
import useTodos from '../../hooks/service/useTodos';
import { Categories } from '../../modules/todos';
import Todo from './Todo';
import TodoForm from './TodoForm';

const TodoList = () => {
  const { todos } = useTodos();

  const categories: Categories[] = ['todo', 'doing', 'done'];

  return (
    <div className="w-full mt-2 tablet:mt-4">
      <TodoForm />
      <div className="flex flex-col tablet:flex-row">
        {categories.map((v) => (
          <div
            key={v}
            className="tablet:w-1/3 bg-white border border-white m-2 p-3 rounded-sm shadow-lg dark:bg-black"
          >
            <h2 className="text-sm tablet:text-base font-bold mb-2 pb-2 border-b border-gray-200 dark:text-white">
              {v.toUpperCase()}
            </h2>
            <ul>
              {todos[v].map(({ id, text }: { id: number; text: string }) => (
                <Todo key={id} id={id} text={text} category={v} />
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TodoList;
