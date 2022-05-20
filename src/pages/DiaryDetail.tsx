import React, { useCallback, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router';
import CategoryForm from '../components/Diary/CategoryForm';
import Modal from '../components/Modal';
import { RootState } from '../modules';
import { deleteCategory, editCategory } from '../modules/diary';

type LocationState = {
  id: number;
};

const DiaryDetail = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const state = location.state as LocationState;

  const categoryId = state.id || location.pathname.split('/')[2];

  const diary = useSelector((state: RootState) =>
    state.diary.find((v) => v.id === categoryId)
  );

  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  const dispatch = useDispatch();

  const onDeleteCategory = useCallback(
    (id) => dispatch(deleteCategory(id)),
    [dispatch]
  );

  const handleDeleteCategory = () => {
    if (!window.confirm('삭제하시겠습니까?')) return;
    onDeleteCategory(categoryId);
    navigate('/diary');
  };

  const onEditCategory = useCallback(
    (id, title, color) => dispatch(editCategory(id, title, color)),
    [dispatch]
  );

  const handleEditCategory = (title: string, color: string) => {
    onEditCategory(categoryId, title, color);
  };

  return (
    <>
      <div className="m-10">
        <div className="flex items-center border-b-2 border-white pb-5 mb-5">
          <h2 className="font-bold">{diary?.title}</h2>
          <div className="text-sm">
            <button
              className="ml-3 border border-white rounded-xl px-2 bg-blue-300"
              onClick={handleOpenModal}
            >
              수정
            </button>
            <button
              className="ml-1 border border-white rounded-xl px-2 bg-blue-100"
              onClick={handleDeleteCategory}
            >
              삭제
            </button>
          </div>
        </div>

        <ul className="flex flex-wrap">
          {[
            {
              id: 1,
              title: '첫 번째 일기 내용1',
              createDate: '0520-1',
              content: 'content1',
            },
            {
              id: 2,
              title: '첫 번째 일기 내용2',
              createDate: '0520-2',
              content: 'content2',
            },
          ].map(({ id, title, createDate }) => (
            <li
              key={id}
              onClick={() => console.log(id, title)}
              className="bg-white bg-opacity-70 w-20 h-28 text-sm mr-5"
            >
              <h3>{title}</h3>
              <h4>{createDate}</h4>
            </li>
          ))}
        </ul>
      </div>

      {isModalOpen && (
        <Modal>
          <CategoryForm
            onClick={handleEditCategory}
            handleCloseModal={handleCloseModal}
          />
        </Modal>
      )}
    </>
  );
};

export default DiaryDetail;
