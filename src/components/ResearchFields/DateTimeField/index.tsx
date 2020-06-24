import React, { useState, useMemo } from 'react';
import { startOfHour, addHours, getHours } from 'date-fns';
import InputMask from 'react-input-mask';
import { useTransition, animated } from 'react-spring';

import Calendar from '../Calendar';

import { Container, InputContainer, CalendarContainer } from './styles';

const DateTimeField: React.FC = () => {
  const [showTimeSelector, setShowTimeSelect] = useState(false);
  const [showCalendar, setShowCalendar] = useState(false);

  const timeSelectorTransitions = useTransition(showTimeSelector, null, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
  });

  const calendarTransitions = useTransition(showCalendar, null, {
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

  return (
    <Container>
      <label htmlFor="">
        Data e Hora
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua
        </p>
      </label>
      <div id="inputs">
        <InputContainer>
          <InputMask
            onClick={() => setShowCalendar((state) => !state)}
            mask="99/99/9999"
            type="text"
            placeholder="DD/MM/YYYY"
          />
          {calendarTransitions.map(
            ({ item, key, props }) =>
              item && (
                <CalendarContainer key={key} style={props}>
                  <Calendar
                    name="timeSelect"
                    selectRange
                    view="month"
                    next2Label={null}
                    prev2Label={null}
                  />
                </CalendarContainer>
              ),
          )}
        </InputContainer>
        <span>:</span>
        <InputContainer>
          <InputMask
            onClick={() => setShowTimeSelect((state) => !state)}
            mask="99:99:99"
            type="text"
            placeholder="Hh:Mm:Ss"
          />
          {timeSelectorTransitions.map(
            ({ item, key, props }) =>
              item && (
                <animated.div id="time-selector" key={key} style={props}>
                  {hours.map((hour) => (
                    <button type="button">{`${getHours(hour)}:00`}</button>
                  ))}
                </animated.div>
              ),
          )}
        </InputContainer>
      </div>
    </Container>
  );
};

export default DateTimeField;
