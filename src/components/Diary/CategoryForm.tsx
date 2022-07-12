import React, { useEffect, useRef, useState } from 'react';
import { COLORS } from './DiaryContainer';

interface CategoryFormProps {
  prevTitle: string;
  prevColor: string;
  onClick: (title: string, color: string) => void;
  handleCloseModal: () => void;
}

const CategoryForm = ({
  prevTitle,
  prevColor,
  onClick,
  handleCloseModal,
}: CategoryFormProps) => {
  console.log('CategoryForm');
  const titleInputRef = useRef<HTMLInputElement>(null);

  const [diaryColor, setDiaryColor] = useState('#EEEEEE');
  const [error, setError] = useState<null | string>(null);

  useEffect(() => {
    if (titleInputRef.current) titleInputRef.current.value = prevTitle;
    setDiaryColor(prevColor);
  }, [prevTitle, prevColor]);

  const handleOnclick = () => {
    if (titleInputRef.current?.value === '') {
      titleInputRef.current.focus();
      return;
    }
    if (
      titleInputRef.current?.value &&
      titleInputRef.current?.value.length > 30
    ) {
      setError('제목은 30자 이하로 입력해 주세요');
      return;
    } else setError(null);
    onClick(titleInputRef.current?.value as string, diaryColor);
    handleCloseModal();
    setDiaryColor('#EEEEEE');
  };

  return (
    <>
      <input
        ref={titleInputRef}
        className="border border-stone-400 rounded-sm py-1 px-2 my-4"
        placeholder="제목을 입력해 주세요"
        min="1"
        max="30"
        required
      />
      {error && (
        <p className="text-sm text-blue-600 ml-1 -mt-3 mb-4">{error}</p>
      )}
      <div className="flex flex-wrap mb-4">
        {COLORS.categories.map((color) => (
          <div
            key={color}
            onClick={() => setDiaryColor(color)}
            className={`${
              color !== '#EEEEEE' && 'mr-2 mb-2'
            } w-10 h-10 rounded-full cursor-pointer`}
            style={{
              backgroundColor: color,
              border: color === diaryColor ? '2px solid black' : '',
            }}
          ></div>
        ))}
      </div>
      <div className="flex justify-end text-sm">
        <button
          onClick={handleOnclick}
          className="bg-stone-400 py-1 px-2 hover:opacity-70 ml-2 rounded-sm transition-all"
        >
          확인
        </button>
        <button
          className="bg-stone-200 py-1 px-2 hover:opacity-70 ml-2 rounded-sm transition-all"
          onClick={handleCloseModal}
        >
          닫기
        </button>
      </div>
    </>
  );
};

export default CategoryForm;
