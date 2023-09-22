import useWeather from '../../hooks/useWeather';

function Weather() {
  const [weatherData] = useWeather();

  return (
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
  );
}

export default Weather;
