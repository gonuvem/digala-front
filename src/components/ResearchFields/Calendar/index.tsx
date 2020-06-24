/* eslint-disable import/no-duplicates */
import React, { useState, useCallback, useEffect, useRef } from 'react';
import { CalendarProps } from 'react-calendar';
import { useField } from '@unform/core';
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';

import { Container, CustomCalendar } from './styles';

interface CustomCalendarProps extends CalendarProps {
  readOnly?: boolean;
  label?: string;
  name: string;
}

const Calendar: React.FC<CustomCalendarProps> = ({ name, label, ...rest }) => {
  const calendarRef = useRef(null);
  const [value, setValue] = useState<Date | Date[]>(new Date());

  const { fieldName, registerField } = useField(name);

  const onChange = useCallback(
    (nextValue: Date | Date[]) => setValue(nextValue),
    [],
  );

  const formatShortWeekday = useCallback((locale: string, date: Date) => {
    const dateFormated = format(date, 'eee', { locale: ptBR });

    return dateFormated.slice(0, 1);
  }, []);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: calendarRef.current,
      path: undefined,
      getValue: () => {
        return value;
      },
      clearValue: (ref: any) => {
        ref.clear();
      },
    });
  }, [fieldName, registerField, value]);

  return (
    <Container>
      <CustomCalendar
        value={value}
        onChange={onChange}
        formatShortWeekday={formatShortWeekday}
        {...rest}
      />
    </Container>
  );
};

export default Calendar;
