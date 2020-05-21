import styled from 'styled-components';

import Colors from '../../../utils/colors';

export const Container = styled.label`
  display: flex;
  cursor: pointer;

  border: solid 1px ${Colors.black};
  border-radius: 4px;
  padding: 0.8rem 1rem;

  span {
    display: block;
    border: solid 1px ${Colors.black};
    width: 1.5rem;
    height: 1.5rem;
    border-radius: 2px;
  }

  input {
    opacity: 0;
    position: absolute;
    cursor: pointer;

    &:checked ~ span {
      background-color: black;
    }
  }
`;
