import React from 'react';

import { Container } from './styles';

interface CustomCheckboxProps {
  id: string;
  fieldName: string;
  type: string;
  value: string[];
  inputRef(ref: any): void;
}

const CustomCheckbox: React.FC<CustomCheckboxProps> = ({
  id,
  fieldName,
  type,
  value,
  inputRef,
  ...rest
}) => (
  <Container htmlFor={id}>
    <input
      ref={(ref) => inputRef(ref)}
      value={value}
      id={id}
      type={type}
      name={fieldName}
      {...rest}
    />
    <span />
  </Container>
);

export default CustomCheckbox;
