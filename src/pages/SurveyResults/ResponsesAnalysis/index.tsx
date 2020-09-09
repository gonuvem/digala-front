import React, { useMemo } from 'react';
import { useQuery } from '@apollo/react-hooks';

import GraphManager from '../../../components/Graphs/GraphManager';

import { LIST_OWN_RESPONSES_WITH_ANSWERS } from '../../../services/requests/answers';

import { Container, QuestionBox } from './styles';

import { mockData } from './data';

interface ResponsesAnalysisProps {
  formId: string;
}

const ResponsesAnalysis: React.FC<ResponsesAnalysisProps> = ({ formId }) => {
  const { data: responsesData, loading: responsesLoading } = useQuery(
    LIST_OWN_RESPONSES_WITH_ANSWERS,
    {
      variables: {
        form: formId,
        perPage: 50,
      },
    },
  );

  const responses: any[] = useMemo(() => {
    if (responsesData && !responsesLoading) {
      return responsesData.data.responses;
    }
    return undefined;
  }, [responsesData, responsesLoading]);

  console.log('Responses: ', responses);

  return (
    <Container>
      {mockData.map((data) => (
        <QuestionBox>
          <h1>{data.name}</h1>
          <div>
            <GraphManager graph={data} />
          </div>
        </QuestionBox>
      ))}
    </Container>
  );
};

export default ResponsesAnalysis;
