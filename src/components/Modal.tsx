import React from 'react';

interface ModalProps {
  children: React.ReactNode;
}

const Modal = ({ children }: ModalProps) => {
  return (
    <div
      className="z-10 absolute top-0 left-0 w-full h-full flex items-center justify-center 
              bg-white bg-opacity-50 dark:bg-black dark:bg-opacity-50"
    >
      <div className="flex flex-col bg-white dark:bg-stone-700 shadow-md p-4 rounded-sm">
        {children}
      </div>
    </div>
  );
};

export default Modal;
