import { useSelector } from 'react-redux';
import { Outlet, useLocation, useNavigate, useParams } from 'react-router';
import useDiary from '../../hooks/service/useDiary';
import useModal from '../../hooks/useModal';
import { RootState } from '../../modules';
import { getDateString } from '../../utils/utils';
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

  return (
    <>
      <div className="m-10">
        <div
          className="flex flex-wrap items-center justify-between border-b-2 border-white 
                    dark:border-stone-300  pb-3 mb-3 tablet:pb-5 tablet:mb-5"
        >
          <div className="flex flex-wrap items-end dark:text-stone-300">
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
