import { useState } from 'react';

const useModal = () => {
  const [isShowing, setIsShowing] = useState(false);

  const openModal = () => setIsShowing(true);

  const closeModal = () => setIsShowing(false);

  return { isShowing, openModal, closeModal };
};

export default useModal;
