import React, { InputHTMLAttributes, useRef, useCallback } from 'react';
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

  const handleChangeInValue = useCallback((ammount: number) => {
    inputRef?.current?.stepUp(ammount);
  }, []);

  return (
    <Container>
      {label && <span>{label}</span>}
      <InputContainer>
        <input ref={inputRef} type="number" name={name} {...rest} />
        <div>
          <MdArrowDropUp onClick={() => handleChangeInValue(1)} size={32} />
          <MdArrowDropDown onClick={() => handleChangeInValue(-1)} size={32} />
        </div>
      </InputContainer>
    </Container>
  );
};

export default NumericField;
