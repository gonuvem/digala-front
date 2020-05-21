import React from 'react';

import { Container } from './styles';

const ShortTextField: React.FC = () => (
  <Container>
    <label htmlFor="shortTextField">
      Texto Curto
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua
      </p>
      <input type="text" id="shortTextField" />
    </label>
  </Container>
);

export default ShortTextField;
