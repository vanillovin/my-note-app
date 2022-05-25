import React, { useCallback, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams, useLocation } from 'react-router';
import { RootState } from '../../modules';
import { deleteItem, editItem } from '../../modules/diary';
import { DiaryItemParams, LocationState } from '../../pages/DiaryDetail';
import Modal from '../modal';
import ItemForm from './ItemForm';

const DiaryItem = () => {
  console.log('DiaryItem');

  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  const { id } = useParams<keyof DiaryItemParams>() as DiaryItemParams;
  const navigate = useNavigate();
  const location = useLocation();
  const state = location.state as LocationState;

  const categoryId = location.pathname.split('/')[2] || state.id;
  const itemId = location.pathname.split('/')[3];

  const items = useSelector(
    (state: RootState) =>
      state.diary.find((cat) => cat.id === +location.pathname.split('/')[2])
        ?.items
  );
  const item = items?.find((item) => item.id === +id);

  const dispatch = useDispatch();

  const onDeleteItem = useCallback(
    (catId: number, itemId: number) => dispatch(deleteItem(catId, itemId)),
    [dispatch]
  );

  const handleDeleteItem = () => {
    if (!window.confirm(`${item?.title}을(를) 삭제하시겠습니까?`)) return;
    onDeleteItem(+categoryId, +itemId);
  };

  const onEditItem = useCallback(
    (catId: number, itemId: number, title: string, content: string) =>
      dispatch(editItem(catId, itemId, title, content)),
    [dispatch]
  );

  const handleEditItem = (title: string, content: string) => {
    onEditItem(+categoryId, +itemId, title, content);
    handleCloseModal();
  };

  return (
    <div className="w-full tablet:w-3/5">
      <div className="bg-white p-4 tablet:p-6 dark:bg-opacity-80">
        <div className="w-full flex flex-wrap items-center justify-between border-b border-black pb-3">
          <h3 className="font-bold text-sm tablet:text-base">{item?.title}</h3>
          <button
            className="text-xs tablet:text-sm hover:font-bold select-none"
            onClick={() => navigate(`/diary/${categoryId}`)}
          >
            닫기
          </button>
        </div>
        <p className="text-sm tablet:text-base my-6 whitespace-pre-line text-gray-800">
          {item?.content}
        </p>
        <div className="flex items-center justify-between text-xs tablet:text-sm">
          <h4 className="text-xs">{item?.createDate}</h4>
          <div className="flex items-center select-none group">
            <div className="hidden group-hover:block">
              <button
                className="ml-1 hover:font-bold"
                onClick={handleOpenModal}
              >
                수정
              </button>
              <button
                className="ml-1 hover:font-bold"
                onClick={handleDeleteItem}
              >
                삭제
              </button>
            </div>
            <div className="font-bold cursor-pointer ml-2">☰</div>
          </div>
        </div>
      </div>

      {isModalOpen && (
        <Modal>
          <ItemForm
            prevTitle={item?.title as string}
            prevContent={item?.content as string}
            onClick={handleEditItem}
            handleCloseModal={handleCloseModal}
          />
        </Modal>
      )}
    </div>
  );
};

export default DiaryItem;
