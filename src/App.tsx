import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import type { RootState } from './modules';
import Weather from './components/weather/Weather';
import TodoList from './components/todo/TodoList';
import { getCurrentDate, days } from './utils/utils';

function App() {
  const { curYear, curMonth, curDay, curDate } = getCurrentDate();
  const calendar = useSelector((state: RootState) => state.calendar);
  const { text: curSchedule, name } = calendar[curYear][curMonth].days[curDate];

  return (
    <>
      <Weather />
      <div className="p-4 m-2 shadow-md rounded-sm bg-white/20 my-4 flex flex-col items-center">
        <p className="font-semibold text-lg">
          {name ? `오늘은 ${name}!` : '오늘의 일정'}
          <span className="text-base ml-1 text-gray-800">
            ({curYear}. {curMonth}. {curDate} {days[curDay]})
          </span>
        </p>
        <p className="px-1 py-2">
          {curSchedule !== '' ? (
            curSchedule
          ) : (
            <span className="text-gray-600">아직 일정이 없어요!</span>
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
          className="bg-white rounded-full px-2 py-1 hover:bg-gray-200 transition-colors"
        >
          일정 {curSchedule === '' ? '추가하러 가기' : '확인하러 가기'} ▶
        </Link>
      </div>
      <TodoList />
    </>
  );
}

export default App;
