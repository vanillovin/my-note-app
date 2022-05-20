import React, { useRef, useState } from 'react';
import { COLORS } from '../../pages/Diary';

interface CategoryFormProps {
  onClick: (title: string, color: string) => void;
  handleCloseModal: () => void;
}

const CategoryForm = ({ onClick, handleCloseModal }: CategoryFormProps) => {
  const titleInputRef = useRef<HTMLInputElement>(null);

  const [diaryColor, setDiaryColor] = useState('#EEEEEE');

  const handleClick = () => {
    if (titleInputRef.current?.value === '') {
      titleInputRef.current.focus();
      return;
    }
    onClick(titleInputRef.current?.value as string, diaryColor); // or onClick(id, title, color)
    handleCloseModal();
    setDiaryColor('#EEEEEE');
  };

  return (
    <>
      <input
        ref={titleInputRef}
        className="border border-gray-400 rounded-sm py-1 px-2 my-4"
        placeholder="제목을 입력하세요"
      />
      <div className="flex flex-wrap">
        {COLORS.categories.map((color) => (
          <div
            key={color}
            onClick={() => setDiaryColor(color)}
            className={`${
              color !== '#EEEEEE' && 'mr-2'
            } w-10 h-10 rounded-full mb-8 cursor-pointer`}
            style={{
              backgroundColor: color,
              border: color === diaryColor ? '2px solid black' : '',
            }}
          ></div>
        ))}
      </div>
      <div className="flex justify-end text-sm">
        <button
          onClick={handleClick}
          className="bg-gray-400 py-1 px-2 hover:opacity-70 ml-2 rounded-sm"
        >
          확인
        </button>
        <button
          className="bg-gray-200 py-1 px-2 hover:opacity-70 ml-2 rounded-sm"
          onClick={handleCloseModal}
        >
          닫기
        </button>
      </div>
    </>
  );
};

export default CategoryForm;
