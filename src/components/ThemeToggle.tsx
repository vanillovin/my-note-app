import React, { useContext } from 'react';
import { BsSunFill, BsMoonFill } from 'react-icons/bs';
import { ThemeContext } from '../contexts/ThemeContext';

const Toggle = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <div className="transition duration-500 ease-in-out rounded-full p-2">
      {theme === 'dark' ? (
        <BsSunFill
          onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          className="text-rose-500 tablet:text-xl cursor-pointer mt-1"
        />
      ) : (
        <BsMoonFill
          onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
          className="text-amber-500 tablet:text-xl cursor-pointer"
        />
      )}
    </div>
  );
};

export default Toggle;
