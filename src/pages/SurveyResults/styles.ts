import styled, { css } from 'styled-components';
import { transparentize } from 'polished';

import Colors from '../../utils/colors';

interface PanelProps {
  distance: number;
}

interface PanelButtonProps {
  selected: boolean;
}

export const Container = styled.div``;

export const Navigation = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  nav {
    flex: 2;
    margin-left: 10rem;

    a {
      text-decoration: none;
      color: ${Colors.black};

      transition: color 0.2s;

      &:hover {
        color: ${Colors.primary};
      }
    }

    a + a {
      margin-left: 1.5rem;
    }

    #results {
      font-weight: 500;
      color: ${Colors.primary};
    }
  }
`;

export const Panel = styled.div<PanelProps>`
  padding: 2.5rem 2rem;
  margin-top: 4rem;

  background-color: ${Colors.white};
  border-radius: 8px;

  nav {
    display: flex;
    position: relative;
    padding-bottom: 1.5rem;
    margin-bottom: 1.5rem;

    border-bottom: solid 1px ${transparentize(0.88, Colors.black)};

    &::after {
      content: '';
      width: 5rem;
      position: absolute;
      height: 2px;
      background-color: ${Colors.primary};
      left: 3.3rem;
      transform: translateX(${(props) => props.distance}px);
      margin: 0 auto;
      bottom: 0;

      transition: transform 0.3s ease-in-out;
    }
  }
`;

export const PanelButton = styled.button<PanelButtonProps>`
  font-weight: 600;
  color: ${Colors.black};
  text-transform: uppercase;

  border: none;
  background: none;

  transition: color 0.2s;

  & + button {
    margin-left: 2rem;
  }

  ${(props) =>
    props.selected &&
    css`
      color: ${Colors.primary};
    `}
`;

export const ModalContent = styled.div`
  div {
    display: flex;
    justify-content: space-between;

    margin-top: 1rem;
  }
`;
