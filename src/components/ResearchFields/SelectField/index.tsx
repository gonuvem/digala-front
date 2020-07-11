import React, { useRef, useCallback, useEffect, useState } from 'react';
import { useField } from '@unform/core';
import { components, Props as SelectProps, OptionTypeBase } from 'react-select';
import { MdArrowDropDown } from 'react-icons/md';

import { Container, CustomSelect } from './styles';

interface SelectFieldProps extends SelectProps<OptionTypeBase> {
  name: string;
  label?: string;
  description?: string;
  listOptions?: OptionsProps[];
  randomSort?: boolean;
}

interface OptionsProps {
  id: string;
  content: string;
  label?: string;
  value?: string;
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
  listOptions,
  randomSort,
  ...rest
}) => {
  const inputRef = useRef(null);
  const { fieldName, registerField, defaultValue, error } = useField(name);
  const [options, setOptions] = useState<Array<OptionsProps>>(
    listOptions || [],
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
    console.log('foi');
    if (listOptions) {
      setOptions(listOptions);
    } else if (listOptions && randomSort) {
      setOptions(listOptions);
      shuffle();
    }
  }, [listOptions, options, randomSort]);

  const shuffle = useCallback(() => {
    const list = options;
    let currentIndex = list.length;
    let temporaryValue;
    let randomIndex;

    while (currentIndex !== 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      temporaryValue = list[currentIndex];
      list[currentIndex] = list[randomIndex];
      list[randomIndex] = temporaryValue;
    }

    setOptions(list);
  }, [options, setOptions]);

  return (
    <Container>
      {label && <span>{label}</span>}
      {description && <p>{description}</p>}
      {options && (
        <CustomSelect
          ref={inputRef}
          defaultValue={defaultValue}
          classNamePrefix="react-select"
          placeholder="Escolha uma opção"
          components={{ DropdownIndicator }}
          noOptionsMessage={noOptionsMessage}
          options={listOptions}
          // isLoading={refresh}
          // loadOptions={optionsPromissed}
          {...rest}
        />
      )}
    </Container>
  );
};

export default SelectField;
