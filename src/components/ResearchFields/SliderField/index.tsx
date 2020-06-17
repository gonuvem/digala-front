import React, { InputHTMLAttributes, useState, useCallback } from 'react';

import { Container, Slider } from './styles';

interface SliderFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  description?: string;
  minValue: number;
  maxValue: number;
  leftSubtitle?: string;
  rightSubtitle?: string;
}

const SliderField: React.FC<SliderFieldProps> = ({
  label,
  description,
  minValue,
  maxValue,
  leftSubtitle,
  rightSubtitle,
}) => {
  const [valueRange, setValueRange] = useState(0);

  const handleChangeSlider = useCallback((e) => {
    setValueRange(parseInt(e.target.value));
  }, []);

  return (
    <Container>
      <label>
        {label && label}
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
          type="range"
          min={0}
          max={50}
          value={valueRange}
          onChange={handleChangeSlider}
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
