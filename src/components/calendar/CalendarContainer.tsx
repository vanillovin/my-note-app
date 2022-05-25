import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router';
import { Outlet, useNavigate } from 'react-router';
import { RootState } from '../../modules';
import Modal from '../modal';

const days = ['일', '월', '화', '수', '목', '금', '토'];

const CalendarContainer = () => {
  const date = new Date();
  const year = date.getFullYear();
  const mon = date.getMonth() + 1;

  const location = useLocation();
  const calendar = useSelector((state: RootState) => state.calendar);

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

  const navigate = useNavigate();

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
      <div className="flex items-center justify-center p-1 dark:text-white">
        <button className="text-xs tablet:text-sm p-2" onClick={getPrevMonth}>
          {'◀'}
        </button>
        <h1 className="font-bold tablet:text-lg mx-2">
          {year}.{month + 1}
        </h1>
        <button className="text-xs tablet:text-sm p-2" onClick={getNextMonth}>
          {'▶'}
        </button>
      </div>

      <div>
        <div
          className="text-sm tablet:text-base bg-rose-300 dark:bg-blue-300 dark:bg-opacity-60 
                    grid grid-cols-7 rounded-tl-sm rounded-tr-sm"
        >
          {days.map((v) => (
            <div
              key={v}
              className="py-1 px-3 tablet:px-2 font-semibold dark:text-white"
            >
              {v}
            </div>
          ))}
        </div>
        <div className="bg-white dark:bg-stone-600 grid grid-cols-7 grid-rows-5 rounded-bl-sm rounded-br-sm">
          {new Array(calendar[month].space).fill('').map((_, i) => (
            <div key={i}></div>
          ))}
          {Object.keys(calendar[month][year]).map((day) => (
            <div
              key={day}
              className="h-10 tablet:h-24 py-1 px-2 cursor-pointer hover:bg-stone-100 dark:hover:bg-stone-700"
              onClick={() => handleOnClickSchedule(+day)}
            >
              <div
                className={`font-bold text-sm tablet:text-base w-5 h-5 tablet:w-auto tablet:h-auto rounded-full 
                  text-center tablet:text-left dark:text-white
                  ${
                    calendar[month].holidyas.includes(+day) &&
                    'text-rose-400 dark:text-rose-400'
                  }
                   ${
                     (+day + calendar[month].space) % 7 === 0 &&
                     'text-blue-400 dark:text-blue-400'
                   }
                  ${
                    calendar[month][year][+day] &&
                    'bg-amber-200 dark:bg-white dark:bg-opacity-20 tablet:bg-transparent'
                  }
                `}
              >
                {day}
              </div>
              <div className="hidden tablet:block text-xs tablet:text-sm break-words">
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
