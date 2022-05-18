import React, { useEffect, useState } from 'react';
import TodoList from './components/Todo/TodoList';

export type Categories = 'TODO' | 'DOING' | 'DONE';

export type Todo = {
  id: number;
  text: string;
  category: Categories;
};

function App() {
  const [todoList, setTodoList] = useState<Todo[]>([
    { id: 1, text: "Hello I'm TODO", category: 'TODO' },
    { id: 2, text: "Hello I'm DOING", category: 'DOING' },
    { id: 3, text: "Hello I'm DONE", category: 'DONE' },
  ]);

  useEffect(() => {
    const localTodoList = localStorage.getItem('todoList');
    if (localTodoList) {
      setTodoList(JSON.parse(localTodoList));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('todoList', JSON.stringify(todoList));
  }, [todoList]);

  const onChangeCategory = (id: number, category: Categories) => {
    console.log(typeof id, category);
    setTodoList((prev) =>
      prev.map((todo) => (todo.id === id ? { ...todo, category } : todo))
    );
  };

  const onAddTodo = (text: string) => {
    if (text !== '') {
      setTodoList((prev) => [
        ...prev,
        { id: Date.now(), text, category: 'TODO' },
      ]);
    }
  };

  const onDeleteTodo = (id: number) => {
    setTodoList((prev) => prev.filter((todo) => todo.id !== id));
  };

  return (
    <div>
      <TodoList
        todoList={todoList}
        onChangeCategory={onChangeCategory}
        onAddTodo={onAddTodo}
        onDeleteTodo={onDeleteTodo}
      />
    </div>
  );
}

export default App;
