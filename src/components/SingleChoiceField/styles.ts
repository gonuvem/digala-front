import styled from 'styled-components';

import Colors from '../../utils/colors';

export const Container = styled.div`
  > label {
    font-weight: 500;
    color: ${Colors.black};
    display: flex;
    flex-direction: column;

    label + label {
      margin-top: 1rem;
    }

    p {
      font-weight: 400;
      margin-top: 0.5rem;
    }
  }
`;
