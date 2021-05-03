import React, {
  useState,
  useCallback,
  useRef,
  useEffect,
  InputHTMLAttributes,
} from 'react';
import InputMask from 'react-input-mask';
import { IconType } from 'react-icons';
import { useField } from '@unform/core';
import { useTransition } from 'react-spring';

import ErrorMessage from '../../Common/ErrorMessage';
import { Container } from './styles';

interface IconTextFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  readOnly?: boolean;
  placeholder?: string;
  description?: string;
  label?: string;
  validatePattern?: boolean;
  mask?: string | RegExp[];
  icon: IconType;
  name: string;
  id: string;
}

const IconTextField: React.FC<IconTextFieldProps> = ({
  icon: Icon,
  placeholder,
  label,
  readOnly = false,
  validatePattern,
  mask,
  description,
  name,
  id,
  ...rest
}) => {
  const auxRef = useRef(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const [hasFocus, setHasFocus] = useState(false);
  const [isFilled, setIsFilled] = useState(false);

  const { fieldName, registerField, error, defaultValue } = useField(name);
  const transitions = useTransition(!!error, {
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
      ref: auxRef.current,
      path: 'value',
    });
  }, [fieldName, registerField]);

  return (
    <Container hasFocus={hasFocus} isInvalid={!!error} isFilled={isFilled}>
      <label htmlFor={id}>
        {label && <span>{label}</span>}
        {description && <p>{description}</p>}
        <div>
          <Icon color="#000000" size={24} />
          <InputMask
            ref={auxRef}
            mask={validatePattern && mask ? mask : ''}
            defaultValue={defaultValue}
            name={name}
            placeholder={placeholder}
            id={id}
            onFocus={handleOnFocus}
            onBlur={handleOnBlur}
            disabled={readOnly}
            {...rest}
          />
        </div>
      </label>
      {transitions(
        (props, item) => item && <ErrorMessage message={error} style={props} />,
      )}
    </Container>
  );
};

export default IconTextField;
