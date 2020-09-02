import React, { useRef, useEffect } from 'react';
import { useTransition } from 'react-spring';
import { useField } from '@unform/core';

import ErrorMessage from '../../Common/ErrorMessage';
import { Container, CardImage } from './styles';

interface ImagesChoiceProps {
  name: string;
  description?: string;
  multipleChoice: boolean;
  choiceMaxAmmount: number;
  label: string;
  id: string;
  choices: ListOptionsProps[];
}

interface ListOptionsProps {
  _id: string;
  text: string;
  value?: string;
  label?: string;
  image?: string;
}

const ImagesChoice: React.FC<ImagesChoiceProps> = ({
  name,
  label,
  description,
  multipleChoice,
  choiceMaxAmmount,
  choices,
  id,
}) => {
  const inputRefs = useRef<HTMLInputElement[]>([]);

  const { fieldName, registerField, error, defaultValue } = useField(name);
  const transitions = useTransition(!!error, {
    from: { opacity: 0, transform: 'translateX(-50px)' },
    enter: { opacity: 1, transform: 'translateX(0px)' },
    leave: { opacity: 0, transform: 'translateX(-50px)' },
  });

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRefs.current,
      getValue: (refs: HTMLInputElement[]) => {
        return refs.filter((ref) => ref.checked).map((ref) => ref.value);
      },
    });
  }, [fieldName, registerField]);

  return (
    <Container>
      <label htmlFor={id}>
        <span>{label}</span>
        {description && <p>{description}</p>}
        <div>
          {choices.map((option, index) => (
            <CardImage key={option._id} image={option?.image || ''}>
              <label htmlFor={option?._id}>
                <input
                  ref={(ref) => {
                    inputRefs.current[index] = ref as HTMLInputElement;
                  }}
                  type="checkbox"
                  value={option?._id}
                  id={option?._id}
                />
                <span />
                {option.text}
              </label>
            </CardImage>
          ))}
        </div>
      </label>
      {transitions(
        (props, item) => item && <ErrorMessage style={props} message={error} />,
      )}
    </Container>
  );
};

export default ImagesChoice;
