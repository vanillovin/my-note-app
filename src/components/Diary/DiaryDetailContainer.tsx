import { useState } from 'react';
import { useSelector } from 'react-redux';
import { Outlet, useLocation, useNavigate, useParams } from 'react-router';

import Modal from '../modal';
import ItemForm from './ItemForm';
import CategoryForm from './CategoryForm';
import useModal from '../../hooks/useModal';
import { type RootState } from '../../modules';
import useDiary from '../../hooks/service/useDiary';
import { getDateString } from '../../utils/utils';

export type DiaryItemParams = {
  id: string;
};

export type LocationState = {
  id: number;
};

type SearchOption = 'title' | 'content';

const DiaryDetailContainer = () => {
  const { id } = useParams<DiaryItemParams>();
  const navigate = useNavigate();
  const location = useLocation();
  const state = location.state as LocationState;
  const categoryId = location.pathname.split('/')[2] || state.id;
  const itemId = location.pathname.split('/')[3];
  const [searchTerm, setSearchTerm] = useState('');
  const [searchOption, setSearchOption] = useState<SearchOption>('title');
  const diary = useSelector((state: RootState) =>
    state.diary.find((v) => v.id === +categoryId)
  );
  const item = diary?.items.find((item) => item.id === +itemId);
  const { isShowing, openModal, closeModal } = useModal();
  const {
    isShowing: isEditShowing,
    openModal: openEditModal,
    closeModal: closeEditModal,
  } = useModal();
  const { onAddItem, onDeleteCategory, onEditCategory } = useDiary();

  const handleDeleteCategory = () => {
    if (!window.confirm(`${diary?.title}을(를) 삭제하시겠습니까?`)) return;
    onDeleteCategory(+categoryId);
    navigate('/diary');
  };

  const handleEditCategory = (title: string, color: string) => {
    onEditCategory(+categoryId, title, color);
  };

  const handleOnClickItem = (id: number) => {
    navigate(`/diary/${categoryId}/${id}`, { state: { id: categoryId } });
  };

  const handleAddItem = (title: string, content: string, emoji: string) => {
    onAddItem(+categoryId, title, content, emoji);
  };

  const filteredItems = !searchTerm
    ? diary?.items
    : diary?.items.filter((item) =>
        item[searchOption].toLowerCase().includes(searchTerm.toLowerCase())
      );

  return (
    <>
      <div className="m-10">
        <div
          className="flex flex-wrap items-center justify-between border-b-2 border-white 
            dark:border-stone-300  pb-3 mb-3 tablet:pb-5 tablet:mb-5"
        >
          <div className="flex flex-wrap items-center dark:text-stone-300">
            <h2 className="text-sm tablet:text-lg font-bold mr-1">
              {diary?.title}
            </h2>
            <h3 className="text-xs tablet:text-sm">
              생성일: {getDateString('localeDate', diary?.createDate as number)}
            </h3>
          </div>
          <div className="text-xs tablet:text-sm select-none">
            <button
              onClick={openEditModal}
              className="rounded-xl tablet:rounded-full px-2 tablet:py-1 tablet:px-3 transition-all
              bg-blue-300 hover:opacity-70 dark:bg-opacity-80 dark:hover:opacity-60"
            >
              수정
            </button>
            <button
              onClick={handleDeleteCategory}
              className="rounded-xl tablet:rounded-full ml-1 tablet:ml-2 px-2 tablet:py-1 transition-all
              tablet:px-3 bg-blue-100 hover:opacity-70 dark:bg-opacity-80 dark:hover:opacity-60"
            >
              삭제
            </button>
          </div>
        </div>

        <form className="my-4 p-1 flex items-center bg-white rounded-lg">
          <select
            onChange={(e) => setSearchOption(e.target.value as SearchOption)}
            className="p-1 outline-none"
          >
            <option value="title" className="">
              제목
            </option>
            <option value="content" className="">
              내용
            </option>
          </select>
          <input
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="p-2 flex-1 outline-none"
            placeholder="다이어리 아이템 검색하기"
          />
        </form>

        <div className="flex flex-col tablet:flex-row">
          <ul
            className={`${
              item ? 'w-full tablet:w-2/5' : 'w-full'
            } flex flex-wrap`}
          >
            {filteredItems?.map(({ id, title, createDate }) => (
              <li
                key={id}
                onClick={() => handleOnClickItem(+id)}
                className="diary-item"
              >
                <h3 className="text-xs tablet:text-sm text-center leading-3 tablet:leading-4 h-2/3 flex items-center break-all">
                  {title.length > 12 ? `${title.substring(0, 12)}..` : title}
                </h3>
                <h4 className="hidden tablet:block text-xs tracking-tighter">
                  {getDateString('localeDate', createDate)}
                </h4>
              </li>
            ))}
            <li key={id} onClick={openModal} className="diary-item">
              <h3 className="text-xs tablet:text-sm text-center leading-3 tablet:leading-4">
                +
              </h3>
            </li>
          </ul>

          {item && <Outlet />}
        </div>
      </div>

      {isEditShowing && (
        <Modal>
          <CategoryForm
            prevTitle={diary?.title as string}
            prevColor={diary?.color as string}
            onClick={handleEditCategory}
            handleCloseModal={closeEditModal}
          />
        </Modal>
      )}
      {isShowing && (
        <Modal>
          <ItemForm
            prevData={{
              prevTitle: '',
              prevContent: '',
              prevEmoji: '',
            }}
            onClick={handleAddItem}
            handleCloseModal={closeModal}
          />
        </Modal>
      )}
    </>
  );
};

export default DiaryDetailContainer;
