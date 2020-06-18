import React, { useState, useCallback, useEffect } from 'react';
import { useField } from '@unform/core';

import { Container, CardColor } from './styles';

interface Color {
  name: string;
  value: string;
}

interface ColorPickerProps {
  colors: Color[];
  name: string;
}

const ColorPicker: React.FC<ColorPickerProps> = ({ colors, name }) => {
  const [selectedColor, setSelectedColor] = useState<Color>({
    name: 'white',
    value: '#ffffff',
  });

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

  const handleSelectColor = useCallback((color: Color) => {
    setSelectedColor(color);
  }, []);

  return (
    <Container>
      {colors.map((color) => (
        <CardColor
          isSelected={color.value === selectedColor.value}
          onClick={() => handleSelectColor(color)}
          color={color.value}
        />
      ))}
    </Container>
  );
};

export default ColorPicker;
