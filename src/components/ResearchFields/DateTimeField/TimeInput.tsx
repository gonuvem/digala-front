import React, { useState, useMemo, useCallback, useRef } from 'react';
import { startOfHour, addHours, getHours, format } from 'date-fns';
import InputMask from 'react-input-mask';
import { useTransition, animated } from 'react-spring';

import { InputContainer } from './styles';

import { timeFormats } from '../../../utils/dateTimeFormats';
import useOutsider from '../../../hooks/useOutsider';

interface TimeInputProps {
  timeFormat: 'hourMinute' | 'hourMinuteSecond';
  childrenTimeInputRef: any;
}

const TimeInput: React.FC<TimeInputProps> = ({
  timeFormat,
  childrenTimeInputRef,
}) => {
  const timeSelectorRef = useRef(null);
  const [timeValue, setTimeValue] = useState('');
  const [showTimeSelector, setShowTimeSelect] = useState(false);

  useOutsider(timeSelectorRef, () => setShowTimeSelect(false));

  const timeSelectorTransitions = useTransition(showTimeSelector, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
  });

  const hours: Date[] = useMemo(() => {
    const now = new Date();
    const nowStartHour = startOfHour(now);

    const generatedHours = [nowStartHour];

    for (let i = 0; i <= 6; i += 1) {
      const nextHour = addHours(nowStartHour, i + 1);
      generatedHours.push(nextHour);
    }

    return generatedHours;
  }, []);

  const handleSetTime = useCallback((newTime) => {
    const timeFormated = format(newTime, timeFormats[timeFormat].fnsMask);
    setTimeValue(timeFormated);
    setShowTimeSelect(false);
  }, []);

  const handleChangeTime = useCallback((event) => {
    const { value } = event.target;
    setTimeValue(value);
  }, []);

  return (
    <InputContainer>
      <InputMask
        ref={childrenTimeInputRef}
        onClick={() => setShowTimeSelect((state) => !state)}
        onChange={handleChangeTime}
        mask={timeFormats[timeFormat].mask}
        value={timeValue}
        type="text"
        placeholder={timeFormats[timeFormat].placeholder}
      />
      {timeSelectorTransitions(
        (props, item) =>
          item && (
            <animated.div
              ref={timeSelectorRef}
              id="time-selector"
              style={props}
            >
              {hours.map((hour) => (
                <button
                  key={`${hour}-button`}
                  onClick={() => handleSetTime(hour)}
                  type="button"
                >
                  {`${getHours(hour)}:00`}
                </button>
              ))}
            </animated.div>
          ),
      )}
    </InputContainer>
  );
};

export default TimeInput;
