import useWeather from '../hooks/useWeather';
import TodoProgress from './todo/TodoProgress';

function Weather() {
  const [weatherData] = useWeather();

  return (
    <div
      className="mt-8 bg-white m-2 rounded-sm flex p-2 dark:bg-amber-400
        dark:bg-opacity-40 dark:text-white select-none shadow-lg"
    >
      <TodoProgress />
      <div className="flex items-center w-1/2 py-2 px-1 tablet:px-4 justify-center">
        {weatherData ? (
          <>
            <div>
              <p className="text-sm tablet:text-lg font-bold">
                {weatherData.name !== '' &&
                  `${weatherData.name}, ${weatherData.sys.country}`}
              </p>
              <p className="text-sm tablet:text-lg font-bold">{`${weatherData.main.temp.toFixed()}℃`}</p>
              <p className="text-xs tablet:text-sm opacity-60">
                {weatherData.weather[0].description}
              </p>
            </div>
            <img
              className="w-16 tablet:w-32 tablet:ml-3"
              alt={weatherData.weather[0].main}
              src={`http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@4x.png`}
            />
          </>
        ) : (
          <div>날씨 정보를 불러오고 있습니다 🍀</div>
        )}
      </div>
    </div>
  );
}

export default Weather;
