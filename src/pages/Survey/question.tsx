import React, { useMemo } from 'react';

import IconTextField from '../../components/ResearchFields/IconTextField';
import DateTimeField from '../../components/ResearchFields/DateTimeField';
import ImagesChoice from '../../components/ResearchFields/ImagesChoice';
import SingleChoiceField from '../../components/ResearchFields/SingleChoiceField';
import SelectField from '../../components/ResearchFields/SelectField';
import MultipleChoiceField from '../../components/ResearchFields/MultipleChoiceField';
import NpsField from '../../components/ResearchFields/NpsField';
import NumericField from '../../components/ResearchFields/NumericField';
import SortAnswers from '../../components/ResearchFields/SortAnswers';
import SliderField from '../../components/ResearchFields/SliderField';
import MatrixField from '../../components/ResearchFields/MatrixField';
import ShortText from '../../components/ResearchFields/ShortTextField';
import TextArea from '../../components/ResearchFields/TextAreaField';

import { SurveyQuestion } from './ISurvey';
import FieldsTypes from '../../utils/fieldsTypes';
import mountQuestionPayload from '../../services/logic/mountQuestionPayload';

interface FieldProps {
  question: SurveyQuestion;
}

const Question: React.FC<FieldProps> = ({ question }) => {
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
    case FieldsTypes.SortList:
      return <SortAnswers {...questionPayload} />;
    case FieldsTypes.Slider:
      return <SliderField {...questionPayload} />;
    case FieldsTypes.Matrix:
      return <MatrixField {...questionPayload} />;
    case FieldsTypes.Phone:
      return <IconTextField {...questionPayload} />;
    case FieldsTypes.LongText:
      return <TextArea {...questionPayload} />;
    // case FieldsTypes.ShortText:
    //   return <ShortText {...questionPayload} />;
    default:
      return null;
  }
};

export default Question;
