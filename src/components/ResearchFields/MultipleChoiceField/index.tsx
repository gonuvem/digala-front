import React, { useEffect, useCallback, useState, useRef } from 'react';
import { useField } from '@unform/core';
import { uuid } from 'uuidv4';

import Option from '../../Common/Option';

import { Container, ViewOptions } from './styles';

interface ChoicesProps {
  _id: string;
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
  hasRandomResponsesOrder?: boolean;
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
  const inputRefs = useRef<HTMLInputElement[]>([]);
  const [listChoices, setListChoices] = useState<Array<ChoicesProps>>(
    choices || [],
  );
  const [checkeds, setCheckeds] = useState<string[]>([]);
  const { fieldName, registerField, error, defaultValue } = useField(name);

  const another = { id: uuid(), text: 'outros(a)' };

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRefs.current,
      getValue: (refs: HTMLInputElement[]) => {
        return refs.filter((ref) => ref.checked).map((ref) => ref.value);
      },
    });
  }, [fieldName, registerField]);

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
            listChoices.map((choice, index) => (
              <Option
                inputRef={(ref) => {
                  inputRefs.current[index] = ref as HTMLInputElement;
                }}
                type="checkbox"
                id={choice._id}
                value={choice._id}
                fieldName={name}
                label={choice.text}
              />
            ))}
          {anotherOption && (
            <Option
              inputRef={(ref) => {
                inputRefs.current[listChoices.length] = ref as HTMLInputElement;
              }}
              value="another"
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
