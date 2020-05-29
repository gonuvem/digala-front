import styled, { css } from 'styled-components';

import Colors from '../../utils/colors';

interface NavLinkProps {
  isActive?: boolean;
}

export const Container = styled.div``;

export const SurveyBuilderHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  h5 {
    font-size: 1.3rem;
    font-weight: 700;
    flex: 1;
  }

  nav {
    flex: 2;
  }
`;

export const NavLink = styled.a<NavLinkProps>`
  text-decoration: none;
  color: ${Colors.black};

  transition: color 0.3s;

  & + a {
    margin-left: 1.5rem;
  }

  &:hover {
    color: ${Colors.primary};
    font-weight: 500;
  }

  ${(props) => props.isActive
    && css`
      font-weight: 500;
      color: ${Colors.primary};
    `}
`;

// Erase this line
export const Col01 = styled.div`
  max-width: 27.25rem;
`;
