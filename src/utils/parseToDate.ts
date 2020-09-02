import { parse, getYear, getDate } from 'date-fns';

interface IFormatDateDTO {
  date: string;
  time: string;
  dateFormat: 'monthYear' | 'dayMonthYear' | 'dayMonth';
  timeFormat: 'hourMinute' | 'hourMinuteSecond';
}

export default function parseToDate({
  date,
  time,
  dateFormat,
  timeFormat,
}: IFormatDateDTO): Date {
  let dateFormatted = date;
  let timeFormatted = time;

  const today = new Date();

  if (dateFormat === 'dayMonth') {
    const currentYear = getYear(today);
    dateFormatted += `/${currentYear}`;
  }

  if (dateFormat === 'monthYear') {
    const currentDay = getDate(today);
    dateFormatted = `${currentDay}/${date}`;
  }

  if (timeFormat === 'hourMinute') {
    timeFormatted += ':00';
  }

  return parse(
    `${dateFormatted}T${timeFormatted}`,
    "dd/MM/yyyy'T'HH:mm:ss",
    new Date(),
  );
}
