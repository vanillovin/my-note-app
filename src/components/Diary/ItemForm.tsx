import React, { useEffect, useRef, useState } from 'react';

interface ItemFormProps {
  prevData: { prevTitle: string; prevContent: string; prevEmoji: string };
  onClick: (title: string, content: string, emoji: string) => void;
  handleCloseModal: () => void;
}

const emojis = ['😀', '😭', '🥰', '🤩', '😱', '😡'];

const ItemForm = ({ prevData, onClick, handleCloseModal }: ItemFormProps) => {
  console.log('ItemForm');

  const { prevTitle, prevContent, prevEmoji } = prevData;

  const [selectedEmoji, setSelectedEmoji] = useState('');

  const titleInputRef = useRef<HTMLInputElement>(null);
  const contentInputRef = useRef<HTMLTextAreaElement>(null);

  const [error, setError] = useState<null | string>(null);

  useEffect(() => {
    if (titleInputRef.current) titleInputRef.current.value = prevTitle;
    if (contentInputRef.current) contentInputRef.current.value = prevContent;
    setSelectedEmoji(prevEmoji);
  }, [prevTitle, prevContent, prevEmoji]);

  const handleOnclick = () => {
    if (titleInputRef.current?.value === '') {
      titleInputRef.current.focus();
      return;
    }
    if (contentInputRef.current?.value === '') {
      contentInputRef.current.focus();
      return;
    }
    if (
      titleInputRef.current?.value &&
      titleInputRef.current?.value.length > 20
    ) {
      setError('제목은 20자 이하로 입력해 주세요');
      return;
    } else setError(null);
    onClick(
      titleInputRef.current?.value as string,
      contentInputRef.current?.value as string,
      selectedEmoji
    );
    handleCloseModal();
  };

  return (
    <div className="flex flex-col tablet:w-96">
      <input
        ref={titleInputRef}
        className="border outline-none border-stone-400 rounded-sm py-1 px-2"
        placeholder="제목을 입력하세요"
        required
      />
      {error && <p className="text-blue-600 mt-1 ml-1 text-sm">{error}</p>}
      <textarea
        ref={contentInputRef}
        className="border outline-none border-stone-400 rounded-sm py-1 px-2 my-4 h-40"
        placeholder="내용을 입력하세요"
        required
      />
      <div className="flex items-center mb-4">
        <p>오늘의 기분</p>
        {emojis.map((emoji, i) => (
          <button
            key={i}
            className={`ml-2 p-1 rounded-sm ${
              selectedEmoji === emoji ? 'bg-gray-500' : 'bg-gray-300'
            }`}
            onClick={() => setSelectedEmoji(emoji)}
          >
            {emoji}
          </button>
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
    </div>
  );
};

export default ItemForm;
