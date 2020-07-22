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
  label?: string;
  value?: string;
}

interface SelectFieldProps extends SelectProps<OptionTypeBase> {
  name: string;
  label?: string;
  description?: string;
  listOptions?: OptionsProps[];
  randomSort?: boolean;
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
    if (listOptions) {
      setOptions(listOptions);
    }
  }, [listOptions, options]);

  const defaultSelectValue = useMemo(() => {
    const defaultOption = listOptions?.find(
      (option) => option.value === defaultValue,
    );

    return defaultOption;
  }, [defaultValue, listOptions]);

  return (
    <Container>
      {label && <span>{label}</span>}
      {description && <p>{description}</p>}
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
