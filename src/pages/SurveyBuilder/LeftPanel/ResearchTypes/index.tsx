import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FaSlidersH } from 'react-icons/fa';

import QuestionBox from '../../../../components/SurveyBuilder/QuestionBox';
import FieldConfiguration from './FieldConfigurations';

import { QuestionsContainer } from './styles';

import { ApplicationState } from '../../../../store';
import addFieldToForm from '../../../../services/logic/addFieldToForm';

interface QuestionDTO {
  name: string;
  cover: string;
  alias: string;
  description: string;
}

interface ResearchTypesProps {
  questions: QuestionDTO[];
}

const ResearchTypes: React.FC<ResearchTypesProps> = ({ questions }) => {
  const dispatch = useDispatch();

  const [focusedQuestionId, totalQuestions] = useSelector<
    ApplicationState,
    [string | null, number]
  >((state) => [
    state.questions.focusedQuestion,
    state.questions.questions.length,
  ]);

  const handleQuestionBoxClick = useCallback(
    (alias) => {
      addFieldToForm(dispatch, alias, totalQuestions);
    },
    [dispatch, totalQuestions],
  );

  return (
    <div>
      <h5>
        {focusedQuestionId === null ? 'Perguntas Básicas' : 'Configurações'}
      </h5>
      {focusedQuestionId === null ? (
        <QuestionsContainer>
          {questions.map((question) => (
            <QuestionBox
              key={question.alias}
              name={question.name}
              description={question.description}
              image={question.description}
              icon={FaSlidersH}
              onClick={() => handleQuestionBoxClick(question.alias)}
            />
          ))}
        </QuestionsContainer>
      ) : (
        <FieldConfiguration fieldId={focusedQuestionId} />
      )}
    </div>
  );
};

export default ResearchTypes;
