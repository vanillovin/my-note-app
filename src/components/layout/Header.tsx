import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const location = useLocation();
  const [clock, setClock] = useState('');

  function getTime() {
    const date = new Date();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    setClock(
      `${hours < 10 ? `0${hours}` : hours}:${
        minutes < 10 ? `0${minutes}` : minutes
      }:${seconds < 10 ? `0${seconds}` : seconds}`
    );
  }

  useEffect(() => {
    const intervalId = setInterval(getTime, 1000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div
      className={`text-xs tablet:text-base w-full h-14 tablet:h-20 flex flex-row items-center justify-between 
                  px-5 tablet:px-10 bg-blue-100 select-none text-gray-600 font-bold`}
    >
      <div className="w-1/3">
        <Link to="/">Logo</Link>
      </div>
      <div className="w-1/3 text-center flex items-center justify-center">
        <p className="font-bold rounded-3xl border-2 border-white py-1 px-2 text:base tablet:text-xl">
          {clock}
        </p>
      </div>
      <ul className="flex items-center w-1/3 justify-end">
        {[
          ['/diary', 'Diary'],
          ['/calender', 'Calender'],
        ].map(([path, title]) => (
          <li
            key={title}
            className={`ml-2 tablet:ml-6 hover:opacity-70 ${
              location.pathname.includes(path) && 'text-blue-400'
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
