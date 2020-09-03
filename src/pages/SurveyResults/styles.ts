import styled, { css } from 'styled-components';
import { transparentize, shade } from 'polished';

import Colors from '../../utils/colors';

interface TableProps {
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

export const Table = styled.div<TableProps>`
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

export const TableHeader = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1rem 2rem;

  background-color: ${Colors.secondary};
  border-radius: 8px;

  h3 {
    font-size: 1rem;
    font-weight: 400;
    color: ${Colors.smokeWhite};
    text-transform: uppercase;
    letter-spacing: 1px;
  }
`;

export const TableRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 1.5rem 2rem 2rem 2rem;

  border-bottom: solid 1px ${transparentize(0.88, Colors.black)};

  span {
    transition: color 0.2s;
  }

  a {
    display: flex;
    align-items: center;

    text-decoration: none;

    img {
      width: 1.5rem;
      height: 1.5rem;
      margin-right: 0.5rem;
    }

    span {
      font-weight: 600;
      color: ${Colors.primary};

      &:hover {
        color: ${shade(0.2, Colors.primary)};
      }
    }
  }

  button {
    display: flex;
    align-items: center;

    border: none;
    background: none;

    img {
      width: 1rem;
      height: 1rem;
      margin-right: 0.5rem;
    }

    span {
      font-weight: 600;
      color: ${Colors.negative};

      &:hover {
        color: ${shade(0.2, Colors.negative)};
      }
    }
  }

  div {
    display: flex;

    a {
      margin-right: 0.5rem;
    }

    button {
      border-left: solid 2px ${transparentize(0.88, Colors.black)};
      padding-left: 0.5rem;
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
