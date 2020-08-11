import React, {
  useRef,
  useCallback,
  useEffect,
  useState,
  useMemo,
} from 'react';
import { useField } from '@unform/core';
import { components, Props as SelectProps, OptionTypeBase } from 'react-select';
import { MdArrowDropDown } from 'react-icons/md';

import { Container, CustomSelect } from './styles';

interface OptionsProps {
  // label?: string;
  value?: string;
  text?: string;
}

interface SelectFieldProps extends SelectProps<OptionTypeBase> {
  name: string;
  label?: string;
  description?: string;
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
  ...rest
}) => {
  const inputRef = useRef(null);
  const { fieldName, registerField, defaultValue, error } = useField(name);
  const [options, setOptions] = useState<Array<OptionsProps>>(
    answerOptions || [],
  );

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
    if (answerOptions) {
      const newArray = [];
      for (let i = 0; i < answerOptions.length; i++) {
        const option = {
          label: answerOptions[i].text,
          value: answerOptions[i].text,
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
  console.log(options);
  return (
    <Container>
      <label>
        {label && <span>{label}</span>}
        {description && <p>{description}</p>}
      </label>
      {options && (
        <CustomSelect
          ref={inputRef}
          defaultValue={defaultSelectValue}
          classNamePrefix="react-select"
          placeholder="Escolha uma opção"
          components={{ DropdownIndicator }}
          noOptionsMessage={noOptionsMessage}
          options={options}
          // isLoading={refresh}
          // loadOptions={optionsPromissed}
          {...rest}
        />
      )}
    </Container>
  );
};

export default SelectField;
