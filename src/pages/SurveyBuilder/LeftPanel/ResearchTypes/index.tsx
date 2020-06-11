import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { FaSlidersH } from 'react-icons/fa';

import QuestionBox from '../../../../components/SurveyBuilder/QuestionBox';

import { QuestionsContainer } from './styles';
import * as QuestionsActions from '../../../../store/ducks/questions/actions';

interface ResearchTypes {
  questions: QuestionDTO[];
}

interface QuestionDTO {
  name: string;
  cover: string;
  alias: string;
  description: string;
}

const ResearchTypes: React.FC<ResearchTypes> = ({ questions }) => {
  const dispatch = useDispatch();

  const addFieldToForm = useCallback(() => {
    dispatch(
      QuestionsActions.addQuestion({
        alias: 'Slider',
      }),
    );
  }, [dispatch]);

  return (
    <div>
      <h5>Perguntas Básicas</h5>
      <QuestionsContainer>
        {questions.map((question) => (
          <QuestionBox
            name={question.name}
            description={question.description}
            image={question.description}
            icon={FaSlidersH}
          />
        ))}
      </QuestionsContainer>
    </div>
  );
};

export default ResearchTypes;
