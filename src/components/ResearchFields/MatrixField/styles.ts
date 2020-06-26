import styled from 'styled-components';

import Colors from '../../../utils/colors';

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  label {
    font-weight: 500;
    color: ${Colors.black};
    display: flex;
    flex-direction: column;

    p {
      font-weight: 400;
      margin-top: 0.5rem;
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
