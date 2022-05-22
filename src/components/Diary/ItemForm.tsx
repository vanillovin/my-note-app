import React, { useEffect, useRef, useState } from 'react';

interface ItemFormProps {
  prevTitle: string;
  prevContent: string;
  onClick: (title: string, content: string) => void;
  handleCloseModal: () => void;
}

const ItemForm = ({
  prevTitle,
  prevContent,
  onClick,
  handleCloseModal,
}: ItemFormProps) => {
  console.log('ItemForm');

  const titleInputRef = useRef<HTMLInputElement>(null);
  const contentInputRef = useRef<HTMLTextAreaElement>(null);

  const [error, setError] = useState<null | string>(null);

  useEffect(() => {
    if (titleInputRef.current) titleInputRef.current.value = prevTitle;
    if (contentInputRef.current) contentInputRef.current.value = prevContent;
  }, [prevTitle, prevContent]);

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
      contentInputRef.current?.value as string
    );
    handleCloseModal();
  };

  return (
    <div className="flex flex-col tablet:w-96">
      <input
        ref={titleInputRef}
        // value={titleInputRef.current?.value}
        className="border border-gray-400 rounded-sm py-1 px-2"
        placeholder="제목을 입력하세요"
        required
      />
      {error && <p className="text-blue-600 mt-1 ml-1 text-sm">{error}</p>}
      <textarea
        ref={contentInputRef}
        // value={contentInputRef.current?.value}
        className="border border-gray-400 rounded-sm py-1 px-2 my-4 h-40"
        placeholder="내용을 입력하세요"
        required
      />
      <div className="flex justify-end text-sm">
        <button
          onClick={handleOnclick}
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
    </div>
  );
};

export default ItemForm;
