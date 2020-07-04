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
  id: string;
  limitMaxMin?: boolean;
  minValue?: number;
  maxValue?: number;
  stepSize?: number;
  description?: string;
  label?: string;
  measurement?: string;
}

const NumericField: React.FC<NumericFieldProps> = ({
  name,
  label,
  measurement,
  id,
  description,
  stepSize = 1,
  limitMaxMin,
  minValue,
  maxValue,
  ...rest
}) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const { fieldName, registerField, error, defaultValue } = useField(name);

  const handleChangeInValue = useCallback(
    (signal: number) => {
      if (signal > 0) {
        inputRef.current?.stepUp(stepSize);
      } else {
        inputRef.current?.stepDown(stepSize);
      }
    },
    [stepSize],
  );

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
      {description && <p>{description}</p>}
      <InputContainer>
        <div>
          <input
            ref={inputRef}
            type="number"
            name={name}
            id={id}
            defaultValue={defaultValue}
            min={minValue}
            max={maxValue}
            {...rest}
          />
          <p>{measurement}</p>
        </div>
        <div>
          <MdArrowDropUp onClick={() => handleChangeInValue(1)} size={32} />
          <MdArrowDropDown onClick={() => handleChangeInValue(-1)} size={32} />
        </div>
      </InputContainer>
    </Container>
  );
};

export default NumericField;
