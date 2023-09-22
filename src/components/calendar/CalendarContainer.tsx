import { useState } from 'react';
import { Outlet, useLocation } from 'react-router';

import Modal from '../modal';
import Calendar from './Calendar';
import { getCurrentDate } from '../../utils/utils';

function CalendarContainer() {
  const location = useLocation();
  const schdulePath = location.pathname.includes('new');
  const { curYear, curMonth } = getCurrentDate();

  const [date, setDate] = useState({
    year: curYear,
    month: curMonth,
  });
  const { year, month } = date;

  const handleGetPrevMonth = () => {
    if (month === 1) {
      if (year === 2023) return;
      setDate((prev) => ({ ...prev, year: prev.year - 1, month: 12 }));
    } else {
      setDate((prev) => ({ ...prev, month: prev.month - 1 }));
    }
  };

  const handleGetNextMonth = () => {
    if (month === 12) {
      if (year === 2024) return;
      setDate((prev) => ({ ...prev, year: prev.year + 1, month: 1 }));
    } else {
      setDate((prev) => ({ ...prev, month: prev.month + 1 }));
    }
  };

  return (
    <div className="mx-4 my-8">
      <div className="flex items-center justify-center p-1 dark:text-white mb-2">
        <button
          className="text-xs tablet:text-sm p-2"
          onClick={handleGetPrevMonth}
        >
          {'◀'}
        </button>
        <h1 className="font-bold tablet:text-xl mx-2">
          {year}. {month}
        </h1>
        <button
          className="text-xs tablet:text-sm p-2"
          onClick={handleGetNextMonth}
        >
          {'▶'}
        </button>
      </div>
      <Calendar year={year} month={month} />
      {schdulePath && (
        <Modal>
          <Outlet />
        </Modal>
      )}
    </div>
  );
}

export default CalendarContainer;
