import React, { useEffect, useRef } from 'react';
import { useField } from '@unform/core';
import { useTransition } from 'react-spring';
import { parseISO, format } from 'date-fns';

import DateInput from './DateInput';
import TimeInput from './TimeInput';
import ErrorMessage from '../../Common/ErrorMessage';

import { dateFormats, timeFormats } from '../../../utils/dateTimeFormats';

import { Container, SeparatorDot } from './styles';

interface DateTimeFieldProps {
  label: string;
  description?: string;
  isTimeRequired: boolean;
  name: string;
  selectRange?: boolean;
  dateFormat: 'monthYear' | 'dayMonthYear' | 'dayMonth';
  timeFormat: 'hourMinute' | 'hourMinuteSecond';
}

type IValueFromForm =
  | {
      date: string | undefined;
      time: string | undefined;
      beginDate?: undefined;
      endDate?: undefined;
    }
  | {
      beginDate: string | undefined;
      endDate: string | undefined;
      date?: undefined;
      time?: undefined;
    };

const DateTimeField: React.FC<DateTimeFieldProps> = ({
  name,
  label,
  description,
  selectRange,
  dateFormat,
  isTimeRequired,
  timeFormat,
}) => {
  const childrenCalendarRef = useRef<HTMLInputElement>(null);
  const endDateCalendarRef = useRef<HTMLInputElement>(null);
  const childrenTimeInputRef = useRef<HTMLInputElement>(null);

  const { fieldName, registerField, error } = useField(name);
  const transitions = useTransition(!!error, {
    from: { opacity: 0, transform: 'translateX(-50px)' },
    enter: { opacity: 1, transform: 'translateX(0px)' },
    leave: { opacity: 0, transform: 'translateX(-50px)' },
  });

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: undefined,
      getValue: (_) => {
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
      setValue: (ref, value: any) => {
        const parsedDate = parseISO(value[0]);
        const formattedDate = format(
          parsedDate,
          dateFormats[dateFormat].fnsMask,
        );

        if (childrenCalendarRef.current) {
          childrenCalendarRef.current.value = formattedDate;
        }

        if (selectRange && endDateCalendarRef.current) {
          const endDateParsed = parseISO(value[1]);
          const endDateFormatted = format(
            endDateParsed,
            dateFormats[dateFormat].fnsMask,
          );

          endDateCalendarRef.current.value = endDateFormatted;
        }

        if (isTimeRequired) {
          const formattedTime = format(
            parsedDate,
            timeFormats[timeFormat].fnsMask,
          );
        }
      },
    });
  }, [
    dateFormat,
    fieldName,
    isTimeRequired,
    registerField,
    selectRange,
    timeFormat,
  ]);

  return (
    <Container selectRange={selectRange}>
      <label htmlFor={name}>
        <span>{label}</span>
        <p>{description}</p>
      </label>
      <div id={name}>
        {selectRange && <span>De</span>}
        <DateInput
          childrenCalendarRef={childrenCalendarRef}
          dateFormat={dateFormat}
        />
        {selectRange || isTimeRequired ? (
          <SeparatorDot selectRange={selectRange}>
            {selectRange ? 'Até' : ':'}
          </SeparatorDot>
        ) : (
          <></>
        )}
        {selectRange ? (
          <DateInput
            childrenCalendarRef={endDateCalendarRef}
            dateFormat={dateFormat}
          />
        ) : (
          isTimeRequired && (
            <TimeInput
              childrenTimeInputRef={childrenTimeInputRef}
              timeFormat={timeFormat}
            />
          )
        )}
      </div>
      {transitions(
        (props, item) =>
          item && (
            <ErrorMessage
              style={{ alignSelf: 'flex-start', ...props }}
              message={error}
            />
          ),
      )}
    </Container>
  );
};

export default DateTimeField;
