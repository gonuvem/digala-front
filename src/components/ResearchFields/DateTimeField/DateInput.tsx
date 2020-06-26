import React, { useState, useCallback } from 'react';
import { format } from 'date-fns';
import InputMask from 'react-input-mask';
import { useTransition } from 'react-spring';

import Calendar from '../Calendar';

import { dateFormats } from '../../../utils/dateTimeFormats';

import { InputContainer, CalendarContainer } from './styles';

interface DateInputProps {
  dateFormat: 'monthYear' | 'dayMonthYear' | 'dayMonth';
}

const DateInput: React.FC<DateInputProps> = ({ dateFormat }) => {
  const [dateValue, setDateValue] = useState('');
  const [showCalendar, setShowCalendar] = useState(false);

  const calendarTransitions = useTransition(showCalendar, null, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
  });

  const handleCalendarChange = useCallback((nextDate: Date) => {
    const dateFormated = format(nextDate, dateFormats[dateFormat].fnsMask);
    setDateValue(dateFormated);
    setShowCalendar(false);
  }, []);

  const handleChangeDate = useCallback((event) => {
    const { value } = event.target;
    setDateValue(value);
  }, []);

  return (
    <InputContainer>
      <InputMask
        onClick={() => setShowCalendar((state) => !state)}
        onChange={handleChangeDate}
        mask={dateFormats[dateFormat].mask}
        value={dateValue}
        type="text"
        placeholder={dateFormats[dateFormat].placeholder}
      />
      {calendarTransitions.map(
        ({ item, key, props }) =>
          item && (
            <CalendarContainer key={key} style={props}>
              <Calendar
                name="dateSelect"
                onParentChange={handleCalendarChange}
                view={dateFormats[dateFormat].calendarView}
                next2Label={null}
                prev2Label={null}
              />
            </CalendarContainer>
          ),
      )}
    </InputContainer>
  );
};

export default DateInput;