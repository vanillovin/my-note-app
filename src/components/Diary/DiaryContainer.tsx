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
    '#F38181',
    '#FF6FB5',
    '#F2A379',
    '#FCE38A',
    '#36AE7C',
    '#95E1D3',
    '#006E7F',
    '#143F6B',
    '#A85CF9',
    '#EEEEEE',
  ],
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
        {categories.map(({ id, title, color }) => (
          <div
            key={id}
            className={`diary group dark:bg-opacity-80`}
            style={{
              backgroundColor: `${color}`,
            }}
          >
            <div
              onClick={() => handleOnClickCard(id)}
              className="z-10 absolute w-full h-full leading-3 tablet:leading-5 p-1 tablet:p-3 
                        top-0 left-0 flex items-center justify-center"
            >
              {title}
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
