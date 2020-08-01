import React from 'react';
import { FiLink, FiMail } from 'react-icons/fi';
import { FaPhoneAlt } from 'react-icons/fa';

import EmailQuestion from '../../components/ResearchFields/IconTextField';
import DateTimeField from '../../components/ResearchFields/DateTimeField';

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
    case FieldsTypes.Date:
      return (
        <DateTimeField
          name={question._id}
          label={question.config.name}
          description={question.config.description}
          dateFormat={question.config.date.dateFormat || 'monthYear'}
          timeFormat={question.config.date.timeFormat || 'hourMinute'}
          selectRange={question.config.date.canCaptureInterval}
        />
      );
    default:
      return null;
  }
};

export default Question;
