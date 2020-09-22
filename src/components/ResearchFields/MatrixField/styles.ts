import styled from 'styled-components';

import Colors from '../../../utils/colors';

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  label {
    display: flex;
    flex-direction: column;

    span {
      font-weight: 500;
      color: ${Colors.black};
      margin-bottom: 0.5rem;
    }

    p {
      font-weight: 400;
      margin-bottom: 1rem;
    }
  }

  td {
    padding-top: 1rem;
  }
`;

export const LineTitle = styled.span`
  font-weight: 500;
`;
