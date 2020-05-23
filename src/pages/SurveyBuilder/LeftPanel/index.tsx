import React from 'react';

import { Container, QuestionsContainer } from './styles';

const LeftPanel: React.FC = () => (
  <Container>
    <nav>
      <span>Tipos</span>
      <span>Estilos</span>
      <span>Configurações</span>
    </nav>
    <div>
      <h5>Perguntas Básicas</h5>
      <QuestionsContainer />
    </div>
  </Container>
);

export default LeftPanel;
