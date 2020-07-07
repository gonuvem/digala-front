import React, { useEffect } from 'react';

import { uuid } from 'uuidv4';
import Option from './Option';

import { Container } from './styles';

interface SingleChoiceFieldProps {
  readOnly?: boolean;
  description?: string;
  label: string;
  choices?: ChoicesProps[];
  name: string;
  id: string;
  anotherOption?: boolean;
}

interface ChoicesProps {
  id: string;
  content: string;
}

const SingleChoiceField: React.FC<SingleChoiceFieldProps> = ({
  readOnly = false,
  id,
  name,
  choices,
  label,
  description,
  anotherOption,
}) => {
  const another = { id: uuid(), content: 'outros(a)' };
  return (
    <Container>
      <label htmlFor={id}>
        {label}
        {description && <p>{description}</p>}
        {choices &&
          choices.map((choice) => (
            <Option id={choice.id} fieldName={name} label={choice.content} />
          ))}
        {anotherOption && (
          <Option id={another.id} fieldName={name} label={another.content} />
        )}
      </label>
    </Container>
  );
};

export default SingleChoiceField;
