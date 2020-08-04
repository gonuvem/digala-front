import React from 'react';

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
  return (
    <Container selectRange={selectRange}>
      <label htmlFor="">
        <span>{label}</span>
        <p>{description}</p>
      </label>
      <div id="inputs">
        {selectRange && <span>De</span>}
        <DateInput dateFormat={dateFormat} />
        <span>{selectRange ? 'Até' : ':'}</span>
        {selectRange ? (
          <DateInput dateFormat={dateFormat} />
        ) : (
          <TimeInput timeFormat={timeFormat} />
        )}
      </div>
    </Container>
  );
};

export default DateTimeField;
