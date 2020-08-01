import React, { useEffect, useState } from 'react';
import { uuid } from 'uuidv4';

import Option from '../../Common/Option';

import { Container, ViewOptions } from './styles';

interface SingleChoiceFieldProps {
  readOnly?: boolean;
  description?: string;
  label: string;
  choices?: ChoicesProps[];
  name: string;
  id: string;
  anotherOption?: boolean;
  randomSort?: boolean;
  rowDirection?: boolean;
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
  rowDirection = false,
}) => {
  const [listChoices, setListChoices] = useState<Array<ChoicesProps>>(
    choices || [],
  );
  const another = { id: uuid(), content: 'outros(a)' };

  useEffect(() => {
    if (choices) {
      setListChoices(choices);
    }
  }, [choices, setListChoices]);

  return (
    <Container>
      <label htmlFor={id}>
        {label}
        {description && <p>{description}</p>}
        <ViewOptions rowDirection={rowDirection}>
          {listChoices &&
            listChoices.map((choice) => (
              <Option id={choice.id} fieldName={name} label={choice.content} />
            ))}
          {anotherOption && (
            <Option id={another.id} fieldName={name} label={another.content} />
          )}
        </ViewOptions>
      </label>
    </Container>
  );
};

export default SingleChoiceField;
