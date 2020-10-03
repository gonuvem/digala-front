/* eslint-disable react/no-array-index-key */
import React, { useMemo } from 'react';
import { useQuery } from '@apollo/react-hooks';

import LoadingSpinner from '../../../components/Common/LoadingSpinner';
import GraphManager from '../../../components/Charts/ChartManager';

import {
  Container,
  QuestionBox,
  ChartContainer,
  LoadingContainer,
} from './styles';

import { GET_CHARTS } from '../../../services/requests/charts';

interface ResponsesAnalysisProps {
  formId: string;
}

interface IChart {
  type: string;
  name: string;
  data: {
    id: string;
    day: string;
    label: string;
    respostas: number;
    value: number;
  }[];
}

const ResponsesAnalysis: React.FC<ResponsesAnalysisProps> = ({ formId }) => {
  const { loading: getChartsLoading, data: chartData } = useQuery(GET_CHARTS, {
    variables: { id: formId },
    fetchPolicy: 'no-cache',
  });

  const charts: IChart[] = useMemo(() => {
    if (chartData?.data?.error === null) {
      return chartData.data.data.filter(
        (chart: IChart) => chart.data.length > 0,
      );
    }
    return [];
  }, [chartData]);

  return (
    <Container>
      {getChartsLoading && (
        <LoadingContainer>
          <LoadingSpinner />
        </LoadingContainer>
      )}
      {charts.map((chart, index) => (
        <QuestionBox key={`${chart.name}-${index}`}>
          <h1>{chart.name}</h1>
          <ChartContainer>
            <GraphManager chart={chart} />
          </ChartContainer>
        </QuestionBox>
      ))}
    </Container>
  );
};

export default ResponsesAnalysis;
