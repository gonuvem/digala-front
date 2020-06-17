import React, { InputHTMLAttributes, useState, useCallback } from 'react';

import { Container, Slider } from './styles';

interface SliderFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  description?: string;
}

const SliderField: React.FC<SliderFieldProps> = ({ label, description }) => {
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
        <Slider
          type="range"
          min={0}
          max={50}
          value={valueRange}
          onChange={handleChangeSlider}
        />
        <div>
          <p>0</p>
          <p>100</p>
        </div>
      </div>
    </Container>
  );
};

export default SliderField;
