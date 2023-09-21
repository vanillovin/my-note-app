import { Routes, Route, HashRouter } from 'react-router-dom';

import App from '../App';
import Header from './layout/Header';
import DiaryPage from '../pages/DiaryPage';
import DiaryDetailPage from '../pages/DiaryDetailPage';
import DiaryItemPage from '../pages/DiaryItemPage';
import CalendarPage from '../pages/CalendarPage';
import CalendarForm from './calendar/CalendarForm';
import NotFoundPage from '../pages/NotFoundPage';

const Router = () => {
  return (
    <HashRouter basename="/">
      <Header />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/diary" element={<DiaryPage />}></Route>
        <Route path="/diary/:id" element={<DiaryDetailPage />}>
          <Route path=":id" element={<DiaryItemPage />} />
        </Route>
        <Route path="/calendar" element={<CalendarPage />}>
          <Route path="new" element={<CalendarForm />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </HashRouter>
  );
};

export default Router;
