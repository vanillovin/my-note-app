import { HashRouter, Routes, Route } from 'react-router-dom';

import App from '../App';
import Calendar from '../pages/Calendar';
import Diary from '../pages/Diary';
import DiaryDetail from '../pages/DiaryDetail';
import CalendarForm from './calendar/CalendarForm';
import DiaryItem from './diary/DiaryItem';
import Header from './layout/Header';

const Router = () => {
  return (
    <HashRouter basename="/">
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
    </HashRouter>
  );
};

export default Router;
