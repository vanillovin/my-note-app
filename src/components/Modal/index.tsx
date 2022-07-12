import React from 'react';
import ModalPortal from './ModalPortal';

interface ModalProps {
  children: React.ReactNode;
}

const Modal = ({ children }: ModalProps) => {
  return (
    <ModalPortal>
      <div
        className="absolute z-50 top-0 left-0 w-full h-full flex items-center justify-center 
                bg-white bg-opacity-50 dark:bg-black dark:bg-opacity-50"
      >
        <div className="flex flex-col bg-white dark:bg-stone-800 shadow-md p-4 mx-4 rounded-sm">
          {children}
        </div>
      </div>
    </ModalPortal>
  );
};

export default Modal;
