import React, {
  useState,
  useCallback,
  useRef,
  useEffect,
  InputHTMLAttributes,
} from 'react';
import { IconType } from 'react-icons';
import { useField } from '@unform/core';
import { useTransition, animated } from 'react-spring';

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
      {transitions.map(
        ({ item, key, props }) =>
          item && (
            <animated.span key={key} style={props}>
              {error}
            </animated.span>
          ),
      )}
      <div>
        <Icon size={24} />
        <input
          ref={inputRef}
          name={name}
          placeholder={placeholder}
          id={id}
          onFocus={handleOnFocus}
          onBlur={handleOnBlur}
          {...rest}
        />
      </div>
    </Container>
  );
};

export default IconTextField;
