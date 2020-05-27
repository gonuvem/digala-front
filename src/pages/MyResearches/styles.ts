import styled from 'styled-components';
import { shade } from 'polished';

import Colors from '../../utils/colors';

export const Container = styled.div`
  background: ${Colors.white};
  height: 100vh;
  padding: 1.875rem 2.5rem;
  border-radius: 4px;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  flex: 1;
  margin-bottom: 1.125rem;

  h1 {
    font-size: 1.25rem;
  }

  a {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 2.9375rem;
    width: 13.625rem;
    background: ${Colors.primary};
    text-decoration: none;
    color: ${Colors.white};
    box-shadow: 0 0.25rem 0.5rem rgba(0, 0, 0, 0.16);
    border-radius: 4px;

    font-size: 1.125rem;
    font-weight: bold;

    transition: background-color 0.2s;

    &:hover {
      background: ${shade(0.2, Colors.primary)};
    }
  }

  img {
    height: 1.125rem;
    width: 1.125rem;
    margin-right: 1.125rem;
  }
`;
