import React, { useState, useCallback, useEffect, useRef } from 'react';
import { useField } from '@unform/core';

import { Container, CardColor } from './styles';

interface ColorPickerProps {
  colors: string[];
  name: string;
  onChange: Function;
  defaultVal?: string;
}

const ColorPicker: React.FC<ColorPickerProps> = ({
  colors,
  name,
  onChange,
  defaultVal,
}) => {
  const [selectedColor, setSelectedColor] = useState<String>(() =>
    defaultVal ? defaultVal : '#ffffff',
  );

  const { fieldName, registerField, defaultValue } = useField(name);
  const inputRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    registerField({
      name: fieldName,
      path: undefined,
      getValue: (color) => {
        return selectedColor;
      },
    });
  }, [selectedColor, fieldName, registerField]);

  useEffect(() => {
    setSelectedColor(defaultValue);
  }, [defaultValue]);

  const handleSelectColor = useCallback((color: string) => {
    setSelectedColor(color);

    onChange(color);
  }, []);

  return (
    <Container>
      {colors.map((color) => (
        <CardColor
          ref={inputRef}
          isSelected={color === selectedColor}
          onClick={() => handleSelectColor(color)}
          color={color}
        />
      ))}
    </Container>
  );
};

export default ColorPicker;
