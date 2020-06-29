import React, { useState, useEffect } from 'react';

import { Container, Title, NumberBar, Number } from './styles';

interface NpsProps {
  label: string;
  description: string;
  showSubtitles: boolean;
  leftSubtitle?: string;
  rightSubtitle?: string;
  scale: number;
  startZero?: boolean;
  isRequired?: boolean;
}

const NpsField: React.FC<NpsProps> = ({
  label,
  description,
  showSubtitles,
  leftSubtitle,
  rightSubtitle,
  scale,
  startZero,
  isRequired,
}) => {
  const [selectedNumber, setSelectedNumber] = useState(-1);
  const [arrayNumbers, setArrayNumbers] = useState<Array<number>>([]);

  useEffect(() => {
    const numbers = [];
    var i = startZero ? 0 : 1;

    for (i; i <= scale; i++) {
      numbers.push(i);
    }
    setArrayNumbers(numbers);
  }, [startZero, scale]);

  return (
    <Container>
      <Title>{label}</Title>
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
