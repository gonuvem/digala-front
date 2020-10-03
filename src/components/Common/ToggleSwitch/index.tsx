import React, { useRef, useEffect, useState, InputHTMLAttributes } from 'react';
import { useField } from '@unform/core';
import { FiHelpCircle } from 'react-icons/fi';

import {
  CheckBoxWrapper,
  CheckBox,
  CheckBoxLabel,
  Container,
  Tooltip,
} from './styles';

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
  const { fieldName, registerField, defaultValue } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'checked',
    });
  }, [fieldName, registerField]);

  return (
    <>
      <Container>
        <div>
          {label && <span>{label}</span>}
          {!!helpHint && (
            <FiHelpCircle data-tip data-for={`switch-for-${name}`} />
          )}
        </div>
        <CheckBoxWrapper isChecked={inputRef.current?.checked || false}>
          <CheckBox
            ref={inputRef}
            name={name}
            defaultChecked={defaultValue}
            id="checkbox"
            type="checkbox"
            {...rest}
          />
          <CheckBoxLabel htmlFor="checkbox" />
          <span>
            {inputRef.current?.checked ? 'Habilitado' : 'Desabilitado'}
          </span>
        </CheckBoxWrapper>
      </Container>
      <Tooltip
        id={`switch-for-${name}`}
        effect="solid"
        place="top"
        type="light"
      >
        <p>{helpHint}</p>
      </Tooltip>
    </>
  );
};

export default Switch;
