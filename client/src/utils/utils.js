const convertTimestampToDate = (timestamp) => {
  const date = new Date(timestamp);
  return date.toDateString();
};
const convertTimestampToTime = (timestamp) => {
  const date = new Date(timestamp);
  return date.toLocaleTimeString();
};

const convertDaysToWeeks = (days) => {
  return (days / 7).toFixed(1);
};

module.exports = {
  convertTimestampToTime,
  convertTimestampToDate,
  convertDaysToWeeks,
};
