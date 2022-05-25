import React, { useCallback, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Outlet, useLocation, useNavigate, useParams } from 'react-router';
import { RootState } from '../../modules';
import { addItem, deleteCategory, editCategory } from '../../modules/diary';
import Modal from '../modal';
import CategoryForm from './CategoryForm';
import ItemForm from './ItemForm';

export type DiaryItemParams = {
  id: string;
};

export type LocationState = {
  id: number;
};

const DiaryDetailContainer = () => {
  console.log('DiaryDetail');

  const { id } = useParams<DiaryItemParams>();

  const navigate = useNavigate();
  const location = useLocation();

  const state = location.state as LocationState;

  const categoryId = location.pathname.split('/')[2] || state.id;
  const itemId = location.pathname.split('/')[3];

  const diary = useSelector((state: RootState) =>
    state.diary.find((v) => v.id === +categoryId)
  );
  const item = diary?.items.find((item) => item.id === +itemId);

  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isCreateModalItem, setIsCreateModalOpen] = useState(false);
  const handleOpenModal = (name: 'editCat' | 'createItem') => {
    name === 'editCat' ? setIsEditModalOpen(true) : setIsCreateModalOpen(true);
  };
  const handleCloseModal = (name: 'editCat' | 'createItem') => {
    name === 'editCat'
      ? setIsEditModalOpen(false)
      : setIsCreateModalOpen(false);
  };

  const dispatch = useDispatch();

  const onDeleteCategory = useCallback(
    (id) => dispatch(deleteCategory(id)),
    [dispatch]
  );

  const handleDeleteCategory = () => {
    if (!window.confirm(`${diary?.title}을(를) 삭제하시겠습니까?`)) return;
    onDeleteCategory(+categoryId);
    navigate('/diary');
  };

  const onEditCategory = useCallback(
    (id: number, title: string, color: string) =>
      dispatch(editCategory(id, title, color)),
    [dispatch]
  );

  const handleEditCategory = (title: string, color: string) => {
    onEditCategory(+categoryId, title, color);
  };

  const handleOnClickItem = (id: number) => {
    navigate(`/diary/${categoryId}/${id}`, { state: { id: categoryId } });
  };

  const onAddItem = useCallback(
    (id: number, title: string, content: string) =>
      dispatch(addItem(id, title, content)),
    [dispatch]
  );

  const handleAddItem = (title: string, content: string) => {
    onAddItem(+categoryId, title, content);
  };

  return (
    <>
      <div className="m-10">
        <div
          className="flex flex-wrap items-center justify-between border-b-2 border-white 
                      dark:border-stone-300 pb-3 mb-3 tablet:pb-5 tablet:mb-5"
        >
          <div className="flex flex-wrap items-end dark:text-stone-300">
            <h2 className="text-sm tablet:text-lg font-bold mr-1">
              {diary?.title}
            </h2>
            <h3 className="text-xs tablet:text-sm">
              (
              {diary?.createDate.substring(
                0,
                diary?.createDate.lastIndexOf('.')
              )}
              )
            </h3>
          </div>
          <div className="text-xs tablet:text-sm select-none">
            <button
              className="rounded-xl tablet:rounded-full px-2 tablet:py-1 tablet:px-3 bg-blue-300 hover:bg-opacity-70"
              onClick={() => handleOpenModal('editCat')}
            >
              수정
            </button>
            <button
              className="rounded-xl tablet:rounded-full ml-1 tablet:ml-2 px-2 tablet:py-1 tablet:px-3 bg-blue-100 hover:bg-opacity-70"
              onClick={handleDeleteCategory}
            >
              삭제
            </button>
          </div>
        </div>

        <div className="flex flex-col tablet:flex-row">
          <ul
            className={`${
              item ? 'w-full tablet:w-2/5' : 'w-full'
            } flex flex-wrap`}
          >
            {diary?.items.map(({ id, title, createDate }) => (
              <li
                key={id}
                onClick={() => handleOnClickItem(+id)}
                className="diary-item"
              >
                <h3 className="text-xs tablet:text-sm text-center leading-3 tablet:leading-4 h-2/3 flex items-center">
                  {title.length > 10 ? `${title.substring(0, 10)}..` : title}
                </h3>
                <h4 className="hidden tablet:block text-xs tracking-tighter">
                  {createDate.substring(0, createDate.lastIndexOf('.'))}
                </h4>
              </li>
            ))}
            <li
              key={id}
              onClick={() => handleOpenModal('createItem')}
              className="diary-item"
            >
              <h3 className="text-xs tablet:text-sm text-center leading-3 tablet:leading-4">
                +
              </h3>
            </li>
          </ul>

          {item && <Outlet />}
        </div>
      </div>

      {isEditModalOpen && (
        <Modal>
          <CategoryForm
            prevTitle={diary?.title as string}
            prevColor={diary?.color as string}
            onClick={handleEditCategory}
            handleCloseModal={() => handleCloseModal('editCat')}
          />
        </Modal>
      )}
      {isCreateModalItem && (
        <Modal>
          <ItemForm
            prevTitle=""
            prevContent=""
            onClick={handleAddItem}
            handleCloseModal={() => handleCloseModal('createItem')}
          />
        </Modal>
      )}
    </>
  );
};

export default DiaryDetailContainer;
