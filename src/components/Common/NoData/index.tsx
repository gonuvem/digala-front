import React from 'react';

import nothingHereIllustration from '../../../assets/NothingHereIllustration.svg';

import { Container } from './styles';

interface NoDataProps {
  message: string;
}

const NoData: React.FC<NoDataProps> = ({ message }) => {
  return (
    <Container>
      <img src={nothingHereIllustration} alt="Nenhum conteúdo" />
      <p>{message}</p>
    </Container>
  );
};

export default NoData;
