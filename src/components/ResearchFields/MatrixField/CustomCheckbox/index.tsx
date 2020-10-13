import React from 'react';

import { Container } from './styles';

interface CustomCheckboxProps {
  id: string;
  fieldName: string;
  type: string;
  value: string[];
  disabled?: boolean;
  inputRef(ref: any): void;
}

const CustomCheckbox: React.FC<CustomCheckboxProps> = ({
  id,
  fieldName,
  type,
  value,
  inputRef,
  disabled,
  ...rest
}) => (
  <Container htmlFor={id}>
    <input
      ref={(ref) => inputRef(ref)}
      value={value}
      id={id}
      type={type}
      name={fieldName}
      disabled={disabled}
      {...rest}
    />
    <span />
  </Container>
);

export default CustomCheckbox;
