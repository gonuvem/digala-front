import React, { useMemo } from 'react';

import { config } from 'process';
import IconTextField from '../../components/ResearchFields/IconTextField';
import DateTimeField from '../../components/ResearchFields/DateTimeField';
import ImagesChoice from '../../components/ResearchFields/ImagesChoice';
import SingleChoiceField from '../../components/ResearchFields/SingleChoiceField';

import { SurveyQuestion } from './ISurvey';
import FieldsTypes from '../../utils/fieldsTypes';
import mountQuestionPayload from '../../services/logic/mountQuestionPayload';

interface FieldProps {
  question: SurveyQuestion;
}

const Question: React.FC<FieldProps> = ({ question }) => {
  console.log('Question >> ', question);

  const questionPayload = useMemo(() => {
    return mountQuestionPayload(question);
  }, [question]);

  switch (question.type.alias) {
    case FieldsTypes.Email:
      return <IconTextField {...questionPayload} />;
    case FieldsTypes.Date:
      return <DateTimeField {...questionPayload} />;
    case FieldsTypes.ImageChoice:
      return <ImagesChoice {...questionPayload} />;
    case FieldsTypes.SingleChoice:
      return <SingleChoiceField {...questionPayload} />;
    case FieldsTypes.Link:
      return <IconTextField {...questionPayload} />;
    default:
      return null;
  }
};

export default Question;
