import React, { useRef, useCallback, useState } from 'react';

import ImageOption from './ImageOption';
import SolidButton from '../SolidButton';

import { Container, OptionsContainer } from './styles';

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

  const handleUpload = useCallback((event) => {
    const cloudinaryUrl = `https://api.cloudinary.com/v1_1/gonuvem/image/upload`;

    const file = event.target.files[0];
    const data = new FormData();

    data.append('api_key', '212628251629853');
    data.append('upload_preset', 'digala_preset');
    data.append('public_id', `${file.name}${Date.now()}`);
    data.append('file', file);

    fetch(cloudinaryUrl, {
      method: 'POST',
      body: data,
    })
      .then((response) => response.json())
      .then((responseData: any) => {
        const newImageOption: ImageOption = {
          image: responseData.secure_url,
          label: '',
        };
        setImageOptions((state) => [...state, newImageOption]);
      })
      .catch((err) => {
        console.error('Error >> ', err);
      });
  }, []);

  return (
    <Container>
      <div>{label && <span>{label}</span>}</div>
      <OptionsContainer>
        {imageOptions.map((option) => (
          <ImageOption image={option.image} label={option.label} />
        ))}
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
