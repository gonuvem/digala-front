import React, { useState, useCallback } from 'react';

import { uuid } from 'uuidv4';
import Option from './Option';

import { Container } from './styles';

interface SingleChoiceFieldProps {
  readOnly?: boolean;
  description?: string;
  label: string;
  choices: string[];
  name: string;
  id: string;
}

const SingleChoiceField: React.FC<SingleChoiceFieldProps> = ({
  readOnly = false,
  id,
  name,
  choices,
  label,
  description,
}) => (
  <Container>
    <label htmlFor={id}>
      {label}
      {description && <p>{description}</p>}
      {choices.map((choice) => (
        <Option id={uuid()} fieldName={name} label={choice} />
      ))}
    </label>
  </Container>
);

export default SingleChoiceField;
