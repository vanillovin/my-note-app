import { Link } from 'react-router-dom';

import useCalendar from '../../hooks/service/useCalendar';
import { days, getCurrentDate } from '../../utils/utils';

interface CalendarProps {
  year: number;
  month: number;
}

function Calendar({ year, month }: CalendarProps) {
  const { calendar } = useCalendar();
  const { curMonth, curDate } = getCurrentDate();

  return (
    <div className="shadow-lg">
      <div
        className="text-xs tablet:text-base dark:bg-white/10 bg-red-200 grid grid-cols-7 
        rounded-tl-sm rounded-tr-sm dark:border-b dark:border-stone-600"
      >
        {days.map((v) => (
          <div
            key={v}
            className={`py-1 tablet:py-2 px-1 tablet:px-2 font-semibold dark:text-white border-b border-red-300
              ${v !== '토' && 'border-r'} dark:border-stone-700 dark:border-t`}
          >
            {v}
          </div>
        ))}
      </div>

      <div className="bg-white dark:bg-transparent grid grid-cols-7 grid-rows-5 rounded-bl-sm rounded-br-sm">
        {new Array(calendar[year][month].space).fill('').map((_, i) => (
          <div
            key={i}
            className="border-b border-r dark:border-stone-700"
          ></div>
        ))}
        {Object.keys(calendar[year][month].days).map((day) => (
          <Link
            key={day}
            to="/calendar/new"
            state={{
              year,
              month,
              day,
              text: calendar[year][month].days[+day].text,
            }}
            className={`${
              curMonth === month &&
              +curDate === +day &&
              'bg-stone-100 dark:bg-white dark:bg-opacity-5'
            } h-12 tablet:h-24 py-1 tablet:py-2 tablet:px-3 cursor-pointer hover:bg-stone-100 dark:hover:bg-white dark:hover:bg-opacity-5
              border-b dark:border-stone-700 ${
                (+day + calendar[year][month].space) % 7 !== 0 && 'border-r'
              }`}
          >
            <div
              className={`calendar-day
                  ${
                    calendar[year][month].days[+day].isHoliday && 'cal-day-red'
                  } ${
                (+day + calendar[year][month].space) % 7 === 0 && 'cal-day-blue'
              } ${calendar[year][month].days[+day].text !== '' && 'cal-day-cir'}
              `}
            >
              {day}
            </div>
            <div className="hidden tablet:block text-xs tablet:text-sm break-words dark:text-white">
              <span className="text-2xs tablet:text-xs leading-3">
                {calendar[year][month].days[+day].name}
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Calendar;
