import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const location = useLocation();
  return (
    <div
      className={`lg:text-lg md:text-base w-full h-20 flex flex-row items-center justify-between 
                  px-5 tablet:px-10 bg-blue-100`}
    >
      <div>
        <Link to="/">Logo</Link>
      </div>
      <ul className="flex items-center">
        {[
          ['/diary', 'Diary'],
          ['/calender', 'Calender'],
        ].map(([path, title]) => (
          <li
            key={title}
            className={`ml-6 hover:opacity-70 ${
              location.pathname === path && 'font-bold text-blue-400'
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
