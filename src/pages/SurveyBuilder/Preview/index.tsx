import React from 'react';
import { FiPlusCircle } from 'react-icons/fi';

import { Container, PanelArea, NavLink } from './styles';

const Preview: React.FC = () => (
  <Container>
    <nav>
      <NavLink href="/">Editar</NavLink>
      <NavLink href="/">Compartilhar</NavLink>
      <NavLink href="/">Resultados</NavLink>
    </nav>
    <PanelArea>
      <h1>Pesquisa eleitoral de Lagoa Alegre</h1>
      <button type="button">
        Arraste uma opção ao lado o clique no botão para adicionar uma nova
        pergunta
        <FiPlusCircle size={24} />
      </button>
    </PanelArea>
  </Container>
);

export default Preview;
