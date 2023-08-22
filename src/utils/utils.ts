// object, array ? object로 바꾸기. 상수같은 경우 대문자로
export const COLORS = {
  categories: [
    // COLORS
    'rgba(243, 129, 129, 1)',
    'rgba(255, 222, 222, 1)',
    'rgba(242, 163, 121, 1)',
    'rgba(252, 227, 138, 1)',
    'rgba(54, 174, 124, 1)',
    'rgba(84, 186, 185, 1)',
    'rgba(0, 110, 127, 1)',
    'rgba(20, 63, 107, 1)',
    'rgba(136, 121, 176, 1)',
    'rgba(238, 238, 238, 1)',
  ],
};

export const days = ['일', '월', '화', '수', '목', '금', '토'];

export function getCurrentDate() {
  const date = new Date();
  const curDate = date.getDate();
  const curDay = date.getDay();
  const curYear = date.getFullYear();
  const curMonth = date.getMonth() + 1;
  return { curDate, curDay, curMonth, curYear };
}

export const getDateString = (type: 'localeDate' | 'locale', time: number) => {
  const updateDate = new Date(time);
  const localeString = updateDate.toLocaleString();
  const localeDateString = updateDate.toLocaleDateString();
  return type === 'localeDate'
    ? localeDateString.substring(0, localeDateString.length - 1)
    : localeString;
};
