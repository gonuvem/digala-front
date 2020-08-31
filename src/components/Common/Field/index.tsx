import React from 'react';
import { FiLink, FiMail } from 'react-icons/fi';
import { FaPhoneAlt } from 'react-icons/fa';

import ShortTextField from '../../ResearchFields/ShortTextField';
import IconTextField from '../../ResearchFields/IconTextField';
import SingleChoiceField from '../../ResearchFields/SingleChoiceField';
import MultipleChoiceField from '../../ResearchFields/MultipleChoiceField';
import DateTimeField from '../../ResearchFields/DateTimeField';
import NpsField from '../../ResearchFields/NpsField';
import SliderField from '../../ResearchFields/SliderField';
import ImagesChoice from '../../ResearchFields/ImagesChoice';
import SortAnswer from '../../ResearchFields/SortAnswers';
import LongTextField from '../../ResearchFields/TextAreaField';
import NumberField from '../../ResearchFields/NumericField';
import MatrixField from '../../ResearchFields/MatrixField';
import SelectField from '../../ResearchFields/SelectField';

import { Question } from '../../../store/ducks/questions/types';
import FieldsTypes from '../../../utils/fieldsTypes';

interface FieldProps {
  question: Question;
}

const Field: React.FC<FieldProps> = ({ question }) => {
  switch (question.alias) {
    case FieldsTypes.ShortText:
      return (
        <ShortTextField
          name={question?.name || 'name'}
          id={question?.id || 'id'}
          label={question?.label}
          description={question?.description}
          placeholder={question?.placeholder}
          maxLength={question?.hasLimitedChars ? question?.maxChars : undefined}
        />
      );
    case FieldsTypes.LongText: {
      return (
        <LongTextField
          name={question?.name || 'name'}
          id={question?.id || 'id'}
          label={question?.label}
          description={question?.description}
          placeholder={question?.placeholder}
          maxLength={question?.hasLimitedChars ? question?.maxChars : undefined}
        />
      );
    }
    case FieldsTypes.Email:
      return (
        <IconTextField
          icon={FiMail}
          name={question?.name || ''}
          id={question?.id || ''}
          label={question?.label || ''}
          description={question?.description || ''}
          validatePattern={question?.hasValidation || false}
        />
      );
    case FieldsTypes.SingleChoice:
      return (
        <SingleChoiceField
          label={question?.label || ''}
          name={question?.name || ''}
          id={question?.id || ''}
          description={question?.description || ''}
          choices={question?.answerOptions}
          anotherOption={question?.anotherOption}
          hasRandomResponsesOrder={question?.hasRandomResponsesOrder}
          rowDirection={question?.hasHorizontalAlignment}
        />
      );
    case FieldsTypes.MultipleChoice:
      return (
        <MultipleChoiceField
          label={question?.label || ''}
          name={question?.name || ''}
          id={question?.id || ''}
          description={question?.description || ''}
          choices={question?.answerOptions}
          anotherOption={question?.anotherOption}
          hasRandomResponsesOrder={question?.hasRandomResponsesOrder}
          rowDirection={question?.hasHorizontalAlignment}
          limitChoices={question?.isMultipleChoice || false}
          choiceMaxAmmount={question?.maxChoices || 2}
        />
      );
    case FieldsTypes.Link:
      return (
        <IconTextField
          icon={FiLink}
          name={question?.name || 'name'}
          id={question?.id || 'id'}
          label={question?.label}
          description={question?.description}
          validatePattern={question?.hasValidation}
        />
      );
    case FieldsTypes.Date:
      return (
        <DateTimeField
          label={question?.label || ''}
          description={question?.description || ''}
          name={question?.name || 'date-time-field-name'}
          dateFormat={question?.dateFormat || 'dayMonthYear'}
          timeFormat={question?.timeFormat || 'hourMinute'}
          selectRange={question?.canCaptureInterval || false}
        />
      );
    case FieldsTypes.Nps:
      return (
        <NpsField
          name={question.name}
          label={question?.label || ''}
          description={question?.description || ''}
          showSubtitles={question?.canDisplayLabels || false}
          leftSubtitle={question?.leftLabel}
          rightSubtitle={question?.rightLabel}
          scale={question?.escale || 10}
          startZero={question?.canStartAtZero || false}
        />
      );
    case FieldsTypes.Slider:
      return (
        <SliderField
          name={question.name}
          label={question?.label || ''}
          description={question?.description || ''}
          minValue={question?.minValue || 0}
          maxValue={question?.maxValue || 10}
          leftSubtitle={question?.minLabel}
          rightSubtitle={question?.maxLabel}
        />
      );
    case FieldsTypes.ImageChoice: {
      return (
        <ImagesChoice
          name={question?.name || 'images-choice-field-name'}
          label={question?.label || ''}
          description={question?.description || ''}
          id={question?.id || ''}
          choices={question?.answerOptions || []}
          multipleChoice={question?.isMultipleChoice || false}
          choiceMaxAmmount={question?.maxChoices || 2}
        />
      );
    }
    case FieldsTypes.SortList:
      return (
        <SortAnswer
          name={question?.name || 'sort-answer-field-name'}
          label={question?.label || ''}
          description={question?.description}
          answerOptions={question?.answerOptions}
        />
      );
    case FieldsTypes.Number:
      return (
        <NumberField
          name={question?.name || ''}
          label={question?.label || ''}
          description={question?.description || ''}
          id={question?.id || ''}
          stepSize={question?.incValue || 1}
          limitMaxMin={question?.hasMaxMinLimit || false}
          maxValue={question?.maxValue}
          minValue={question?.minValue}
        />
      );
    case FieldsTypes.Matrix:
      return (
        <MatrixField
          label={question?.label}
          description={question?.description}
          name={question?.name || ''}
          lines={question?.rowsLabels || ['']}
          columns={question?.colsLabels || ['']}
          multipleChoice={question?.isMultipleChoice || false}
        />
      );
    case FieldsTypes.Phone:
      return (
        <IconTextField
          icon={FaPhoneAlt}
          name={question?.name || ''}
          id={question?.id || ''}
          label={question?.label}
          description={question?.description}
          validatePattern={question?.hasValidation || false}
          mask="(99) 99999-9999"
        />
      );
    case FieldsTypes.Dropdown:
      return (
        <SelectField
          name={question?.name || ''}
          label={question?.label}
          description={question?.description}
          answerOptions={question?.answerOptions}
        />
      );
    default:
      return null;
  }
};

export default Field;
