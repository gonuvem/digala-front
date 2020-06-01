import styled from 'styled-components';

import Colors from '../../../utils/colors';

export const Container = styled.div`
  margin-left: 2.5rem;
`;

export const PanelArea = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin-top: 1.5rem;
  padding: 1rem 1.5rem;

  background-color: ${Colors.secondary};
  color: ${Colors.smokeWhite};
  border-radius: 4px;

  svg:first-child {
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
    background-color: ${Colors.secondary};
    border-radius: 50%;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
    padding: 0.5rem;
  }
`;
