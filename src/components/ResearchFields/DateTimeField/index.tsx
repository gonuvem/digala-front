import React, { useState } from 'react';
import InputMask from 'react-input-mask';

import { Container, InputContainer } from './styles';

const DateTimeField: React.FC = () => {
  const [showTimeSelector, setShowTimeSelect] = useState(false);

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
          <InputMask mask="99:99:99" type="text" placeholder="Hh:Mm:Ss" />
          <div>
            <button type="button">06:00</button>
            <button type="button">06:00</button>
            <button type="button">06:00</button>
          </div>
        </InputContainer>
      </div>
    </Container>
  );
};

export default DateTimeField;
