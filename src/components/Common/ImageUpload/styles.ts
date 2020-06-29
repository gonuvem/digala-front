import styled from 'styled-components';

import Colors from '../../../utils/colors';

export const Container = styled.div`
  div {
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
