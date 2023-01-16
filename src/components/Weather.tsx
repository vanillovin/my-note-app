import { useEffect, useState } from 'react';
import { getLocation } from '../apis/getLocation';
import { getWeatherData, WeatherData } from '../apis/weather';
import Loading from './Loading';

const ERROR_LOCATION = 'ERROR_LOCATION';
const ERROR_API = 'ERROR_API';
type ERROR_TYPE = typeof ERROR_LOCATION | typeof ERROR_API;

interface WeatherDataState {
  loading: boolean;
  data: WeatherData | null;
  error: ERROR_TYPE | null;
  isRefetch: boolean;
}

function Weather() {
  const [weatherData, setWeatherData] = useState<WeatherDataState>({
    loading: true,
    data: null,
    error: null,
    isRefetch: true,
  });
  const { loading, data, error, isRefetch } = weatherData;

  const handleRefetch = () => {
    setWeatherData((prev) => ({
      ...prev,
      loading: true,
      isRefetch: true,
    }));
  };

  useEffect(() => {
    if (!isRefetch) return;
    getLocation()
      .then(({ err, latitude, longitude }): any => {
        if (err === -1) throw Error();
        getWeatherData(latitude, longitude)
          .then((data) => {
            setWeatherData((prev) => ({
              ...prev,
              loading: false,
              data,
              isRefetch: false,
            }));
          })
          .catch(() => {
            setWeatherData((prev) => ({
              ...prev,
              loading: false,
              error: ERROR_API,
              isRefetch: false,
            }));
          });
      })
      .catch(() => {
        setWeatherData((prev) => ({
          ...prev,
          loading: false,
          error: ERROR_LOCATION,
          isRefetch: false,
        }));
      });
  }, [isRefetch]);

  if (error) {
    return error === ERROR_API ? (
      <div className="flex flex-col items-start justify-center w-1/2 py-2 px-1 tablet:px-4">
        날씨 정보를 불러오지 못했습니다 😥
        <button className="px-1 bg-blue-300 rounded-sm" onClick={handleRefetch}>
          {isRefetch ? '불러우는 중..' : '다시 불러오기'}
        </button>
      </div>
    ) : (
      <div className="flex flex-col items-start justify-center w-1/2 py-2 px-1 tablet:px-4">
        날씨 정보를 확인하려면 위치 액세스 허용 후 새로고침 해주세요!
      </div>
    );
  }

  return (
    <div className="flex items-center w-1/2 py-2 px-1 tablet:px-4 justify-center">
      {!loading ? (
        <>
          <div>
            <p className="text-sm tablet:text-lg font-bold">
              {data?.name !== '' && `${data?.name},`} {data?.sys.country}
            </p>
            <p className="text-sm tablet:text-lg font-bold">{`${data?.main?.temp.toFixed()}℃`}</p>
            <p className="text-xs tablet:text-sm opacity-60">
              {data?.weather[0].description}
            </p>
          </div>
          <img
            className="w-16 tablet:w-32 tablet:ml-3"
            alt={data?.weather[0].main}
            src={`http://openweathermap.org/img/wn/${data?.weather[0].icon}@4x.png`}
          />
        </>
      ) : (
        <Loading />
      )}
    </div>
  );
}

export default Weather;
