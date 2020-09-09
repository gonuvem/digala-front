import styled from 'styled-components';

import Colors from '../../../utils/colors';

export const Container = styled.div`
  display: flex;
`;

export const QuestionBox = styled.div`
  flex: 1;

  padding: 1rem;

  border: solid 1px ${Colors.black};
  border-radius: 4px;

  h1 {
    margin-bottom: 1rem;
    font-size: 1.2rem;
  }

  div {
    height: 15rem;
  }
`;
