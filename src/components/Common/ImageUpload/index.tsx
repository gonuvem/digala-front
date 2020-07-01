import React, { useRef, useCallback } from 'react';
import { uuid } from 'uuidv4';

import ImageOption from './ImageOption';
import SolidButton from '../SolidButton';

import { Container, OptionsContainer } from './styles';

import uploadImage from '../../../services/logic/uploadImage';
import { ImageChoice } from '../../../store/ducks/questions/types';

interface ImageUploadProps {
  label?: string;
  onChange: Function;
  imageOptions: ImageChoice[];
}

const ImageUpload: React.FC<ImageUploadProps> = ({
  label,
  onChange,
  imageOptions,
}) => {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleClick = useCallback(() => {
    fileInputRef.current?.click();
  }, []);

  const onPhotoUploaded = useCallback(
    (imageData) => {
      const newImageOption: ImageChoice = {
        image: imageData.secure_url,
        label: '',
        loading: false,
        id: uuid(),
      };
      onChange([...imageOptions.splice(-1, 1), newImageOption]);
    },
    [imageOptions],
  );

  const handleUploadPhoto = useCallback(
    (event) => {
      const preImageOption: ImageChoice = {
        image: '',
        label: '',
        id: '',
        loading: true,
      };
      onChange([...imageOptions, preImageOption]);
      uploadImage(event, onPhotoUploaded);
    },
    [imageOptions],
  );

  return (
    <Container>
      <div>{label && <span>{label}</span>}</div>
      <OptionsContainer>
        {imageOptions.map((option) => (
          <ImageOption
            id={option.id}
            image={option.image}
            label={option.label}
            loading={option.loading}
          />
        ))}
        <input
          ref={fileInputRef}
          onChange={handleUploadPhoto}
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
