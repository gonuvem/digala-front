import React, { useState, useCallback } from 'react';

import Option from './Option';

import { Container } from './styles';

interface SingleChoiceFieldProps {
  readOnly?: boolean;
  placeholder?: string;
  // name: string;
  // id: string;
}

const SingleChoiceField: React.FC<SingleChoiceFieldProps> = ({
  readOnly = false,
  placeholder = '',
}) => (
  <Container>
    <label htmlFor="SingleChoiceField">
      Escolha única
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua
      </p>
      <Option />
    </label>
  </Container>
);

export default SingleChoiceField;
