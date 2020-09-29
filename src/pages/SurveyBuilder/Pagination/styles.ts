import styled from 'styled-components';
import { shade } from 'polished';

import Colors from '../../../utils/colors';

export const Container = styled.div`
  margin-left: 2.5rem;

  #loading-container {
    width: 3.9rem;
  }
`;

export const PanelArea = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  margin-top: 1.5rem;
  padding: 1rem 1.5rem;

  background-color: ${Colors.secondary};
  color: ${Colors.smokeWhite};
  border-radius: 4px;

  svg {
    color: ${Colors.black};
    background-color: ${Colors.white};
    padding: 0.5rem;
    border-radius: 4px;
  }

  span {
    margin-top: 0.5rem;
    font-weight: 500;
  }

  #divisor {
    height: 1px;
    width: 100%;

    margin-top: 1rem;
    margin-bottom: 1rem;

    background-color: ${Colors.smokeWhite};
  }

  svg:last-child {
    cursor: pointer;
    color: ${Colors.secondary};
    background-color: ${Colors.smokeWhite};
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
    padding: 0.5rem 1rem 0.5rem 1rem;

    transition: color 0.3s, background-color 0.3s;

    &:hover {
      background-color: ${shade(0.1, Colors.white)};
    }
  }
`;
