import styled from 'styled-components';

import Colors from '../../../utils/colors';

export const Container = styled.div`
  div:first-child {
    display: flex;
    align-items: end;

    span {
      display: inline-block;
      font-weight: 500;
      color: ${Colors.black};
      margin-bottom: 1rem;
    }
  }
`;

export const OptionsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  button {
    margin-top: 1.5rem;
  }
`;
