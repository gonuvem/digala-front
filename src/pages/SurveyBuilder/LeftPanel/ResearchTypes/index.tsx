import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { FaSlidersH } from 'react-icons/fa';

import QuestionBox from '../../../../components/SurveyBuilder/QuestionBox';

import { QuestionsContainer } from './styles';

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

  const handleQuestionBoxClick = useCallback(
    (alias) => addFieldToForm(dispatch, { alias }),
    [dispatch],
  );

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
            onClick={() => handleQuestionBoxClick(question.alias)}
          />
        ))}
      </QuestionsContainer>
    </div>
  );
};

export default ResearchTypes;
