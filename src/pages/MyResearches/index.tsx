import React from 'react';

import { Container, TableHeader } from './styles';

import add from '../../assets/add_icon.png';

const MyReasearches: React.FC = () => (
  <Container>
    <TableHeader>
      <h1>Minhas pesquisas</h1>
      <a href="/">
        <img src={add} alt="editar" />
        Nova Pesquisa
      </a>
    </TableHeader>
  </Container>
);

export default MyReasearches;
