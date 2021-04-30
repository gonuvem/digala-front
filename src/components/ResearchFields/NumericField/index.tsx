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
  limitMaxMin,
  stepSize = 1,
  minValue = 1,
  maxValue = 10,
  disabled,
  ...rest
}) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const { fieldName, registerField, error, defaultValue = 1 } = useField(name);

  const handleChangeInValue = useCallback(
    (signal: number) => {
      if (disabled) {
        return;
      }

      const inputValue = inputRef.current?.value || 0;

      if (signal > 0 && (!limitMaxMin || inputValue < maxValue)) {
        inputRef.current?.stepUp(stepSize);
      } else if (signal < 0 && inputValue > minValue) {
        inputRef.current?.stepDown(stepSize);
      }

      const event = new Event('input', { bubbles: true });
      inputRef.current?.dispatchEvent(event);
    },
    [disabled, limitMaxMin, maxValue, minValue, stepSize],
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
      <label htmlFor={`${name}-numeric`}>
        {label && <span>{label}</span>}
        {description && <p>{description}</p>}
      </label>
      <InputContainer id={`${name}-numeric`}>
        <div>
          <input
            ref={inputRef}
            type="number"
            name={name}
            id={id}
            defaultValue={defaultValue}
            min={minValue}
            max={limitMaxMin ? maxValue : undefined}
            disabled={disabled}
            {...rest}
          />
          {/* <p>{measurement}</p> */}
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
