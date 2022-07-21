import React, { useState } from 'react';
import { useLocation } from 'react-router';
import { Outlet, useNavigate } from 'react-router';
import useCalendar from '../../hooks/service/useCalendar';
import Modal from '../modal';

const days = ['일', '월', '화', '수', '목', '금', '토'];

const CalendarContainer = () => {
  const date = new Date();
  const year = date.getFullYear();
  const mon = date.getMonth() + 1;
  const location = useLocation();
  const navigate = useNavigate();
  const { calendar } = useCalendar();
  const schdulePath = location.pathname.includes('new');

  const [month, setMonth] = useState(mon - 1);
  const getPrevMonth = () => {
    if (month === 0) return;
    setMonth((prev) => prev - 1);
  };
  const getNextMonth = () => {
    if (month === 11) return;
    setMonth((prev) => prev + 1);
  };

  const handleOnClickSchedule = (day: number) => {
    navigate('/calendar/new', {
      state: {
        year,
        month,
        day,
        text: calendar[month][year][day],
      },
    });
  };

  return (
    <div className="m-10">
      <div className="flex items-center justify-center p-1 dark:text-white mb-2">
        <button className="text-xs tablet:text-sm p-2" onClick={getPrevMonth}>
          {'◀'}
        </button>
        <h1 className="font-bold tablet:text-xl mx-2">
          {year}.{month + 1}
        </h1>
        <button className="text-xs tablet:text-sm p-2" onClick={getNextMonth}>
          {'▶'}
        </button>
      </div>

      <div className="shadow-lg">
        <div className="text-xs tablet:text-base dark:bg-transparent bg-red-200 grid grid-cols-7 rounded-tl-sm rounded-tr-sm dark:border-b dark:border-stone-600">
          {days.map((v) => (
            <div
              key={v}
              className={`py-1 tablet:py-2 px-1 tablet:px-2 font-semibold dark:text-white border-b border-red-300
              ${v !== '토' && 'border-r'} dark:border-none`}
            >
              {v}
            </div>
          ))}
        </div>
        <div className="bg-white dark:bg-transparent grid grid-cols-7 grid-rows-5 rounded-bl-sm rounded-br-sm">
          {new Array(calendar[month].space).fill('').map((_, i) => (
            <div key={i} className="border-b border-r dark:border-none"></div>
          ))}
          {Object.keys(calendar[month][year]).map((day) => (
            <div
              key={day}
              className={`${
                mon === month + 1 &&
                +date.getDate() === +day &&
                'bg-stone-100 dark:bg-white dark:bg-opacity-5'
              } h-10 tablet:h-24 py-1 tablet:py-2 tablet:px-3 cursor-pointer hover:bg-stone-100 dark:hover:bg-white dark:hover:bg-opacity-5
              border-b dark:border-none ${
                (+day + calendar[month].space) % 7 !== 0 && 'border-r'
              }`}
              onClick={() => handleOnClickSchedule(+day)}
            >
              <div
                className={`calendar-day
                  ${calendar[month].holidyas.includes(+day) && 'cal-day-red'} ${
                  (+day + calendar[month].space) % 7 === 0 && 'cal-day-blue'
                } ${calendar[month][year][+day] && 'cal-day-cir'}
                `}
              >
                {day}
              </div>
              <div className="hidden tablet:block text-xs tablet:text-sm break-words dark:text-white">
                {calendar[month][year][+day]}
              </div>
            </div>
          ))}
        </div>
      </div>

      {schdulePath && (
        <Modal>
          <Outlet />
        </Modal>
      )}
    </div>
  );
};

export default CalendarContainer;
