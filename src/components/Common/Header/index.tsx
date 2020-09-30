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
        <a href="/">
          <img src={logo} alt="digala-logo" />
        </a>
        <nav>
          <NavLink isActive href="/my_surveys">
            Pesquisas
          </NavLink>
          <NavLink href="#">Modelos</NavLink>
          <NavLink href="#">Ajuda</NavLink>
          <NavLink href="#">Perfil</NavLink>
        </nav>
      </div>
    </Container>
  );
};

export default Header;
