import React, { useRef, useEffect, useState, InputHTMLAttributes } from 'react';
import { useField } from '@unform/core';
import { FiHelpCircle } from 'react-icons/fi';

import { CheckBoxWrapper, CheckBox, CheckBoxLabel, Container } from './styles';

interface ToggleSwitchProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label?: string;
  helpHint?: string;
}

const Switch: React.FC<ToggleSwitchProps> = ({
  name,
  label,
  helpHint,
  ...rest
}) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [isChecked, setIsChecked] = useState(false);
  const { fieldName, registerField, error, defaultValue } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'checked',
    });
  }, [fieldName, registerField]);

  return (
    <Container>
      <div>
        {label && <span>{label}</span>}
        {!!helpHint && <FiHelpCircle />}
      </div>
      <CheckBoxWrapper isChecked={isChecked}>
        <CheckBox
          ref={inputRef}
          name={name}
          defaultChecked={defaultValue}
          id="checkbox"
          type="checkbox"
          onChange={(event) => setIsChecked(event.target.checked)}
          {...rest}
        />
        <CheckBoxLabel htmlFor="checkbox" />
        <span>{isChecked ? 'Habilitado' : 'Desabilitado'}</span>
      </CheckBoxWrapper>
    </Container>
  );
};

export default Switch;
