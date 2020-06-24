import React, { useState, useMemo } from 'react';
import { startOfHour, addHours, getHours } from 'date-fns';
import InputMask from 'react-input-mask';
import { useTransition, animated } from 'react-spring';

import { Container, InputContainer } from './styles';

const DateTimeField: React.FC = () => {
  const [showTimeSelector, setShowTimeSelect] = useState(false);

  const transitions = useTransition(showTimeSelector, null, {
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
      <div>
        <InputMask mask="99/99/9999" type="text" placeholder="DD/MM/YYYY" />
        <span>:</span>
        <InputContainer>
          <InputMask
            onClick={() => setShowTimeSelect((state) => !state)}
            mask="99:99:99"
            type="text"
            placeholder="Hh:Mm:Ss"
          />
          {transitions.map(
            ({ item, key, props }) =>
              item && (
                <animated.div key={key} style={props}>
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
