import React from 'react';

import { Container, NavLink } from './styles';

import logo from '../../../assets/logo.png';

const Header: React.FC = () => (
  <Container>
    <div>
      <img src={logo} alt="digala-logo" />
      <nav>
        <NavLink isActive href="/survey">
          Pesquisas
        </NavLink>
        <NavLink href="/models">Modelos</NavLink>
        <NavLink href="/help">Ajuda</NavLink>
        <NavLink href="/profile">Perfil</NavLink>
      </nav>
    </div>
  </Container>
);

export default Header;
