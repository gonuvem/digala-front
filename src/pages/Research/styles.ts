import styled from 'styled-components';
import { transparentize } from 'polished';

import Colors from '../../utils/colors';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
`;

export const ResearchBody = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin-top: 5rem;
  max-width: 45%;

  form {
    display: flex;
    flex-direction: column;
    align-items: center;

    margin-top: 1rem;
    padding: 1.5rem 2rem;

    background-color: ${Colors.white};
    border-radius: 4px;

    #form-separator {
      width: 100%;
      height: 2px;

      margin-top: 3.5rem;
      margin-bottom: 3.5rem;

      background-color: ${transparentize(0.88, Colors.black)};
    }
  }

  #research-separator {
    height: 2px;
    width: 25%;

    margin-top: 3rem;
    margin-bottom: 2rem;

    background-color: ${transparentize(0.75, Colors.primary)};
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

export const ResearchFooter = styled.div`
  padding: 2rem 1.5rem;
  margin-top: 1rem;

  background-color: ${Colors.white};
  border-radius: 4px;

  p {
    opacity: 0.8;
    text-align: center;
  }
`;
