import styled from 'styled-components';

import Colors from '../../../utils/colors';

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const LoadingContainer = styled.div`
  position: relative;
  width: 100%;
  margin-top: 2rem;
`;

export const QuestionBox = styled.div`
  min-width: 45%;
  flex: 1;

  padding: 1rem;

  border: solid 1px ${Colors.black};
  border-radius: 4px;

  margin: 1rem;

  h1 {
    margin-bottom: 1rem;
    font-size: 1.2rem;
  }
`;

export const ChartContainer = styled.div`
  height: 20rem;
`;
