import React, { useState } from 'react';

import { Container, Title, NumberBar, Number } from './styles';

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const NpsField: React.FC = () => {
  const [selectedNumber, setSelectedNumber] = useState(-1);
  return (
    <Container>
      <Title>NPS</Title>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua
      </p>
      <div>
        <div>
          <p>Pouco provavel</p>
          <p>Muito provavel</p>
        </div>
        <NumberBar>
          {numbers.map((value, index) => (
            <Number
              isSelected={index === selectedNumber}
              onClick={() => setSelectedNumber(index)}
            >
              <h2>{value}</h2>
            </Number>
          ))}
        </NumberBar>
      </div>
    </Container>
  );
};

export default NpsField;
