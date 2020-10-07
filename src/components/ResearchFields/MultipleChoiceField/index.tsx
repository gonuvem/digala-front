import React, { useEffect, useCallback, useState, useRef } from 'react';
import { useTransition } from 'react-spring';
import { useField } from '@unform/core';
import { uuid } from 'uuidv4';

import Option from '../../Common/Option';
import ErrorMessage from '../../Common/ErrorMessage';

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

  const { fieldName, registerField, error } = useField(name);
  const transitions = useTransition(!!error, {
    from: { opacity: 0, transform: 'translateX(-50px)' },
    enter: { opacity: 1, transform: 'translateX(0px)' },
    leave: { opacity: 0, transform: 'translateX(-50px)' },
  });

  const another = { id: uuid(), text: 'outros(a)' };

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRefs.current,
      getValue: (refs: HTMLInputElement[]) => {
        return refs.filter((ref) => ref.checked).map((ref) => ref.value);
      },
      setValue: (refs: HTMLInputElement[], value: string[]) => {
        if (value === undefined) {
          return;
        }

        refs.forEach((ref) => {
          if (value.includes(ref.value)) {
            ref.checked = true;
          }
        });
      },
    });
  }, [fieldName, registerField]);

  useEffect(() => {
    if (choices) {
      setListChoices(choices);
    }
  }, [choices, setListChoices]);

  const onChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const checkeds = inputRefs.current.filter((ref) => ref.checked);

      if (checkeds.length > choiceMaxAmmount) {
        event.target.checked = false;
      }
    },
    [choiceMaxAmmount],
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
                key={choice._id}
                inputRef={(ref) => {
                  inputRefs.current[index] = ref as HTMLInputElement;
                }}
                type="checkbox"
                id={choice._id}
                value={choice._id}
                fieldName={name}
                label={choice.text}
                onChange={onChange}
              />
            ))}
          {anotherOption && (
            <Option
              key={`another-option-${name}`}
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
      {transitions(
        (props, item) => item && <ErrorMessage style={props} message={error} />,
      )}
    </Container>
  );
};

export default MultipleChoiceField;
