import React from 'react';

import { Container, Col01, SurveyBuilderHeader } from './styles';

import SolidButton from '../../components/Common/SolidButton';
import LeftPanel from './LeftPanel';

// Col01 component is just for test, erase it.

const SurveyBuilder: React.FC = () => (
  <Container>
    <SurveyBuilderHeader>
      <h5>Pesquisa Eleitoral de Lagoa Alegre</h5>
      <nav>
        <a href="/">Editar</a>
        <a href="/">Compartilhar</a>
        <a href="/">Resultados</a>
      </nav>
      <SolidButton text="Publicar" />
    </SurveyBuilderHeader>
  </Container>
);

export default SurveyBuilder;
