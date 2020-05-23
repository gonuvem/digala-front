import styled, { css } from 'styled-components';

import Colors from '../../utils/colors';

interface NavLinkProps {
  isActive?: boolean;
}

export const Container = styled.div`
  padding: 1.5rem;

  background-color: ${Colors.white};
  box-shadow: 0px 1px 8px rgba(0, 0, 0, 0.16);

  div {
    display: flex;
    justify-content: space-between;
    align-items: center;

    max-width: 1520px;
    margin: 0 auto;
  }
`;

export const NavLink = styled.a<NavLinkProps>`
  position: relative;
  text-decoration: none;
  color: ${(props) => (props.isActive ? Colors.primary : Colors.black)};

  ${(props) =>
    props.isActive &&
    css`
      font-weight: 500;

      &:after {
        content: '';
        width: 80%;
        position: absolute;
        height: 2px;
        background-color: ${Colors.primary};
        left: 0;
        right: 0;
        margin-left: auto;
        margin-right: auto;
        bottom: -0.5rem;
      }
    `}

  & + a {
    margin-left: 1.5rem;
  }
`;
