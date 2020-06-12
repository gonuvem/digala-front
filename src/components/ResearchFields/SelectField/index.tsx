import React, { useRef, useCallback, useEffect } from 'react';
import { components } from 'react-select';
import { MdArrowDropDown } from 'react-icons/md';

import { Container, CustomSelect } from './styles';

interface SelectFieldProps {
  name: string;
  label?: string;
}

// I have to fix the type of this parameter later
const DropdownIndicator = (props: any) => (
  <components.DropdownIndicator {...props}>
    <MdArrowDropDown size={40} />
  </components.DropdownIndicator>
);

const SelectField: React.FC<SelectFieldProps> = ({ label, name }) => {
  const inputRef = useRef(null);

  const noOptionsMessage = useCallback(() => 'Não há opções', []);

  return (
    <Container>
      {label && <span>{label}</span>}
      <CustomSelect
        classNamePrefix="react-select"
        placeholder="Escolha uma opção"
        components={{ DropdownIndicator }}
        noOptionsMessage={noOptionsMessage}
      />
    </Container>
  );
};

export default SelectField;
