import React, { useRef, useCallback, useState, useEffect } from 'react';
import { FaCloudUploadAlt } from 'react-icons/fa';
import { useField } from '@unform/core';

import uploadImage from '../../../services/logic/uploadImage';

import LoadingSpinner from '../LoadingSpinner';

import { DashedContainer, ImgLogo } from './styles';

interface LogoUploadProps {
  label?: string;
  name: string;
  onChange: Function;
  logo: string;
}

const LogoUpload: React.FC<LogoUploadProps> = ({
  label,
  name,
  onChange,
  logo,
}) => {
  const [fileSecureUrl, setFileSecureUrl] = useState('');
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [isLoading, setIsLoading] = useState(false);

  const { fieldName, registerField, error, defaultValue } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: fileInputRef.current,
      path: undefined,
      getValue: (ref: any) => {
        return fileSecureUrl;
      },
    });
  }, [fieldName, fileSecureUrl, registerField]);

  const onPhotoUploaded = useCallback(
    (imageData) => {
      const newImageOption = imageData.secure_url;
      setFileSecureUrl(newImageOption);
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
                <FaCloudUploadAlt width={42} />
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
