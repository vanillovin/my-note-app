import { Link, useLocation } from 'react-router-dom';
import ThemeToggle from '../ThemeToggle';
import { AiFillHome } from 'react-icons/ai';
import Clock from '../Clock';

const Header = () => {
  const location = useLocation();

  return (
    <div
      className={`text-xs tablet:text-base w-full h-14 tablet:h-20 flex flex-row items-center justify-between dark:border-b
                  px-5 tablet:px-10 bg-blue-100 select-none text-gray-600 dark:text-stone-100 font-bold dark:bg-transparent`}
    >
      <div className="w-1/3 flex items-center">
        <Link to="/">
          <AiFillHome size={25} className="w-5 tablet:w-auto" />
        </Link>
      </div>
      <Clock />
      <ul className="flex items-center w-1/3 justify-end">
        <ThemeToggle />
        {[
          ['/diary', 'Diary'],
          ['/calendar', 'Calendar'],
        ].map(([path, title]) => (
          <li
            key={title}
            className={`p-1 tablet:mx-1 hover:opacity-70 ${
              location.pathname.includes(path) &&
              'text-blue-400 dark:text-white dark:opacity-80'
            }`}
          >
            <Link to={path}>{title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Header;
