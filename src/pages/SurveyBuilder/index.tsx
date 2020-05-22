import React from 'react';
import { uuid } from 'uuidv4';

import { Container } from './styles';

import Header from '../../components/Header';

const choices = ['Escolha 01', 'Escolha 02', 'Escolha 03'];

const SurveyBuilder: React.FC = () => (
  <Container>
    <Header />
  </Container>
);

export default SurveyBuilder;
