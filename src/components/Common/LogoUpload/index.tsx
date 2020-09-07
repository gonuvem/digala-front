import React, { useRef, useCallback, useState } from 'react';

import uploadImage from '../../../services/logic/uploadImage';

import LoadingSpinner from '../LoadingSpinner';
import uploadIcon from '../../../assets/uploud_icon.png';

import { DashedContainer, ImgLogo, IconLogoUpload } from './styles';

interface LogoUploadProps {
  label?: string;
  onChange: Function;
  logo: string;
}

const LogoUpload: React.FC<LogoUploadProps> = ({ label, onChange, logo }) => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [isLoading, setIsLoading] = useState(false);

  const onPhotoUploaded = useCallback(
    (imageData) => {
      const newImageOption = imageData.secure_url;
      setIsLoading(false);
      onChange(newImageOption);
    },
    [onChange],
  );

  const handleClick = useCallback(() => {
    fileInputRef.current?.click();
  }, []);

  const handleUploadPhoto = useCallback(
    (event) => {
      const preImageOption = '';
      setIsLoading(true);
      onChange(preImageOption);
      uploadImage(event, onPhotoUploaded);
    },
    [onChange, onPhotoUploaded],
  );

  return (
    <>
      <p>{label}</p>
      <DashedContainer onClick={handleClick} hasLogo={!!logo}>
        {isLoading ? (
          <LoadingSpinner />
        ) : (
          <>
            {logo ? (
              <ImgLogo alt="logo" src={logo} />
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
