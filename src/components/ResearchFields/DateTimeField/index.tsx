import React from 'react';

import DateInput from './DateInput';
import TimeInput from './TimeInput';

import { Container } from './styles';

interface DateTimeFieldProps {
  selectRange?: boolean;
  dateFormat: 'monthYear' | 'dayMonthYear' | 'dayMonth';
  timeFormat: 'hourMinute' | 'hourMinuteSecond';
}

const DateTimeField: React.FC<DateTimeFieldProps> = ({
  selectRange,
  dateFormat,
  timeFormat,
}) => {
  return (
    <Container selectRange={selectRange}>
      <label htmlFor="">
        Data e Hora
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua
        </p>
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
