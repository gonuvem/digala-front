import styled from 'styled-components';

import Colors from '../../../utils/colors';

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const QuestionBox = styled.div`
  flex: 1;
  min-width: 45%;

  padding: 1rem;

  border: solid 1px ${Colors.black};
  border-radius: 4px;

  margin: 1rem;

  h1 {
    margin-bottom: 1rem;
    font-size: 1.2rem;
  }

  div {
    height: 15rem;
  }
`;
