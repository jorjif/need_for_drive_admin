/**
 *
 * @param {*} dateFrom начальная дата
 * @param {*} dateTo конечная дата
 * @returns разницу между датами в днях-часах
 */
function dateDifference(dateFrom, dateTo) {
  const difference = dateTo - dateFrom;
  const msInHour = 3600000;
  const hours = Math.floor(difference / msInHour);
  const days = Math.floor(hours / 24);
  const hoursWithDays = Math.floor(hours % 24);
  return `${days}д\u00A0${hoursWithDays}ч`;
}

export default dateDifference;
