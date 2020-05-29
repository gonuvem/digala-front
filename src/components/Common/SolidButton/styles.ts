import styled from 'styled-components';
import { shade } from 'polished';

import Colors from '../../../utils/colors';

export const Container = styled.button`
  display: flex;
  justify-content: center;
  border: none;
  align-items: center;
  height: 2.9375rem;
  padding: 0rem 1.5rem;
  background: ${Colors.primary};
  text-decoration: none;
  color: ${Colors.white};
  box-shadow: 0 0.25rem 0.5rem rgba(0, 0, 0, 0.16);
  border-radius: 4px;

  font-size: 1.125rem;
  font-weight: bold;

  transition: background-color 0.2s;

  svg {
    margin-right: 0.5rem;
  }

  &:hover {
    background: ${shade(0.2, Colors.primary)};
  }
`;
