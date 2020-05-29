import React from 'react';

import { Container, PanelArea, NavLink } from './styles';

const Preview: React.FC = () => (
  <Container>
    <nav>
      <NavLink href="/">Editar</NavLink>
      <NavLink href="/">Compartilhar</NavLink>
      <NavLink href="/">Resultados</NavLink>
    </nav>
    <PanelArea />
  </Container>
);

export default Preview;
