import React, { InputHTMLAttributes, useEffect, useRef } from 'react';
import { useField } from '@unform/core';

import { Container, Slider } from './styles';

interface SliderFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  name: string;
  description?: string;
  minValue: number;
  maxValue: number;
  leftSubtitle?: string;
  rightSubtitle?: string;
}

const SliderField: React.FC<SliderFieldProps> = ({
  label,
  name,
  description,
  minValue,
  maxValue,
  leftSubtitle,
  rightSubtitle,
}) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const { fieldName, registerField, error, defaultValue } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      getValue: () => {
        return inputRef.current?.value;
      },
    });
  }, [fieldName, registerField]);

  return (
    <Container>
      <label htmlFor={name}>
        {label && <span>{label}</span>}
        {description && <p>{description}</p>}
      </label>
      <div>
        {(leftSubtitle || rightSubtitle) && (
          <div>
            <p>{leftSubtitle}</p>
            <p>{rightSubtitle}</p>
          </div>
        )}
        <Slider
          ref={inputRef}
          id={name}
          type="range"
          min={minValue}
          max={maxValue}
          data-tip
          data-for="rangeSlider"
        />
        <div>
          <p>{minValue}</p>
          <p>{maxValue}</p>
        </div>
      </div>
    </Container>
  );
};

export default SliderField;
