import React, { useState } from 'react';
import useTodos from '../../hooks/service/useTodos';

const TodoForm = () => {
  const [text, setText] = useState('');

  const { onCreate } = useTodos();

  const handleAddTodo = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (text.trim().length <= 0) return;
    setText('');
    onCreate(text);
  };

  return (
    <form className="flex p-2 w-full" onSubmit={handleAddTodo}>
      <input
        className="rounded-sm p-2 outline-none border-b-2 border-white bg-transparent text-white
                  transition-all flex-grow placeholder:text-transparent placeholder:hover:text-white"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="할 일을 입력하세요"
      />
      <button
        className="border-b-2 px-4 border-white text-white font-bold text-lg"
        type="submit"
      >
        +
      </button>
    </form>
  );
};

export default TodoForm;
