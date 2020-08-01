import React from 'react';
import { FiLink, FiMail } from 'react-icons/fi';
import { FaPhoneAlt } from 'react-icons/fa';

import { config } from 'process';
import EmailQuestion from '../../components/ResearchFields/IconTextField';

import { SurveyQuestion } from './ISurvey';
import FieldsTypes from '../../utils/fieldsTypes';

interface FieldProps {
  question: SurveyQuestion;
}

const Question: React.FC<FieldProps> = ({ question }) => {
  console.log('Question >> ', question);

  switch (question.type.alias) {
    case FieldsTypes.Email:
      return (
        <EmailQuestion
          name={question._id}
          id={question._id}
          icon={FiMail}
          label={question.config.name}
          description={question.config.description}
        />
      );
    default:
      return null;
  }
};

export default Question;
