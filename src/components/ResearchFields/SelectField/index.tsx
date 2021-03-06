import React, { useRef, useCallback, useEffect, useState } from 'react';
import { useField } from '@unform/core';
import { useTransition } from 'react-spring';
import { components, Props as SelectProps, OptionTypeBase } from 'react-select';
import { MdArrowDropDown } from 'react-icons/md';

import ErrorMessage from '../../Common/ErrorMessage';
import { Container, CustomSelect } from './styles';

interface OptionsProps {
  value?: string;
  text?: string;
}

interface SelectFieldProps extends SelectProps<OptionTypeBase> {
  name: string;
  label?: string;
  description?: string;
  isTimeFormat?: boolean;
  answerOptions?: OptionsProps[];
  disabled?: boolean;
}

// I have to fix the type of this parameter later
const DropdownIndicator = (props: any): React.ReactNode => (
  <components.DropdownIndicator {...props}>
    <MdArrowDropDown size={40} />
  </components.DropdownIndicator>
);

const SelectField: React.FC<SelectFieldProps> = ({
  label,
  name,
  description,
  answerOptions,
  isTimeFormat,
  disabled,
  ...rest
}) => {
  const inputRef = useRef(null);
  const [defaultValue, setDefaultValue] = useState('');
  const [options, setOptions] = useState<Array<OptionsProps>>(
    answerOptions || [],
  );

  const { fieldName, registerField, error } = useField(name);
  const transitions = useTransition(!!error, {
    from: { opacity: 0, transform: 'translateX(-50px)' },
    enter: { opacity: 1, transform: 'translateX(0px)' },
    leave: { opacity: 0, transform: 'translateX(-50px)' },
  });

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
      setValue: (ref: any, value: any) => {
        if (value === undefined) {
          return;
        }

        const option = answerOptions?.find(
          (answerOption) => answerOption.value === value[0],
        );

        if (option) {
          ref.select.setValue({ label: option.text, value: option.value });
        }
      },
    });
  }, [answerOptions, fieldName, inputRef, registerField]);

  useEffect(() => {
    if (!isTimeFormat && answerOptions) {
      const newArray = [];
      for (let i = 0; i < answerOptions.length; i += 1) {
        const option = {
          label: answerOptions[i].text,
          value: answerOptions[i].value,
        };
        newArray.push(option);
      }
      setOptions(newArray);
    }
  }, [answerOptions, isTimeFormat]);

  return (
    <Container>
      <label htmlFor={name}>
        {label && <span>{label}</span>}
        {description && <p>{description}</p>}
      </label>
      {options && (
        <CustomSelect
          ref={inputRef}
          data-outside="outside"
          defaultValue={defaultValue}
          classNamePrefix="react-select"
          placeholder="Escolha uma opção"
          components={{ DropdownIndicator }}
          noOptionsMessage={noOptionsMessage}
          options={options}
          isDisabled={disabled}
          {...rest}
        />
      )}
      {transitions(
        (props, item) => item && <ErrorMessage style={props} message={error} />,
      )}
    </Container>
  );
};

export default SelectField;
