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
  _id: string;
  text: string;
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
  const another = { id: uuid(), text: 'outros(a)' };

  useEffect(() => {
    if (choices) {
      setListChoices(choices);
    }
  }, [choices, setListChoices]);

  return (
    <Container>
      <label htmlFor={id}>
        <span>{label}</span>
        {description && <p>{description}</p>}
        <ViewOptions rowDirection={rowDirection}>
          {listChoices &&
            listChoices.map((choice) => (
              <Option id={choice._id} fieldName={name} label={choice.text} />
            ))}
          {anotherOption && (
            <Option id={another.id} fieldName={name} label={another.text} />
          )}
        </ViewOptions>
      </label>
    </Container>
  );
};

export default SingleChoiceField;
