import React, { useMemo } from 'react';
import { ResponsiveCalendar, CalendarDatum } from '@nivo/calendar';

interface CalendarProps {
  data: CalendarDatum[];
}

const Calendar: React.FC<CalendarProps> = ({ data }) => {
  const initialData = useMemo(() => {
    return data[0].day;
  }, [data]);

  const endDate = useMemo(() => {
    const { length } = data;
    return data[length - 1].day;
  }, [data]);

  return (
    <ResponsiveCalendar
      data={data}
      from={initialData}
      to={endDate}
      emptyColor="#eeeeee"
      colors={['#61cdbb', '#97e3d5', '#e8c1a0', '#f47560']}
      margin={{ top: 40, right: 40, bottom: 40, left: 40 }}
      yearSpacing={40}
      monthBorderColor="#ffffff"
      dayBorderWidth={2}
      dayBorderColor="#ffffff"
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
