import React from 'react';

import { Container } from './styles';

interface OptionProps {
  id: string;
  value: string;
  fieldName: string;
  label?: string;
  type?: 'radio' | 'checkbox';
  checked?: boolean;
  onChange?: Function;
  inputRef(ref: any): void;
  readOnly: boolean;
}

const Option: React.FC<OptionProps> = ({
  id,
  value,
  fieldName,
  label,
  type = 'radio',
  checked,
  onChange,
  inputRef,
  readOnly,
}) => (
  <Container htmlFor={id}>
    <input
      ref={(ref) => inputRef(ref)}
      checked={checked}
      id={id}
      type={type}
      name={fieldName}
      value={value}
      onChange={(event) => onChange && onChange(event)}
      disabled={readOnly}
    />
    <span />
    {label}
  </Container>
);

export default Option;
