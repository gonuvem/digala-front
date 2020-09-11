import React from 'react';

import GraphManager from '../../../components/Graphs/GraphManager';

import { Container, QuestionBox, ChartContainer } from './styles';

import { mockData } from './data';

interface ResponsesAnalysisProps {
  formId: string;
}

const ResponsesAnalysis: React.FC<ResponsesAnalysisProps> = ({ formId }) => {
  return (
    <Container>
      {mockData.map((data) => (
        <QuestionBox>
          <h1>{data.name}</h1>
          <ChartContainer>
            <GraphManager graph={data} />
          </ChartContainer>
        </QuestionBox>
      ))}
    </Container>
  );
};

export default ResponsesAnalysis;
