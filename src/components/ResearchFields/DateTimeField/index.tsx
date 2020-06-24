import React from 'react';
import InputMask from 'react-input-mask';

import { Container } from './styles';

const DateTimeField: React.FC = () => (
  <Container>
    <label htmlFor="">
      Data e Hora
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua
      </p>
    </label>
    <div>
      <InputMask mask="99/99/9999" type="text" placeholder="DD/MM/YYYY" />
      <span>:</span>
      <InputMask mask="99:99:99" type="text" placeholder="Hh:Mm:Ss" />
    </div>
  </Container>
);

export default DateTimeField;
