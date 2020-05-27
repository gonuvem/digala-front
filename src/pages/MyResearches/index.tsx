import React from 'react';

import Table from '../../components/MyResearches/Table';

import { Container, Header } from './styles';

import add from '../../assets/add_icon.png';

const MyReasearches: React.FC = () => (
  <Container>
    <Header>
      <h1>Minhas pesquisas</h1>
      <a href="/">
        <img src={add} alt="Nova pesquisa" />
        Nova Pesquisa
      </a>
    </Header>
    <Table />
  </Container>
);

export default MyReasearches;
