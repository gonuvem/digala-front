import React from 'react';

import ImageOption from './ImageOption';

import { Container } from './styles';

interface ImageUploadProps {
  label?: string;
}

const ImageUpload: React.FC<ImageUploadProps> = ({ label }) => {
  return (
    <Container>
      <div>{label && <span>{label}</span>}</div>
      <ImageOption />
    </Container>
  );
};

export default ImageUpload;
