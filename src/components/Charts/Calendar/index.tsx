import React, { useMemo } from 'react';
import { parseISO, format } from 'date-fns';
import {
  ResponsiveCalendar,
  CalendarDatum,
  CalendarDayData,
} from '@nivo/calendar';

interface CalendarProps {
  data: CalendarDatum[];
}

function monthsLegends(
  year: number,
  month: number,
  date: Date,
): React.ReactText {
  switch (month) {
    case 0:
      return 'Jan';
    case 1:
      return 'Fev';
    case 2:
      return 'Mar';
    case 3:
      return 'Abr';
    case 4:
      return 'Mai';
    case 5:
      return 'Jun';
    case 6:
      return 'Jul';
    case 7:
      return 'Ago';
    case 8:
      return 'Set';
    case 9:
      return 'Out';
    case 10:
      return 'Nov';
    case 11:
      return 'Dez';
    default:
      return 'Mes';
  }
}

const CustomTooltip: React.StatelessComponent<CalendarDayData> = ({ date }) => {
  return <span>{format(date, 'dd-MM-yyyy')}</span>;
};

const Calendar: React.FC<CalendarProps> = ({ data }) => {
  const initialData = useMemo(() => {
    return format(parseISO(data[0].day), 'yyyy-MM-dd');
  }, [data]);

  const endDate = useMemo(() => {
    const { length } = data;
    return format(parseISO(data[length - 1].day), 'yyyy-MM-dd');
  }, [data]);

  const calendarData = useMemo(() => {
    if (data) {
      return data.map((dayData) => {
        return {
          value: dayData.value,
          day: format(parseISO(dayData.day), 'yyyy-MM-dd'),
        };
      });
    }
    return [];
  }, [data]);

  return (
    <ResponsiveCalendar
      data={calendarData}
      from={initialData}
      to={endDate}
      emptyColor="#eeeeee"
      colors={['#61cdbb', '#97e3d5', '#e8c1a0', '#f47560']}
      margin={{ top: 40, right: 40, bottom: 40, left: 40 }}
      yearSpacing={40}
      monthBorderColor="#ffffff"
      dayBorderWidth={2}
      dayBorderColor="#ffffff"
      monthLegend={monthsLegends}
      tooltip={CustomTooltip}
      legends={[
        {
          anchor: 'bottom-right',
          direction: 'row',
          translateY: 36,
          itemCount: 4,
          itemWidth: 42,
          itemHeight: 36,
          itemsSpacing: 14,
          itemDirection: 'right-to-left',
        },
      ]}
    />
  );
};

export default Calendar;
