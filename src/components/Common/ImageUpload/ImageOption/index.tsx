import React from 'react';

import LoadingSpinner from '../../LoadingSpinner';

import { Container } from './styles';

interface ImageOptionProps {
  image: string;
  id: string;
  label?: string;
  loading?: boolean;
}

const ImageOption: React.FC<ImageOptionProps> = ({
  image,
  label,
  loading,
  id,
}) => (
  <Container>
    {loading ? (
      <div>
        <LoadingSpinner />
      </div>
    ) : (
      <>
        <img alt="option-background" src={image} />
        <input type="text" name="" id="" defaultValue={label} />
      </>
    )}
  </Container>
);

export default ImageOption;
