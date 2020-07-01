import React, { useState } from 'react';
import { Container, CardImage } from './styles';

import { ImageChoice } from '../../../store/ducks/questions/types';

interface ImagesChoiceProps {
  description?: string;
  label: string;
  id: string;
  choices: ImageChoice[];
}

const ImagesChoice: React.FC<ImagesChoiceProps> = ({
  label,
  description,
  choices,
  id,
}) => {
  const [selectedImage, setSelectedImage] = useState(1);
  return (
    <Container>
      <label htmlFor={id}>
        {label}
        {description && <p>{description}</p>}
        <div>
          {choices.map((option, index) => (
            <CardImage
              image={option.image}
              isSelected={index === selectedImage}
              onClick={() => setSelectedImage(index)}
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
