import styled from 'styled-components';
import { transparentize } from 'polished';

import Colors from '../../../utils/colors';

export const Container = styled.label`
  display: flex;
  align-items: center;
  cursor: pointer;

  border: solid 1px ${Colors.black};
  border-radius: 4px;
  padding: 0.8rem 1rem;
  margin: 0 1rem 1rem 0;
  transition: background-color 0.2s;

  &:hover {
    background-color: ${transparentize(0.97, Colors.black)};
  }

  span {
    display: block;
    border: solid 1px ${Colors.black};
    width: 1.5rem;
    height: 1.5rem;
    border-radius: 2px;
    margin-right: 1rem;
    transition: background-color 0.3s;
  }

  input {
    opacity: 0;
    position: absolute;
    cursor: pointer;

    &:checked ~ span {
      background-color: ${Colors.primary};
      border-color: ${Colors.primary};
    }
  }
`;
