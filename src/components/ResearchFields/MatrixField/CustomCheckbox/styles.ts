import styled from 'styled-components';

import Colors from '../../../../utils/colors';

export const Container = styled.label`
  cursor: pointer;
  align-items: center;

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
