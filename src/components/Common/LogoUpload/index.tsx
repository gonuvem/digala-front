import React, { useRef, useCallback } from 'react';

import uploadImage from '../../../services/logic/uploadImage';
import { ImageLogo } from '../../../store/ducks/forms/types';

import LoadingSpinner from '../../Common/LoadingSpinner';
import uploadIcon from '../../../assets/uploud_icon.png';

import { DashedContainer, ImgLogo, IconLogoUpload } from './styles';
interface LogoUploadProps {
  label?: string;
  onChange: Function;
  logo: LogoProps;
}

interface LogoProps {
  image: string;
  loading: boolean;
}

const LogoUpload: React.FC<LogoUploadProps> = ({ label, onChange, logo }) => {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const onPhotoUploaded = useCallback(
    (imageData) => {
      const newImageOption: ImageLogo = {
        image: imageData.secure_url,
        loading: false,
      };
      onChange(newImageOption);
    },
    [onChange],
  );

  const handleClick = useCallback(() => {
    fileInputRef.current?.click();
  }, []);

  const handleUploadPhoto = useCallback((event) => {
    const preImageOption: ImageLogo = {
      image: '',
      loading: true,
    };
    onChange(preImageOption);
    uploadImage(event, onPhotoUploaded);
  }, []);

  return (
    <>
      <p>{label}</p>
      <DashedContainer onClick={handleClick} hasLogo={!!logo.image}>
        {logo?.image ? (
          <ImgLogo alt="logo" src={logo.image} />
        ) : (
          <>
            {logo.loading ? (
              <LoadingSpinner />
            ) : (
              <div>
                <IconLogoUpload src={uploadIcon} alt="Upload Logo" />
                <p>Coloque sua marca aqui</p>
              </div>
            )}
          </>
        )}
      </DashedContainer>
      <input
        ref={fileInputRef}
        onChange={handleUploadPhoto}
        style={{ display: 'none' }}
        type="file"
        name="logo"
        id="logoFile"
      />
    </>
  );
};

export default LogoUpload;
