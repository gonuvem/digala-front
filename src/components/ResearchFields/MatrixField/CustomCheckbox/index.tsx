import React from 'react';

import { Container } from './styles';

interface CustomCheckboxProps {
  id: string;
  fieldName: string;
  type: string;
}

const CustomCheckbox: React.FC<CustomCheckboxProps> = ({
  id,
  fieldName,
  type,
}) => (
  <Container htmlFor={id}>
    <input id={id} type={type} name={fieldName} />
    <span />
  </Container>
);

export default CustomCheckbox;
