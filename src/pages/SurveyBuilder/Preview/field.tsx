import React from 'react';
import { useSelector } from 'react-redux';
import { FiLink, FiMail } from 'react-icons/fi';
import { FaPhoneAlt } from 'react-icons/fa';

import ShortTextField from '../../../components/ResearchFields/ShortTextField';
import IconTextField from '../../../components/ResearchFields/IconTextField';
import SingleChoiceField from '../../../components/ResearchFields/SingleChoiceField';
import MultipleChoiceField from '../../../components/ResearchFields/MultipleChoiceField';
import DateTimeField from '../../../components/ResearchFields/DateTimeField';
import NpsField from '../../../components/ResearchFields/NpsField';
import SliderField from '../../../components/ResearchFields/SliderField';
import ImagesChoice from '../../../components/ResearchFields/ImagesChoice';
import SortAnswer from '../../../components/ResearchFields/SortAnswers';
import LongTextField from '../../../components/ResearchFields/TextAreaField';
import NumberField from '../../../components/ResearchFields/NumericField';
import MatrixField from '../../../components/ResearchFields/MatrixField';
import SelectField from '../../../components/ResearchFields/SelectField';

import { ApplicationState } from '../../../store';
import { Question } from '../../../store/ducks/questions/types';
import FieldsTypes from '../../../utils/fieldsTypes';
interface FieldProps {
  fieldId: string;
  config?: Question;
}

const Field: React.FC<FieldProps> = ({ fieldId, config }) => {
  const field = useSelector<ApplicationState, Question | undefined>((state) =>
    state.questions.questions.find((question) => question.id === fieldId),
  );

  // console.log(config);

  switch (field?.alias) {
    case FieldsTypes.ShortText:
      return (
        <ShortTextField
          name={config?.name || 'name'}
          id={config?.id || 'id'}
          label={config?.label}
          description={config?.description}
          placeholder={config?.placeholder}
          maxLength={config?.hasLimitedChars ? config?.maxChars : undefined}
        />
      );
    case FieldsTypes.LongText: {
      // console.log(config);
      return (
        <LongTextField
          name={config?.name || 'name'}
          id={config?.id || 'id'}
          label={config?.label}
          description={config?.description}
          placeholder={config?.placeholder}
          maxLength={config?.hasLimitedChars ? config?.maxChars : undefined}
        />
      );
    }
    case FieldsTypes.Email:
      return (
        <IconTextField
          icon={FiMail}
          name={config?.name || ''}
          id={config?.id || ''}
          label={config?.label || ''}
          description={config?.description || ''}
          validatePattern={config?.hasValidation || false}
        />
      );
    case FieldsTypes.SingleChoice:
      return (
        <SingleChoiceField
          label={config?.label || ''}
          name={config?.name || ''}
          id={config?.id || ''}
          description={config?.description || ''}
          choices={config?.answerOptions}
          anotherOption={config?.anotherOption}
          hasRandomResponsesOrder={config?.hasRandomResponsesOrder}
          rowDirection={config?.hasHorizontalAlignment}
        />
      );
    case FieldsTypes.MultipleChoice:
      return (
        <MultipleChoiceField
          label={config?.label || ''}
          name={config?.name || ''}
          id={config?.id || ''}
          description={config?.description || ''}
          choices={config?.answerOptions}
          anotherOption={config?.anotherOption}
          hasRandomResponsesOrder={config?.hasRandomResponsesOrder}
          rowDirection={config?.hasHorizontalAlignment}
          limitChoices={config?.isMultipleChoice || false}
          choiceMaxAmmount={config?.maxChoices || 2}
        />
      );
    case FieldsTypes.Link:
      return (
        <IconTextField
          icon={FiLink}
          name={config?.name || 'name'}
          id={config?.id || 'id'}
          label={config?.label}
          description={config?.description}
          validatePattern={config?.hasValidation}
        />
      );
    case FieldsTypes.Date:
      return (
        <DateTimeField
          label={config?.label || ''}
          description={config?.description || ''}
          name={config?.name || 'date-time-field-name'}
          dateFormat={config?.dateFormat || 'dayMonthYear'}
          timeFormat={config?.timeFormat || 'hourMinute'}
          selectRange={config?.canCaptureInterval || false}
        />
      );
    case FieldsTypes.Nps:
      return (
        <NpsField
          label={config?.label || ''}
          description={config?.description || ''}
          showSubtitles={config?.canDisplayLabels || false}
          leftSubtitle={config?.leftLabel}
          rightSubtitle={config?.rightLabel}
          scale={config?.escale || 10}
          startZero={config?.canStartAtZero || false}
        />
      );
    case FieldsTypes.Slider:
      return (
        <SliderField
          label={config?.label || ''}
          description={config?.description || ''}
          minValue={config?.minValue || 0}
          maxValue={config?.maxValue || 10}
          leftSubtitle={config?.minLabel}
          rightSubtitle={config?.maxLabel}
        />
      );
    case FieldsTypes.ImageChoice: {
      // console.log(config);
      return (
        <ImagesChoice
          name={config?.name || 'images-choice-field-name'}
          label={config?.label || ''}
          description={config?.description || ''}
          id={config?.id || ''}
          choices={config?.answerOptions || []}
          multipleChoice={config?.isMultipleChoice || false}
          choiceMaxAmmount={config?.maxChoices || 2}
        />
      );
    }
    case FieldsTypes.SortList:
      return (
        <SortAnswer
          label={config?.label || ''}
          description={config?.description}
          answerOptions={config?.answerOptions}
        />
      );
    case FieldsTypes.Number:
      return (
        <NumberField
          name={config?.name || ''}
          label={config?.label || ''}
          description={config?.description || ''}
          id={config?.id || ''}
          stepSize={config?.incValue || 1}
          limitMaxMin={config?.hasMaxMinLimit || false}
          maxValue={config?.maxValue}
          minValue={config?.minValue}
        />
      );
    case FieldsTypes.Matrix:
      return (
        <MatrixField
          label={config?.label}
          description={config?.description}
          name={config?.name || ''}
          lines={config?.rowsLabels || ['']}
          columns={config?.colsLabels || ['']}
          multipleChoice={config?.isMultipleChoice || false}
        />
      );
    case FieldsTypes.Phone:
      return (
        <IconTextField
          icon={FaPhoneAlt}
          name={config?.name || ''}
          id={config?.id || ''}
          label={config?.label}
          description={config?.description}
          validatePattern={config?.hasValidation || false}
          mask="(99) 99999-9999"
        />
      );
    case FieldsTypes.Dropdown:
      return (
        <SelectField
          name={config?.name || ''}
          label={config?.label}
          description={config?.description}
          answerOptions={config?.answerOptions}
        />
      );
    default:
      return null;
  }
};

export default Field;
