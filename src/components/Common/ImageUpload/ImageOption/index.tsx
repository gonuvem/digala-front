import React, { useState, useEffect, useRef } from 'react';

import LoadingSpinner from '../../LoadingSpinner';

import useDebounce from '../../../../hooks/useDebounce';

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
  id,
}) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [inputValue, setInputValue] = useState('');

  const debouncedTrigger = useDebounce(inputValue, 500);

  useEffect(() => {
    if (id !== '') {
      onChange({ id, text: inputRef.current?.value });
    }
  }, [debouncedTrigger]);

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
            ref={inputRef}
            value={inputValue}
            onChange={(event) => setInputValue(event.target.value)}
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
