import React, { useEffect, useRef } from 'react';
import { useField } from '@unform/core';

import DateInput from './DateInput';
import TimeInput from './TimeInput';

import { Container } from './styles';

interface DateTimeFieldProps {
  label: string;
  description?: string;
  name: string;
  selectRange?: boolean;
  dateFormat: 'monthYear' | 'dayMonthYear' | 'dayMonth';
  timeFormat: 'hourMinute' | 'hourMinuteSecond';
}

const DateTimeField: React.FC<DateTimeFieldProps> = ({
  name,
  label,
  description,
  selectRange,
  dateFormat,
  timeFormat,
}) => {
  const childrenCalendarRef = useRef<HTMLInputElement>(null);
  const endDateCalendarRef = useRef<HTMLInputElement>(null);
  const childrenTimeInputRef = useRef<HTMLInputElement>(null);

  const { fieldName, registerField, error, defaultValue } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: undefined,
      getValue: (ref: any) => {
        if (!selectRange) {
          return {
            date: childrenCalendarRef.current?.value,
            time: childrenTimeInputRef.current?.value,
          };
        }
        return {
          beginDate: childrenCalendarRef.current?.value,
          endDate: endDateCalendarRef.current?.value,
        };
      },
    });
  }, [fieldName, registerField, selectRange]);

  return (
    <Container selectRange={selectRange}>
      <label htmlFor="">
        <span>{label}</span>
        <p>{description}</p>
      </label>
      <div id="inputs">
        {selectRange && <span>De</span>}
        <DateInput
          childrenCalendarRef={childrenCalendarRef}
          dateFormat={dateFormat}
        />
        <span>{selectRange ? 'Até' : ':'}</span>
        {selectRange ? (
          <DateInput
            childrenCalendarRef={endDateCalendarRef}
            dateFormat={dateFormat}
          />
        ) : (
          <TimeInput
            childrenTimeInputRef={childrenTimeInputRef}
            timeFormat={timeFormat}
          />
        )}
      </div>
    </Container>
  );
};

export default DateTimeField;
