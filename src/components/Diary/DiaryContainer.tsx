import React, { useCallback } from 'react';
import { useNavigate } from 'react-router';
import useDiary from '../../hooks/service/useDiary';
import useModal from '../../hooks/useModal';

import Modal from '../modal';
import CategoryForm from './CategoryForm';

// object, array ? object로 바꾸기. 상수같은 경우 대문자로
export const COLORS = {
  categories: [
    // COLORS
    'rgba(243, 129, 129, 1)',
    'rgba(255, 222, 222, 1)',
    'rgba(242, 163, 121, 1)',
    'rgba(252, 227, 138, 1)',
    'rgba(54, 174, 124, 1)',
    'rgba(84, 186, 185, 1)',
    'rgba(0, 110, 127, 1)',
    'rgba(20, 63, 107, 1)',
    'rgba(136, 121, 176, 1)',
    'rgba(238, 238, 238, 1)',
  ],
};

export const getDateString = (type: 'localeDate' | 'locale', time: number) => {
  const updateDate = new Date(time);
  const localeString = updateDate.toLocaleString();
  const localeDateString = updateDate.toLocaleDateString();
  return type === 'localeDate'
    ? localeDateString.substring(0, localeDateString.length - 1)
    : localeString;
};

const DiaryContainer = () => {
  let navigate = useNavigate();

  const { isShowing, openModal, closeModal } = useModal();

  const { categories, onAddCategory } = useDiary();

  const handleOnClickCard = useCallback(
    (id: number) => {
      navigate(`/diary/${id}`, { state: { id } });
    },
    [navigate]
  );

  const handleAddCategory = (title: string, color: string) => {
    onAddCategory(title, color);
  };

  return (
    <>
      <div className="m-10 flex flex-wrap">
        {categories.map(({ id, title, color, updateDate }) => (
          <div
            key={id}
            className={`diary group dark:bg-opacity-80`}
            style={{
              backgroundColor: `${color}`,
            }}
          >
            <div
              onClick={() => handleOnClickCard(id)}
              className="z-10 absolute w-full h-full leading-3 tablet:leading-5 top-0 left-0 flex items-center justify-center flex-col"
            >
              <div className="w-full bg-white bg-opacity-40 tablet:h-1/3 flex flex-col items-start justify-center px-1 text-left">
                <h1 className="tablet:mb-1 text-sm tablet:text-base">
                  {title}
                </h1>
                <h2 className="text-xs tracking-tight">
                  마지막 업데이트: {getDateString('localeDate', updateDate)}
                </h2>
              </div>
            </div>
          </div>
        ))}
        <div className="diary bg-white">
          <div
            onClick={openModal}
            className="absolute w-full h-full leading-3 tablet:leading-5 p-1 tablet:p-3 top-0 left-0 flex items-center justify-center"
          >
            +
          </div>
        </div>
      </div>

      {isShowing && (
        <Modal>
          <CategoryForm
            prevTitle=""
            prevColor="#EEEEEE"
            onClick={handleAddCategory}
            handleCloseModal={closeModal}
          />
        </Modal>
      )}
    </>
  );
};

export default DiaryContainer;
