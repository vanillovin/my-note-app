import { useEffect, useState } from 'react';

function Clock() {
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
    <div className="hidden tablet:flex w-1/3 text-center items-center justify-center">
      <p className="font-bold rounded-3xl border-2 border-white py-1 px-2 text:base tablet:text-xl">
        {clock}
      </p>
    </div>
  );
}

export default Clock;
