import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import type { RootState } from './modules';
import Weather from './components/weather/Weather';
import TodoList from './components/todo/TodoList';
import { getCurrentDate, days } from './utils/utils';
import TodoProgress from './components/todo/TodoProgress';

function App() {
  const { curYear, curMonth, curDay, curDate } = getCurrentDate();
  const calendar = useSelector((state: RootState) => state.calendar);
  const { text: curSchedule, name } = calendar[curYear][curMonth].days[curDate];

  return (
    <>
      <div className="mt-8 m-2 rounded-md shadow-lg">
        <div className="bg-white rounded-t-md flex p-2 border-b dark:border-black dark:bg-amber-400 dark:bg-opacity-40 dark:text-white select-none ">
          <TodoProgress />
          <Weather />
        </div>
        <div className="p-4 rounded-b-md bg-white/30 dark:bg-amber-400/40 flex flex-col items-center">
          <p className="font-semibold dark:text-white text-lg">
            {name ? `오늘은 ${name}!` : '오늘의 일정'}
            <span className="text-base ml-1 text-gray-800 dark:text-white/90">
              ({curYear}. {curMonth}. {curDate} {days[curDay]})
            </span>
          </p>
          <p className="px-1 py-2">
            {curSchedule !== '' ? (
              curSchedule
            ) : (
              <span className="text-gray-600 dark:text-white/60">
                아직 일정이 없어요!
              </span>
            )}
          </p>
          <Link
            to="/calendar/new"
            state={{
              year: curYear,
              month: curMonth,
              day: curDate,
              text: curSchedule,
            }}
            className="bg-white rounded-full px-2 py-1 hover:bg-blue-300 dark:hover:bg-black dark:hover:text-white transition-colors"
          >
            {curSchedule === '' ? '추가하러 가기' : '확인하러 가기'} ▶
          </Link>
        </div>
      </div>

      <TodoList />
    </>
  );
}

export default App;
