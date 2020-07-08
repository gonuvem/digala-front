import React, { useEffect, useCallback, useState } from 'react';

import { uuid } from 'uuidv4';
import Option from './Option';

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
  randomSort,
  rowDirection = false,
}) => {
  const [listChoices, setListChoices] = useState<Array<ChoicesProps>>(
    choices || [],
  );
  const [refresh, setRefresh] = useState(false);
  const another = { id: uuid(), content: 'outros(a)' };

  useEffect(() => {
    if (choices && !randomSort) {
      setListChoices(choices);
    } else if (choices && randomSort) {
      setListChoices(choices);
      shuffle();
    }
  }, [choices, setListChoices, randomSort]);

  const shuffle = useCallback(() => {
    const list = listChoices;
    var currentIndex = list.length,
      temporaryValue,
      randomIndex;

    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      temporaryValue = list[currentIndex];
      list[currentIndex] = list[randomIndex];
      list[randomIndex] = temporaryValue;
    }

    setListChoices(list);
    setRefresh(!refresh);
  }, [listChoices, setListChoices, refresh]);

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
