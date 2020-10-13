import React, { useCallback } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import { RiLogoutCircleLine } from 'react-icons/ri';
import { useApolloClient } from '@apollo/react-hooks';

import { Container, NavLink } from './styles';

import logo from '../../../assets/logo.png';

const Header: React.FC = () => {
  const location = useLocation();
  const history = useHistory();
  const client = useApolloClient();

  const handleLogout = useCallback(() => {
    try {
      localStorage.removeItem('Digl:token');
      client.resetStore();
      history.push('/');
    } catch (err) {
      console.error('Error on logout: ', err);
    }
  }, [client, history]);

  if (
    location.pathname === '/' ||
    location.pathname.includes('forgot') ||
    location.pathname.includes('research/')
  ) {
    return null;
  }

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
          <button type="button" onClick={handleLogout}>
            <RiLogoutCircleLine />
            Sair
          </button>
        </nav>
      </div>
    </Container>
  );
};

export default Header;
