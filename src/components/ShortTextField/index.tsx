import React, { useState, useCallback } from 'react';

import { Container } from './styles';

interface ShortTextFieldProps {
  readOnly?: boolean;
  placeholder?: string;
  name: string;
  id: string;
}

const ShortTextField: React.FC<ShortTextFieldProps> = ({
  readOnly = false,
  placeholder = '',
  name,
  id,
}) => {
  const [hasFocus, setHasFocus] = useState(false);

  const handleOnFocus = useCallback(() => {
    setHasFocus(true);
  }, []);

  const handleOnBlur = useCallback(() => {
    setHasFocus(false);
  }, []);

  return (
    <Container hasFocus={hasFocus}>
      <label htmlFor="shortTextField">
        Texto Curto
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua
        </p>
        <input
          disabled={readOnly}
          onFocus={handleOnFocus}
          onBlur={handleOnBlur}
          name={name}
          type="text"
          id={id}
          placeholder={placeholder}
        />
      </label>
    </Container>
  );
};

export default ShortTextField;
