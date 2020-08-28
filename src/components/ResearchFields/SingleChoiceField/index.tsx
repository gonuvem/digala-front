import React, { useEffect, useState, useRef } from 'react';
import { useField } from '@unform/core';
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
  hasRandomResponsesOrder?: boolean;
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
  const inputRefs = useRef<HTMLInputElement[]>([]);
  const [listChoices, setListChoices] = useState<Array<ChoicesProps>>(
    choices || [],
  );
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
  }, [registerField, fieldName]);

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
            listChoices.map((choice, index) => (
              <Option
                inputRef={(ref) => {
                  inputRefs.current[index] = ref as HTMLInputElement;
                }}
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
              id={another.id}
              value="another-option"
              fieldName={name}
              label={another.text}
            />
          )}
        </ViewOptions>
      </label>
    </Container>
  );
};

export default SingleChoiceField;
