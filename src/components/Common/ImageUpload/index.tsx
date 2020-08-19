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
  imageOptions: ListOptionsProps[];
}

interface ListOptionsProps {
  _id: string;
  text: string;
  value?: string;
  label?: string;
  image?: string;
  loading?: boolean;
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
    (newData: { _id: string; text: string }) => {
      const updatedImageOptions = imageOptions.map((imageOption) => {
        if (imageOption._id === newData._id) {
          return {
            ...imageOption,
            text: newData.text,
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
      const newImageOption: ListOptionsProps = {
        image: imageData.secure_url,
        text: '',
        loading: false,
        _id: uuid(),
      };
      onChange([...imageOptions, newImageOption]);
    },
    [imageOptions, onChange],
  );

  const handleUploadPhoto = useCallback(
    (event) => {
      const preImageOption: ListOptionsProps = {
        image: '',
        text: '',
        _id: '',
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
            key={option._id}
            id={option._id}
            text={option?.text}
            image={option.image || ''}
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
