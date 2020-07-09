import React from 'react';

import { Container } from './styles';

interface OptionProps {
  id: string;
  fieldName: string;
  label?: string;
  type?: 'radio' | 'checkbox';
  checked?: boolean;
  onChange?: Function;
}

const Option: React.FC<OptionProps> = ({
  id,
  fieldName,
  label,
  type = 'radio',
  checked,
  onChange,
}) => (
  <Container htmlFor={id}>
    <input
      checked={checked}
      id={id}
      type={type}
      name={fieldName}
      onChange={(event) => onChange && onChange(event)}
    />
    <span />
    {label}
  </Container>
);

export default Option;
