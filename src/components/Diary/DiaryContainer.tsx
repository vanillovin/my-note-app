import { useCallback, useState } from 'react';
import { useNavigate } from 'react-router';

import Modal from '../modal';
import CategoryForm from './CategoryForm';
import useModal from '../../hooks/useModal';
import useDiary from '../../hooks/service/useDiary';
import { getDateString } from '../../utils/utils';

const DiaryContainer = () => {
  let navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');

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

  const filteredCategories = !searchTerm
    ? categories
    : categories.filter((cat) =>
        cat.title.toLowerCase().includes(searchTerm.toLowerCase())
      );

  return (
    <div className="m-10">
      <form className="">
        <input
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full p-2 rounded-lg shadow-sm focus:outline-blue-400"
          placeholder="다이어리 카테고리 검색하기"
        />
      </form>
      <div className="flex flex-wrap">
        {filteredCategories.length > 0 ? (
          filteredCategories.map(({ id, title, color, updateDate }) => (
            <div
              key={id}
              className={`diary group`}
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
                  <h2 className="text-2xs tablet:text-xs tracking-tight">
                    마지막 업데이트: {getDateString('localeDate', updateDate)}
                  </h2>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="diary border flex items-center justify-center">
            {searchTerm
              ? '검색된 다이어리가 존재하지 않습니다.'
              : '다이어리가 존재하지 않습니다. + 버튼을 눌러 새로운 다이어리를 만들어보세요!'}
          </p>
        )}
        {!searchTerm && (
          <div className="diary bg-white bg-opacity-90">
            <div
              onClick={openModal}
              className="absolute text-lg tablet:text-2xl w-full h-full leading-3 tablet:leading-5 p-1 tablet:p-3 top-0 left-0 flex items-center justify-center"
            >
              +
            </div>
          </div>
        )}
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
    </div>
  );
};

export default DiaryContainer;
