import React, { useRef, useCallback, useEffect } from 'react';
import { useField } from '@unform/core';
import { components, Props as SelectProps, OptionTypeBase } from 'react-select';
import { MdArrowDropDown } from 'react-icons/md';

import { Container, CustomSelect } from './styles';

interface SelectFieldProps extends SelectProps<OptionTypeBase> {
  name: string;
  label?: string;
}

// I have to fix the type of this parameter later
const DropdownIndicator = (props: any): React.ReactNode => (
  <components.DropdownIndicator {...props}>
    <MdArrowDropDown size={40} />
  </components.DropdownIndicator>
);

const SelectField: React.FC<SelectFieldProps> = ({ label, name, ...rest }) => {
  const inputRef = useRef(null);
  const { fieldName, registerField, defaultValue, error } = useField(name);

  const noOptionsMessage = useCallback(() => 'Não há opções', []);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: undefined,
      getValue: (ref: any) => {
        if (!ref.state.value) {
          return '';
        }
        return ref.state.value;
      },
    });
  }, [fieldName, inputRef, registerField]);

  return (
    <Container>
      {label && <span>{label}</span>}
      <CustomSelect
        ref={inputRef}
        defaultValue={defaultValue}
        classNamePrefix="react-select"
        placeholder="Escolha uma opção"
        components={{ DropdownIndicator }}
        noOptionsMessage={noOptionsMessage}
        {...rest}
      />
    </Container>
  );
};

export default SelectField;
