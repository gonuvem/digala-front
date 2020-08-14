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

  const handleLabelChange = useCallback(
    (newData: { id: string; label: string }) => {
      const updatedImageOptions = imageOptions.map((imageOption) => {
        if (imageOption.id === newData.id) {
          return {
            ...imageOption,
            label: newData.label,
          };
        }
        return imageOption;
      });
      onChange(updatedImageOptions);
    },
    [imageOptions, onChange],
  );

  const onPhotoUploaded = useCallback(
    (imageData) => {
      const newImageOption: ImageChoice = {
        image: imageData.secure_url,
        text: '',
        loading: false,
        id: uuid(),
      };
      onChange([...imageOptions, newImageOption]);
    },
    [imageOptions, onChange],
  );

  const handleUploadPhoto = useCallback(
    (event) => {
      const preImageOption: ImageChoice = {
        image: '',
        text: '',
        id: '',
        loading: true,
      };
      onChange([...imageOptions, preImageOption]);
      uploadImage(event, onPhotoUploaded);
    },
    [imageOptions, onChange],
  );

  return (
    <Container>
      <div>{label && <span>{label}</span>}</div>
      <OptionsContainer>
        {imageOptions.map((option) => (
          <ImageOption
            key={option.id}
            id={option.id}
            image={option.image}
            loading={option.loading}
            onChange={handleLabelChange}
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
