import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import App from '../App';
import Calendar from '../pages/Calendar';
import Diary from '../pages/Diary';
import Header from './layout/Header';

const Router = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="diary" element={<Diary />} />
        <Route path="calendar" element={<Calendar />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
