import React, { useState, useCallback } from 'react';
import { Container, CardImage } from './styles';

import { ImageChoice } from '../../../store/ducks/questions/types';

interface ImagesChoiceProps {
  description?: string;
  multipleChoice: boolean;
  choiceMaxAmmount: number;
  label: string;
  id: string;
  choices: ImageChoice[];
}

const ImagesChoice: React.FC<ImagesChoiceProps> = ({
  label,
  description,
  multipleChoice,
  choiceMaxAmmount,
  choices,
  id,
}) => {
  const [selectedImages, setSelectedImages] = useState<number[]>([]);

  const handleSelectImage = useCallback(
    (index: number) => {
      if (multipleChoice) {
        setSelectedImages((state) => {
          if (state.includes(index)) {
            return state;
          }
          return [...state.slice(-1 * (choiceMaxAmmount - 1)), index];
        });
        return;
      }
      setSelectedImages([index]);
    },
    [multipleChoice, choiceMaxAmmount],
  );

  return (
    <Container>
      <label htmlFor={id}>
        {label}
        {description && <p>{description}</p>}
        <div>
          {choices.map((option, index) => (
            <CardImage
              image={option.image}
              isSelected={selectedImages.includes(index)}
              onClick={() => handleSelectImage(index)}
            >
              <div>
                <button type="button" />
                <p>{option.label}</p>
              </div>
            </CardImage>
          ))}
        </div>
      </label>
    </Container>
  );
};

export default ImagesChoice;
