import React, { useState, useCallback, useEffect, useRef } from 'react';
import { useField } from '@unform/core';
import { useTransition, animated } from 'react-spring';

import { Container } from './styles';

interface TextAreaFieldProps {
  readOnly?: boolean;
  placeholder?: string;
  description?: string;
  label?: string;
  name: string;
  id: string;
}

const TextAreaField: React.FC<TextAreaFieldProps> = ({
  readOnly = false,
  placeholder = '',
  description,
  name,
  id,
  label,
}) => {
  const inputRef = useRef<HTMLTextAreaElement>(null);
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
        <textarea
          ref={inputRef}
          disabled={readOnly}
          onFocus={handleOnFocus}
          onBlur={handleOnBlur}
          name={name}
          id={id}
          placeholder={placeholder}
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

export default TextAreaField;
