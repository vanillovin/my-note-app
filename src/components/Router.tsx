import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import App from '../App';
import Calendar from '../pages/Calendar';
import Diary from '../pages/Diary';
import DiaryDetail from '../pages/DiaryDetail';
import CalendarForm from './CalendarForm';
import DiaryItem from './Diary/DiaryItem';
import Header from './layout/Header';

const Router = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/diary" element={<Diary />}></Route>
        <Route path="/diary/:id" element={<DiaryDetail />}>
          <Route path=":id" element={<DiaryItem />} />
        </Route>
        <Route path="/calendar" element={<Calendar />}>
          <Route path="new" element={<CalendarForm />} />
        </Route>
        <Route
          path="*"
          element={
            <main style={{ padding: '1rem' }}>
              <p>There's nothing here!</p>
            </main>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
