function setDateTime(date) {
  if (typeof date === 'number') {
    date = new Date(date);
  }
  if (
    Object.prototype.toString.call(date) !== '[object Date]' ||
    isNaN(date.getTime())
  ) {
    throw new Error('Invalid Date in format');
  }
  return `${date.getFullYear()}年${date.getMonth() + 1}月${date.getDate()}日`;
}

function formate(date) {
  if (typeof date === 'number') {
    date = new Date(date);
  }
  if (
    Object.prototype.toString.call(date) !== '[object Date]' ||
    isNaN(date.getTime())
  ) {
    throw new Error('Invalid Date in format');
  }
  const hourEqual0 = date.setHours(0);
  const minutesEqual0 = new Date(hourEqual0).setMinutes(0);
  const result = new Date(minutesEqual0).setSeconds(0);
  return Number(result.toString().slice(0, -3) + '000');
}

module.exports = {
  setDateTime,
  formate
};
