const days = ['일', '월', '화', '수', '목', '금', '토'];

function getCurrentDate() {
  const date = new Date();
  const curDate = date.getDate();
  const curDay = date.getDay();
  const curYear = date.getFullYear();
  const curMonth = date.getMonth() + 1;
  return { curDate, curDay, curMonth, curYear };
}

export { days, getCurrentDate };
