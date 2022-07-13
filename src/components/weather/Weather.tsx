import React, { useEffect, useState } from 'react';
import { getLocation } from '../../hooks/getLocation';
import TodoProgress from '../todo/TodoProgress';

type WeatherData = {
  base: string;
  clouds: object;
  cod: number;
  coord: object;
  dt: number;
  id: number;
  main: {
    feels_like: number;
    humidity: number;
    pressure: number;
    temp: number;
    temp_max: number;
    temp_min: number;
  };
  name: string;
  sys: {
    country: string;
    id: number;
    sunrise: number;
    sunset: number;
    type: number;
  };
  timezone: number;
  visibility: number;
  weather: [{ id: number; main: string; description: string; icon: string }];
  wind: object;
};

const API_KEY = process.env.REACT_APP_OPENWEATHER_API_KEY;

function Weather() {
  const [weatherData, setWeatherData] = useState<WeatherData>();

  useEffect(() => {
    getLocation()
      .then((res): any => {
        const url = `https://api.openweathermap.org/data/2.5/weather?lat=${res.latitude}&lon=${res.longitude}&appid=${API_KEY}&units=metric`;
        fetch(url)
          .then((res) => res.json())
          .then((data) => setWeatherData(data));
      })
      .catch((err) => alert(err));
  }, []);

  return (
    <div
      className="mt-8 bg-white m-2 rounded-sm flex p-2 dark:bg-amber-400
                dark:bg-opacity-40 dark:text-white select-none shadow-lg"
    >
      <TodoProgress />
      <div className="flex items-center w-1/2 py-2 px-1 tablet:px-4 justify-center">
        <div>
          <p className="text-sm tablet:text-lg font-bold">
            {weatherData?.name !== '' && `${weatherData?.name},`}{' '}
            {weatherData?.sys.country}
          </p>
          <p className="text-sm tablet:text-lg font-bold">{`${weatherData?.main?.temp.toFixed()}℃`}</p>
          <p className="text-xs tablet:text-sm opacity-60">
            {weatherData?.weather[0].description}
          </p>
        </div>
        <img
          className="w-16 tablet:w-32 tablet:ml-3"
          alt={weatherData?.weather[0].main}
          src={`http://openweathermap.org/img/wn/${weatherData?.weather[0].icon}@4x.png`}
        />
      </div>
    </div>
  );
}

export default Weather;
