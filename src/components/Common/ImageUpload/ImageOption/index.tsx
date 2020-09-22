import React from 'react';

import LoadingSpinner from '../../LoadingSpinner';

import { Container } from './styles';

interface ListOptionsProps {
  id: string;
  onChange: Function;
  text?: string;
  image?: string;
  loading?: boolean;
}

const ImageOption: React.FC<ListOptionsProps> = ({
  image,
  loading,
  onChange,
  text,
  id,
}) => {
  return (
    <Container>
      {loading ? (
        <div>
          <LoadingSpinner />
        </div>
      ) : (
        <>
          <img alt="option-background" src={image} />
          <input
            defaultValue={text}
            onChange={(event) => onChange({ id, text: event.target.value })}
            type="text"
            name=""
            id=""
          />
        </>
      )}
    </Container>
  );
};

export default ImageOption;
