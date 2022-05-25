import React from 'react';
import reactDom from 'react-dom';

const ModalPortal = ({ children }: { children: React.ReactNode }) => {
  const modalElement = document.getElementById('modal') as Element;
  return reactDom.createPortal(children, modalElement);
};

export default ModalPortal;
