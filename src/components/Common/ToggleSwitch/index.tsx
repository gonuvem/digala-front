import React, { useRef, useEffect } from 'react';
import { useField } from '@unform/core';
import { FiHelpCircle } from 'react-icons/fi';

import { CheckBoxWrapper, CheckBox, CheckBoxLabel, Container } from './styles';

interface ToggleSwitchProps {
  name: string;
  label?: string;
  helpHint?: string;
}

const Switch: React.FC<ToggleSwitchProps> = ({ name, label, helpHint }) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const { fieldName, registerField, error, defaultValue } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
    });
  }, [fieldName, registerField]);

  return (
    <Container>
      <div>
        {label && <span>{label}</span>}
        {!!helpHint && <FiHelpCircle />}
      </div>
      <CheckBoxWrapper>
        <CheckBox
          ref={inputRef}
          name={name}
          defaultChecked={defaultValue}
          id="checkbox"
          type="checkbox"
        />
        <CheckBoxLabel htmlFor="checkbox" />
      </CheckBoxWrapper>
    </Container>
  );
};

export default Switch;
