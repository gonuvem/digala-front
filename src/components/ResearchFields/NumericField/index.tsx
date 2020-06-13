import React, {
  InputHTMLAttributes,
  useRef,
  useCallback,
  useEffect,
} from 'react';
import { useField } from '@unform/core';
import { MdArrowDropUp, MdArrowDropDown } from 'react-icons/md';

import { Container, InputContainer } from './styles';

interface NumericFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label?: string;
}

const NumericField: React.FC<NumericFieldProps> = ({
  name,
  label,
  ...rest
}) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const { fieldName, registerField, error, defaultValue } = useField(name);

  const handleChangeInValue = useCallback((ammount: number) => {
    inputRef?.current?.stepUp(ammount);
  }, []);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
    });
  }, [fieldName, registerField]);

  return (
    <Container>
      {label && <span>{label}</span>}
      <InputContainer>
        <input
          ref={inputRef}
          type="number"
          name={name}
          defaultValue={defaultValue}
          {...rest}
        />
        <div>
          <MdArrowDropUp onClick={() => handleChangeInValue(1)} size={32} />
          <MdArrowDropDown onClick={() => handleChangeInValue(-1)} size={32} />
        </div>
      </InputContainer>
    </Container>
  );
};

export default NumericField;
