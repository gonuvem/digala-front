import React from 'react';

import { Container, Title, NumberBar, Number } from './styles';

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const NpsField: React.FC = () => {
  return (
    <Container>
      <Title>NPS</Title>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua
      </p>
      <div>
        <p>Pouco provavel</p>
        <p>Muito provavel</p>
      </div>
      <NumberBar>
        {numbers.map((value) => (
          <Number>
            <h2>{value}</h2>
          </Number>
        ))}
      </NumberBar>
    </Container>
  );
};

export default NpsField;
