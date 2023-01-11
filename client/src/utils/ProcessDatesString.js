function ProcessDatesString(arg) {
  const nameOfDay = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  const date = new Date(arg);
  const dayNum = date.getDate();
  const dayName = nameOfDay[date.getDay()];

  return [dayNum, dayName];
}

export default ProcessDatesString;
