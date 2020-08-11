import React, { useEffect, useCallback, useState } from 'react';
import { uuid } from 'uuidv4';

import Option from '../../Common/Option';

import { Container, ViewOptions } from './styles';

interface ChoicesProps {
  id: string;
  text: string;
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
  rowDirection = false,
  limitChoices,
  choiceMaxAmmount = 2,
}) => {
  const [listChoices, setListChoices] = useState<Array<ChoicesProps>>(
    choices || [],
  );
  const [checkeds, setCheckeds] = useState<string[]>([]);

  const another = { id: uuid(), text: 'outros(a)' };

  useEffect(() => {
    if (choices) {
      setListChoices(choices);
    }
  }, [choices, setListChoices]);

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
        <span>{label}</span>
        {description && <p>{description}</p>}
        <ViewOptions rowDirection={rowDirection}>
          {listChoices &&
            listChoices.map((choice) => (
              <Option
                type="checkbox"
                id={choice.id}
                fieldName={name}
                label={choice.text}
                checked={checkeds.includes(choice.id)}
                onChange={(event: any) => handleOptionClick(event, choice.id)}
              />
            ))}
          {anotherOption && (
            <Option
              type="checkbox"
              id={another.id}
              fieldName={name}
              label={another.text}
            />
          )}
        </ViewOptions>
      </label>
    </Container>
  );
};

export default MultipleChoiceField;
