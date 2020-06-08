import React, { useState, useCallback } from 'react';
import { CalendarProps } from 'react-calendar';
// eslint-disable-next-line import/no-duplicates
import { format } from 'date-fns';
// eslint-disable-next-line import/no-duplicates
import { ptBR } from 'date-fns/locale';

import { Container, CustomCalendar } from './styles';

const Calendar: React.FC<CalendarProps> = ({ ...rest }) => {
  const [value, setValue] = useState<Date | Date[]>(new Date());

  const onChange = useCallback(
    (nextValue: Date | Date[]) => setValue(nextValue),
    [],
  );

  const formatShortWeekday = useCallback((locale: string, date: Date) => {
    const dateFormated = format(date, 'eee', { locale: ptBR });

    return dateFormated.slice(0, 1);
  }, []);

  return (
    <CustomCalendar
      value={value}
      onChange={onChange}
      formatShortWeekday={formatShortWeekday}
      {...rest}
    />
  );
};

export default Calendar;
