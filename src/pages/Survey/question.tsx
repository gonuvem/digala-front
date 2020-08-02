import React, { useMemo } from 'react';

import IconTextField from '../../components/ResearchFields/IconTextField';
import DateTimeField from '../../components/ResearchFields/DateTimeField';
import ImagesChoice from '../../components/ResearchFields/ImagesChoice';
import SingleChoiceField from '../../components/ResearchFields/SingleChoiceField';
import SelectField from '../../components/ResearchFields/SelectField';
import MultipleChoiceField from '../../components/ResearchFields/MultipleChoiceField';
import NpsField from '../../components/ResearchFields/NpsField';
import NumericField from '../../components/ResearchFields/NumericField';

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
    case FieldsTypes.Dropdown:
      return <SelectField {...questionPayload} />;
    case FieldsTypes.MultipleChoice:
      return <MultipleChoiceField {...questionPayload} />;
    case FieldsTypes.Nps:
      return <NpsField {...questionPayload} />;
    case FieldsTypes.Number:
      return <NumericField {...questionPayload} />;
    default:
      return null;
  }
};

export default Question;
