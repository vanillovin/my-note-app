import React from 'react';
import { Categories, Todo as TodoType } from '../../App';
import Todo from './Todo';
import TodoForm from './TodoForm';

interface TodoListProps {
  todoList: TodoType[];
  onChangeCategory: (id: number, category: Categories) => void;
  onAddTodo: (text: string) => void;
  onDeleteTodo: (id: number) => void;
}

const TodoList = ({
  todoList,
  onChangeCategory,
  onAddTodo,
  onDeleteTodo,
}: TodoListProps) => {
  const todosByCategory = [
    todoList.filter((todo) => todo.category === 'TODO'),
    todoList.filter((todo) => todo.category === 'DOING'),
    todoList.filter((todo) => todo.category === 'DONE'),
  ];

  return (
    <div className="w-full mt-6">
      <TodoForm onAddTodo={onAddTodo} />
      <div className="flex flex-col tablet:flex-row">
        {[
          ['TODO', todosByCategory[0]],
          ['DOING', todosByCategory[1]],
          ['DONE', todosByCategory[2]],
        ].map(([title, todos], i) => (
          <div
            key={i}
            className="tablet:w-1/3 bg-white border border-white m-2 p-3 rounded-sm"
          >
            <h2 className="font-bold mb-2 pb-2 border-b border-gray-200">
              {title}
            </h2>
            <ul>
              {typeof todos !== 'string' &&
                todos.map(({ id, text, category }) => (
                  <Todo
                    key={id}
                    id={id}
                    text={text}
                    category={category}
                    onChangeCategory={onChangeCategory}
                    onDeleteTodo={onDeleteTodo}
                  />
                ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TodoList;
