import { Routes, Route, BrowserRouter } from 'react-router-dom';

import App from '../App';
import Header from './layout/Header';
import Diary from '../pages/Diary';
import DiaryDetail from '../pages/DiaryDetail';
import DiaryItem from '../pages/DiaryItem';
import Calendar from '../pages/Calendar';
import CalendarForm from './calendar/CalendarForm';

const Router = () => {
  return (
    <BrowserRouter basename="/">
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
