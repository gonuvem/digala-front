import styled from 'styled-components';
import { transparentize } from 'polished';

import Colors from '../../utils/colors';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 100vh;
`;

export const ResearchBody = styled.div`
  max-width: 50%;

  form {
    margin-top: 1rem;
    padding: 1.5rem 2rem;

    background-color: ${Colors.white};
    border-radius: 4px;

    #separator {
      width: 100%;
      height: 2px;

      margin-top: 3.5rem;

      background-color: ${transparentize(0.88, Colors.black)};
    }
  }
`;

export const ResearchHeader = styled.div`
  padding: 1.5rem;

  background-color: ${Colors.white};
  border-radius: 4px;

  h3 {
    font-size: 1.5rem;
    font-weight: 500;
    color: ${Colors.primary};
  }

  p {
    margin-top: 1rem;
    opacity: 0.9;
  }
`;

export const ResearchFooter = styled.div``;
