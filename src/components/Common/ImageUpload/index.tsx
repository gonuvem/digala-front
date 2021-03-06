import React, { useRef, useCallback } from 'react';
import { uuid } from 'uuidv4';

import ImageOption from './ImageOption';
import SolidButton from '../SolidButton';
import DashedUploader from '../DashedUploader';

import { Container, OptionsContainer } from './styles';

import uploadImage from '../../../services/logic/uploadImage';

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
    (newData: { id: string; text: string }) => {
      const updatedImageOptions = imageOptions.map((imageOption) => {
        if (imageOption._id === newData.id) {
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
      if (fileInputRef.current) {
        fileInputRef.current.value = '';
      }
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
    [imageOptions, onChange, onPhotoUploaded],
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
        <DashedUploader
          handleClick={handleClick}
          text="Clique aqui para adicionar uma nova op????o"
        />
        <input
          ref={fileInputRef}
          onChange={handleUploadPhoto}
          style={{ display: 'none' }}
          type="file"
          name="newOption"
          id="newOptionFile"
        />
      </OptionsContainer>
    </Container>
  );
};

export default ImageUpload;
