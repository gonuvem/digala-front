import React, {
  useState,
  useCallback,
  useRef,
  useEffect,
  InputHTMLAttributes,
} from 'react';
import { IconType } from 'react-icons';
import { useField } from '@unform/core';

import { Container } from './styles';

interface IconTextFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  readOnly?: boolean;
  placeholder?: string;
  description?: string;
  icon: IconType;
  name: string;
  id: string;
}

const IconTextField: React.FC<IconTextFieldProps> = ({
  icon: Icon,
  placeholder,
  readOnly,
  description,
  name,
  id,
  ...rest
}) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [hasFocus, setHasFocus] = useState(false);
  const { fieldName, registerField, error, defaultValue } = useField(name);

  const handleOnFocus = useCallback(() => {
    setHasFocus(true);
  }, []);

  const handleOnBlur = useCallback(() => {
    setHasFocus(false);
  }, []);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
    });
  }, [fieldName, registerField]);

  return (
    <Container hasFocus={hasFocus}>
      <Icon size={24} />
      <input
        ref={inputRef}
        name={name}
        type="text"
        placeholder={placeholder}
        id={id}
        onFocus={handleOnFocus}
        onBlur={handleOnBlur}
      />
    </Container>
  );
};

export default IconTextField;
