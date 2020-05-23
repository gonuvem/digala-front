import styled from 'styled-components';
import { transparentize, shade } from 'polished';

import Colors from '../../../utils/colors';

export const Container = styled.div`
  background-color: ${Colors.white};
  border-radius: 4px;

  nav {
    display: flex;
    justify-content: space-between;
    padding: 2rem 2rem 1rem 2rem;
    margin-bottom: 1.5rem;
    border-bottom: solid 1px ${transparentize(0.88, Colors.black)};

    span {
      cursor: pointer;
      font-weight: 500;
      transition: color 0.3s;

      &:hover {
        color: ${shade(0.2, Colors.primary)};
      }
    }
  }

  > div {
    padding: 0 2rem 2rem 2rem;
  }
`;

export const QuestionsContainer = styled.div``;
