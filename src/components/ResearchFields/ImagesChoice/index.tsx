import React, { useState } from 'react';
import { Container, CardImage } from './styles';

interface ImagesChoiceProps {
  description?: string;
  label: string;
  choices: {
    img: string;
    name: string;
  }[];
}

const ImagesChoice: React.FC<ImagesChoiceProps> = ({
  label,
  description,
  choices,
}) => {
  const [selectedImage, setSelectedImage] = useState(1);
  return (
    <Container>
      <label>
        {label}
        {description && <p>{description}</p>}
        <div>
          {choices.map((option, index) => (
            <CardImage
              image={option.img}
              isSelected={index === selectedImage}
              onClick={() => setSelectedImage(index)}
            >
              <div>
                <button />
                <p>{option.name}</p>
              </div>
            </CardImage>
          ))}
        </div>
      </label>
    </Container>
  );
};

export default ImagesChoice;
