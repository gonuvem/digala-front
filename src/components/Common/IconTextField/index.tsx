import React, { useState, useCallback } from 'react';
import { IconType } from 'react-icons';

import { Container } from './styles';

interface IconTextFieldProps {
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
      <Icon size={24} />
      <input
        name={name}
        type="text"
        placeholder={placeholder}
        id={id}
        onFocus={handleOnFocus}
        onBlur={handleOnBlur}
      />
    </Container>
  );
};

export default IconTextField;
