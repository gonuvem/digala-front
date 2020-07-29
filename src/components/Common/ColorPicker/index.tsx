import React, { useState, useCallback, useEffect } from 'react';
import { useField } from '@unform/core';

import { Container, CardColor } from './styles';

interface Color {
  name: string;
  value: string;
}

interface ColorPickerProps {
  colors: string[];
  name: string;
  onChange: Function;
}

const ColorPicker: React.FC<ColorPickerProps> = ({
  colors,
  name,
  onChange,
}) => {
  const [selectedColor, setSelectedColor] = useState<String>('#ffffff');

  const { fieldName, registerField, defaultValue } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      path: undefined,
      getValue: () => {
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
          isSelected={color === selectedColor}
          onClick={() => handleSelectColor(color)}
          color={color}
        />
      ))}
    </Container>
  );
};

export default ColorPicker;
