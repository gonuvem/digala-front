import React from 'react';

import { Container } from './styles';

interface OptionProps {
  id: string;
  fieldName: string;
  label?: string;
}

const Option: React.FC<OptionProps> = ({ id, fieldName, label }) => (
  <Container htmlFor={id}>
    <input id={id} type="radio" name={fieldName} />
    <span />
    {label}
  </Container>
);

export default Option;
