import React, {
  useState,
  useCallback,
  useEffect,
  useRef,
  InputHTMLAttributes,
} from 'react';
import { useField } from '@unform/core';
import { useTransition, animated } from 'react-spring';

import { Container } from './styles';

interface ShortTextFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  readOnly?: boolean;
  placeholder?: string;
  description?: string;
  label?: string;
  name: string;
  id: string;
}

const ShortTextField: React.FC<ShortTextFieldProps> = ({
  readOnly = false,
  placeholder = '',
  description,
  name,
  id,
  label,
  ...rest
}) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [hasFocus, setHasFocus] = useState(false);
  const [isFilled, setIsFilled] = useState(false);

  const { fieldName, registerField, error, defaultValue } = useField(name);
  const transitions = useTransition(!!error, null, {
    from: { opacity: 0, transform: 'translateX(-50px)' },
    enter: { opacity: 1, transform: 'translateX(0px)' },
    leave: { opacity: 0, transform: 'translateX(-50px)' },
  });

  const handleOnFocus = useCallback(() => {
    setHasFocus(true);
  }, []);

  const handleOnBlur = useCallback(() => {
    setHasFocus(false);
    setIsFilled(!!inputRef.current?.value);
  }, []);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
    });
  }, [fieldName, registerField]);

  return (
    <Container hasFocus={hasFocus} isInvalid={!!error} isFilled={isFilled}>
      <label htmlFor={id}>
        {label && label}
        {description && <p>{description}</p>}
        <input
          ref={inputRef}
          disabled={readOnly}
          onFocus={handleOnFocus}
          onBlur={handleOnBlur}
          name={name}
          type="text"
          id={id}
          placeholder={placeholder}
          {...rest}
        />
      </label>
      {transitions.map(
        ({ item, key, props }) =>
          item && (
            <animated.span key={key} style={props}>
              {error}
            </animated.span>
          ),
      )}
    </Container>
  );
};

export default ShortTextField;
