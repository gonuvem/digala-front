import React, { useRef, useCallback, useState } from 'react';

import ImageOption from './ImageOption';
import SolidButton from '../SolidButton';

import { Container, OptionsContainer } from './styles';

import uploadImage from '../../../services/logic/uploadImage';

interface ImageOption {
  image: string;
  label?: string;
}

interface ImageUploadProps {
  label?: string;
}

const ImageUpload: React.FC<ImageUploadProps> = ({ label }) => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [imageOptions, setImageOptions] = useState<ImageOption[]>([]);

  const handleClick = useCallback(() => {
    fileInputRef.current?.click();
  }, []);

  const onPhotoUploaded = useCallback((imageData) => {
    const newImageOption: ImageOption = {
      image: imageData.secure_url,
      label: '',
    };
    setImageOptions((state) => [...state, newImageOption]);
  }, []);

  return (
    <Container>
      <div>{label && <span>{label}</span>}</div>
      <OptionsContainer>
        {/* {imageOptions.map((option) => (
          <ImageOption image={option.image} label={option.label} />
        ))} */}
        <ImageOption
          loading
          image="https://images.unsplash.com/photo-1593515529105-cec0bd21e1f7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
        />
        <input
          ref={fileInputRef}
          onChange={(event) => uploadImage(event, onPhotoUploaded)}
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
