import React from 'react';

import { Container } from './styles';

interface OptionProps {
  id: string;
  fieldName: string;
  label?: string;
  type?: 'radio' | 'checkbox';
}

const Option: React.FC<OptionProps> = ({
  id,
  fieldName,
  label,
  type = 'radio',
}) => (
  <Container htmlFor={id}>
    <input id={id} type={type} name={fieldName} />
    <span />
    {label}
  </Container>
);

export default Option;
