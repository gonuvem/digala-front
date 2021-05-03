import React from 'react';
import { FaCloudUploadAlt } from 'react-icons/fa';

import LoadingSpinner from '../LoadingSpinner';

import { DashedContainer, ContentContainer } from './styles';

interface IDashedUploaderProps {
  handleClick(): void;
  text: string;
  isLoading?: boolean;
}

const DashedUploader: React.FC<IDashedUploaderProps> = ({
  handleClick,
  text,
  isLoading,
}) => {
  return (
    <DashedContainer onClick={handleClick}>
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <ContentContainer>
          <FaCloudUploadAlt width={42} />
          <p>{text}</p>
        </ContentContainer>
      )}
    </DashedContainer>
  );
};

export default DashedUploader;
