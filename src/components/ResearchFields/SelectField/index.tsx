import React, {
  useRef,
  useCallback,
  useEffect,
  useState,
  useMemo,
} from 'react';
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
  ...rest
}) => {
  const inputRef = useRef(null);
  const [options, setOptions] = useState<Array<OptionsProps>>(
    answerOptions || [],
  );

  const { fieldName, registerField, defaultValue, error } = useField(name);
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
    });
  }, [fieldName, inputRef, registerField]);

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
      // console.log(newArray);
      setOptions(newArray);
    }
  }, [answerOptions]);

  const defaultSelectValue = useMemo(() => {
    const defaultOption = answerOptions?.find(
      (option) => option.text === defaultValue,
    );

    return defaultOption;
  }, [defaultValue, answerOptions]);

  return (
    <Container>
      <label htmlFor={name}>
        {label && <span>{label}</span>}
        {description && <p>{description}</p>}
      </label>
      {options && (
        <CustomSelect
          ref={inputRef}
          // defaultValue={defaultSelectValue}
          classNamePrefix="react-select"
          placeholder="Escolha uma opção"
          components={{ DropdownIndicator }}
          noOptionsMessage={noOptionsMessage}
          options={options}
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
