import React, { InputHTMLAttributes, useState, useCallback } from 'react';

import { Container, Slider, Tooltip } from './styles';

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
    setValueRange(parseInt(e.target.value, 10));
  }, []);

  return (
    <Container>
      <label htmlFor="">
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
          type="range"
          min={minValue}
          max={maxValue}
          value={valueRange}
          onChange={handleChangeSlider}
          data-tip
          data-for="rangeSlider"
        />
        {/* <Tooltip id="rangeSlider" effect="solid" place="top" type="dark">
          <p>{valueRange}</p>
        </Tooltip> */}
        <div>
          <p>{minValue}</p>
          <p>{maxValue}</p>
        </div>
      </div>
    </Container>
  );
};

export default SliderField;
