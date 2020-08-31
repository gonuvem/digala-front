import React, { useState, useEffect, useRef } from 'react';
import { useField } from '@unform/core';

import { Container, NumberBar, Number } from './styles';

interface NpsProps {
  name: string;
  label: string;
  description: string;
  showSubtitles: boolean;
  leftSubtitle?: string;
  rightSubtitle?: string;
  scale: number;
  startZero?: boolean;
}

const NpsField: React.FC<NpsProps> = ({
  name,
  label,
  description,
  showSubtitles,
  leftSubtitle,
  rightSubtitle,
  scale,
  startZero,
}) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [selectedNumber, setSelectedNumber] = useState(-1);
  const [arrayNumbers, setArrayNumbers] = useState<Array<number>>([]);

  const { fieldName, registerField } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
    });
  }, [registerField, fieldName]);

  useEffect(() => {
    const numbers = [];
    let i = startZero ? 0 : 1;

    for (i; i <= scale; i += 1) {
      numbers.push(i);
    }
    setArrayNumbers(numbers);
  }, [startZero, scale]);

  return (
    <Container>
      <label htmlFor={name}>
        <span>{label}</span>
        <p>{description}</p>
      </label>
      <div id={name}>
        {showSubtitles && (
          <div>
            <p>{leftSubtitle}</p>
            <p>{rightSubtitle}</p>
          </div>
        )}
        <NumberBar>
          {arrayNumbers.map((value, index) => (
            <Number
              type="button"
              key={value}
              isSelected={index === selectedNumber}
              onClick={() => setSelectedNumber(index)}
            >
              <h2>{value}</h2>
            </Number>
          ))}
          <input
            ref={inputRef}
            style={{ display: 'none' }}
            value={selectedNumber}
          />
        </NumberBar>
      </div>
    </Container>
  );
};

export default NpsField;
