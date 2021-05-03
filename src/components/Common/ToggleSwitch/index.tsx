import React, {
  useRef,
  useEffect,
  useState,
  useCallback,
  InputHTMLAttributes,
} from 'react';
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
  onChange,
  ...rest
}) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [isChecked, setIsChecked] = useState(false);
  const { fieldName, registerField, defaultValue } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'checked',
      setValue: (ref: HTMLInputElement, value: boolean) => {
        ref.checked = value;
        setIsChecked(value);
      },
    });
  }, [fieldName, registerField]);

  const handleToggleOnChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      if (onChange) {
        onChange(event);
      }
      setIsChecked(event.target.checked);
    },
    [onChange],
  );

  return (
    <>
      <Container>
        <div>
          {label && <span>{label}</span>}
          {!!helpHint && (
            <FiHelpCircle data-tip data-for={`switch-for-${name}`} />
          )}
        </div>
        <CheckBoxWrapper isChecked={isChecked}>
          <CheckBox
            ref={inputRef}
            name={name}
            defaultChecked={defaultValue}
            id="checkbox"
            type="checkbox"
            onChange={handleToggleOnChange}
            {...rest}
          />
          <CheckBoxLabel htmlFor="checkbox" />
          <span>{isChecked ? 'Habilitado' : 'Desabilitado'}</span>
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
