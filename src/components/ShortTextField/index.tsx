import React, { useState, useCallback } from 'react';

import { Container } from './styles';

interface ShortTextFieldProps {
  readOnly?: boolean;
  placeholder?: string;
  description?: string;
  label: string;
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
      <label htmlFor={id}>
        {label}
        {description && <p>{description}</p>}
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
