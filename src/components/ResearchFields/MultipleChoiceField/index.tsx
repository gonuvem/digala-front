import React, { useEffect, useCallback, useState } from 'react';
import { uuid } from 'uuidv4';

import Option from '../../Common/Option';

import { Container, ViewOptions } from './styles';

interface ChoicesProps {
  id: string;
  content: string;
}

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
  limitChoices?: boolean;
  choiceMaxAmmount?: number;
}

const MultipleChoiceField: React.FC<SingleChoiceFieldProps> = ({
  readOnly = false,
  id,
  name,
  choices,
  label,
  description,
  anotherOption,
  randomSort,
  rowDirection = false,
  limitChoices,
  choiceMaxAmmount = 2,
}) => {
  const [listChoices, setListChoices] = useState<Array<ChoicesProps>>(
    choices || [],
  );
  const [checkeds, setCheckeds] = useState<string[]>([]);

  const [refresh, setRefresh] = useState(false);
  const another = { id: uuid(), content: 'outros(a)' };

  const shuffle = useCallback(() => {
    const list = listChoices;
    let currentIndex = list.length;
    let temporaryValue;
    let randomIndex;

    while (currentIndex !== 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      temporaryValue = list[currentIndex];
      list[currentIndex] = list[randomIndex];
      list[randomIndex] = temporaryValue;
    }

    setListChoices(list);
    setRefresh(!refresh);
  }, [listChoices, setListChoices, refresh]);

  useEffect(() => {
    if (choices && !randomSort) {
      setListChoices(choices);
    } else if (choices && randomSort) {
      setListChoices(choices);
      shuffle();
    }
  }, [choices, setListChoices, randomSort]);

  const handleOptionClick = useCallback(
    (event, choiceId: string) => {
      const { checked } = event.target;
      if (limitChoices && checkeds.length >= choiceMaxAmmount && checked) {
        return;
      }
      if (checked) {
        setCheckeds((state) => [...state, choiceId]);
        return;
      }
      setCheckeds((state) => [
        ...state.filter((checkedId) => checkedId !== choiceId),
      ]);
    },
    [checkeds, limitChoices, choiceMaxAmmount],
  );

  return (
    <Container>
      <label htmlFor={id}>
        {label}
        {description && <p>{description}</p>}
        <ViewOptions rowDirection={rowDirection}>
          {listChoices &&
            listChoices.map((choice) => (
              <Option
                type="checkbox"
                id={choice.id}
                fieldName={name}
                label={choice.content}
                checked={checkeds.includes(choice.id)}
                onChange={(event: any) => handleOptionClick(event, choice.id)}
              />
            ))}
          {anotherOption && (
            <Option
              type="checkbox"
              id={another.id}
              fieldName={name}
              label={another.content}
            />
          )}
        </ViewOptions>
      </label>
    </Container>
  );
};

export default MultipleChoiceField;
