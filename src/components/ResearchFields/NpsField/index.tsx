import React, { useState, useEffect } from 'react';

import { Container, Title, NumberBar, Number } from './styles';

interface NpsProps {
  name: string;
  description: string;
  startNumber: number;
  endNumber: number;
  showSubtitles: boolean;
  leftSubtitle?: string;
  rightSubtitle?: string;
}

const NpsField: React.FC<NpsProps> = ({
  name,
  description,
  startNumber,
  endNumber,
  showSubtitles,
  leftSubtitle,
  rightSubtitle,
}) => {
  const [selectedNumber, setSelectedNumber] = useState(-1);
  const [arrayNumbers, setArrayNumbers] = useState<Array<number>>([]);

  useEffect(() => {
    const numbers = [];

    for (var i = startNumber; i <= endNumber; i++) {
      numbers.push(i);
    }
    setArrayNumbers(numbers);
  }, [endNumber, startNumber]);

  return (
    <Container>
      <Title>{name}</Title>
      <p>{description}</p>
      <div>
        {showSubtitles && (
          <div>
            <p>{leftSubtitle}</p>
            <p>{rightSubtitle}</p>
          </div>
        )}
        <NumberBar>
          {arrayNumbers.map((value, index) => (
            <Number
              key={index}
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
