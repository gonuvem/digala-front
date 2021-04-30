import React, { useState, useCallback, useRef } from 'react';
import { format } from 'date-fns';
import InputMask from 'react-input-mask';
import { useTransition } from 'react-spring';

import Calendar from '../Calendar';

import { dateFormats } from '../../../utils/dateTimeFormats';
import useOutsider from '../../../hooks/useOutsider';

import { InputContainer, CalendarContainer } from './styles';

interface DateInputProps {
  dateFormat: 'monthYear' | 'dayMonthYear' | 'dayMonth';
  childrenCalendarRef: any;
  disabled?: boolean;
}

const DateInput: React.FC<DateInputProps> = ({
  dateFormat,
  childrenCalendarRef,
  disabled,
}) => {
  const calendarRef = useRef(null);
  const [dateValue, setDateValue] = useState('');
  const [showCalendar, setShowCalendar] = useState(false);

  useOutsider(calendarRef, () => setShowCalendar(false));

  const calendarTransitions = useTransition(showCalendar, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
  });

  const handleCalendarChange = useCallback(
    (nextDate: Date) => {
      const dateFormated = format(nextDate, dateFormats[dateFormat].fnsMask);
      setDateValue(dateFormated);
      setShowCalendar(false);
    },
    [dateFormat],
  );

  const handleChangeDate = useCallback((event) => {
    const { value } = event.target;
    setDateValue(value);
  }, []);

  return (
    <InputContainer>
      <InputMask
        ref={childrenCalendarRef}
        onClick={() => setShowCalendar((state) => !state)}
        onChange={handleChangeDate}
        mask={dateFormats[dateFormat].mask}
        value={dateValue}
        type="text"
        placeholder={dateFormats[dateFormat].placeholder}
        disabled={disabled}
      />
      {calendarTransitions((props, item) => {
        return (
          item && (
            <CalendarContainer ref={calendarRef} style={props}>
              <Calendar
                name="dateSelect"
                onParentChange={handleCalendarChange}
                view={dateFormats[dateFormat].calendarView}
                next2Label={null}
                prev2Label={null}
              />
            </CalendarContainer>
          )
        );
      })}
    </InputContainer>
  );
};

export default DateInput;
