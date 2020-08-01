import React, { useMemo } from 'react';
import { FiLink, FiMail } from 'react-icons/fi';
import { FaPhoneAlt } from 'react-icons/fa';

import EmailQuestion from '../../components/ResearchFields/IconTextField';
import DateTimeField from '../../components/ResearchFields/DateTimeField';
import ImagesChoice from '../../components/ResearchFields/ImagesChoice';

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
      return <EmailQuestion {...questionPayload} />;
    case FieldsTypes.Date:
      return <DateTimeField {...questionPayload} />;
    case FieldsTypes.ImageChoice:
      return <ImagesChoice {...questionPayload} />;
    default:
      return null;
  }
};

export default Question;
