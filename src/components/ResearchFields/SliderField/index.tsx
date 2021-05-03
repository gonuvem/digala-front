import React, { InputHTMLAttributes, useEffect, useRef, useState } from 'react';
import { useField } from '@unform/core';

import { Container, Slider, SliderBubble, SliderWrap } from './styles';

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
  ...rest
}) => {
  const [inputValue, setInputValue] = useState(0);

  const inputRef = useRef<HTMLInputElement>(null);
  const bubbleRef = useRef<HTMLDivElement>(null);

  const { fieldName, registerField, error } = useField(name);

  useEffect(() => {
    const handleBubble = (): void => {
      const range = inputRef.current;
      let newValue = 0;

      if (range) {
        const value = parseInt(range.value, 10);
        const min = parseInt(range.min, 10);
        const max = parseInt(range.max, 10);

        newValue = ((value - min) * 100) / max - min;
        const newPosition = 10 - newValue * 0.2;

        if (bubbleRef.current) {
          bubbleRef.current.style.left = `calc(${newValue}% + (${newPosition}px))`;
          setInputValue(value);
        }
      }
    };
    handleBubble();

    if (inputRef.current) {
      inputRef.current.addEventListener('input', handleBubble);
    }
  }, []);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      getValue: () => {
        return inputRef.current?.value;
      },
      setValue: (ref: any, value: string | undefined) => {
        if (!value) {
          return;
        }

        if (inputRef.current) {
          inputRef.current.value = value;
        }
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
        <SliderWrap>
          <SliderBubble ref={bubbleRef}>
            <span>{inputValue}</span>
          </SliderBubble>
          <Slider
            ref={inputRef}
            id={name}
            type="range"
            min={minValue}
            max={maxValue}
            data-tip
            data-for="rangeSlider"
            {...rest}
          />
        </SliderWrap>
        <div>
          <p>{minValue}</p>
          <p>{maxValue}</p>
        </div>
      </div>
    </Container>
  );
};

export default SliderField;
