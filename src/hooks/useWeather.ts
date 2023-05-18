import { useEffect, useState } from 'react';
import { getLocation } from './getLocation';

export type Weather = {
  base: string;
  clouds: { all: number };
  cod: number;
  coord: { lon: number; lat: number };
  dt: number;
  id: number;
  main: {
    feels_like: number;
    grnd_level: number;
    humidity: number;
    pressure: number;
    sea_level: number;
    temp: number;
    temp_max: number;
    temp_min: number;
  };
  rain: { '1h': number };
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
  wind: { deg: number; gust: number; speed: number };
};

const API_KEY = process.env.REACT_APP_OPENWEATHER_API_KEY as string;

function getApiUrl(latitude: number, longitude: number, apiKey: string) {
  return `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
}

export default function useWeather() {
  const [weatherData, setWeatherData] = useState<Weather>();

  useEffect(() => {
    getLocation()
      .then((res): any => {
        const { latitude, longitude } = res;
        const API_URL = getApiUrl(latitude, longitude, API_KEY);

        fetch(API_URL)
          .then((res) => res.json())
          .then((data) => {
            // console.log('data', data);
            setWeatherData(data);
          })
          .catch((err) => {
            // 에러처리
            console.log('err', err);
          });
      })
      .catch((err) => {
        // 에러처리
        console.log('err', err);
      });
  }, []);

  return [weatherData];
}
