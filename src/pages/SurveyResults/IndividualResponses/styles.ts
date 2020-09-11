import styled from 'styled-components';
import { shade, transparentize } from 'polished';

import Colors from '../../../utils/colors';

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

export const LoadingContainer = styled.div`
  position: relative;
  margin-top: 2rem;
`;

export const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;

  margin-top: 3.75rem;
`;
