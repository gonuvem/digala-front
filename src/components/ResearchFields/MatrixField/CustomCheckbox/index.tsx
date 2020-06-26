import React from 'react';

import { Container } from './styles';

interface CustomCheckboxProps {
  id: string;
  fieldName: string;
}

const CustomCheckbox: React.FC<CustomCheckboxProps> = ({ id, fieldName }) => (
  <Container htmlFor={id}>
    <input id={id} type="checkbox" name={fieldName} />
    <span />
  </Container>
);

export default CustomCheckbox;
