import React from 'react';

import { Container, NavLink, SurveyBuilderHeader } from './styles';

import SolidButton from '../../components/Common/SolidButton';
import LeftPanel from './LeftPanel';

const SurveyBuilder: React.FC = () => (
  <Container>
    <SurveyBuilderHeader>
      <h5>Pesquisa Eleitoral de Lagoa Alegre</h5>
      <nav>
        <NavLink href="/">Editar</NavLink>
        <NavLink href="/">Compartilhar</NavLink>
        <NavLink href="/">Resultados</NavLink>
      </nav>
      <SolidButton text="Publicar" />
    </SurveyBuilderHeader>
  </Container>
);

export default SurveyBuilder;
