import styled, { css } from 'styled-components';

import Colors from '../../../utils/colors';

interface NavLinkProps {
  isActive?: boolean;
}

export const Container = styled.div`
  flex: 2;
  margin-left: 2.5rem;
`;

export const PanelArea = styled.div`
  margin-top: 1.5rem;
  padding: 2.5rem 4rem;

  background-color: ${Colors.white};
  border-radius: 4px;

  h1 {
    font-weight: 500;
    font-size: 2.2rem;
  }

  button {
    display: flex;
    flex-direction: column;
    align-items: center;

    width: 100%;
    padding: 1rem 4rem;
    margin-top: 1.5rem;

    background: transparent;
    border: dashed 1px ${Colors.gray};
    opacity: 0.9;
    border-radius: 4px;

    svg {
      margin-top: 1rem;
    }
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

  ${(props) =>
    props.isActive &&
    css`
      font-weight: 500;
      color: ${Colors.primary};
    `}
`;
