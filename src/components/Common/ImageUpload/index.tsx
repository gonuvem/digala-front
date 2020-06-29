import React, { useRef, useCallback } from 'react';

import ImageOption from './ImageOption';
import SolidButton from '../SolidButton';

import { Container, OptionsContainer } from './styles';

interface ImageUploadProps {
  label?: string;
}

const ImageUpload: React.FC<ImageUploadProps> = ({ label }) => {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleClick = useCallback(() => {
    fileInputRef.current?.click();
  }, []);

  const handleUpload = useCallback((event) => {
    const file = event.target.files[0];
    console.log('File >> ', file);
  }, []);

  return (
    <Container>
      <div>{label && <span>{label}</span>}</div>
      <OptionsContainer>
        <ImageOption />
        <input
          ref={fileInputRef}
          onChange={handleUpload}
          style={{ display: 'none' }}
          type="file"
          name="newOption"
          id="newOptionFile"
        />
        <SolidButton onClick={handleClick}>Adicionar opção</SolidButton>
      </OptionsContainer>
    </Container>
  );
};

export default ImageUpload;
