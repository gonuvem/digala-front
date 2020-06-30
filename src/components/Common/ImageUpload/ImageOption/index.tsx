import React from 'react';

import { Container } from './styles';

interface ImageOptionProps {
  image: string;
  label?: string;
}

const ImageOption: React.FC<ImageOptionProps> = ({ image, label }) => (
  <Container>
    <img alt="option-background" src={image} />
    <input type="text" name="" id="" defaultValue={label} />
  </Container>
);

export default ImageOption;
