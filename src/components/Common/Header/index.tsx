import React from 'react';
import { useLocation } from 'react-router-dom';

import { Container, NavLink } from './styles';

import logo from '../../../assets/logo.png';

const Header: React.FC = () => {
  const location = useLocation();

  if (
    location.pathname === '/' ||
    location.pathname.includes('forgot') ||
    location.pathname.includes('research/')
  )
    return null;

  return (
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
};

export default Header;
