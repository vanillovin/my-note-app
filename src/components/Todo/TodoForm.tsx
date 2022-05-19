import React, { useState } from 'react';

interface TodoFormProps {
  onAddTodo: (text: string) => void;
}

const TodoForm = ({ onAddTodo }: TodoFormProps) => {
  const [text, setText] = useState('');

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  const handleAddTodo = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setText('');
    onAddTodo(text);
  };

  return (
    <form className="flex p-2 w-full" onSubmit={handleAddTodo}>
      <input
        className="rounded-sm p-2 outline-none border-b-2 border-white bg-transparent text-white
                  transition-all flex-grow placeholder:text-transparent placeholder:hover:text-white"
        value={text}
        onChange={onChange}
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
