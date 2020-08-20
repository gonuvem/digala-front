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

  switch (field?.alias) {
    case FieldsTypes.ShortText:
      return (
        <ShortTextField
          name={config?.name || 'name'}
          id={config?.id || 'id'}
          label={config?.label}
          description={config?.description}
          placeholder={config?.placeholder}
          maxLength={
            config?.limitCharacter ? config?.shortTextMaxValue : undefined
          }
        />
      );
    case FieldsTypes.LongText:
      return (
        <LongTextField
          name={config?.name || 'name'}
          id={config?.id || 'id'}
          label={config?.label}
          description={config?.description}
          placeholder={config?.placeholder}
          maxLength={
            config?.limitCharacter ? config?.shortTextMaxValue : undefined
          }
        />
      );
    case FieldsTypes.Email:
      return (
        <IconTextField
          icon={FiMail}
          name={config?.name || ''}
          id={config?.id || ''}
          label={config?.label || ''}
          description={config?.description || ''}
          validatePattern={config?.validatePattern || false}
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
          randomSort={config?.randomSort}
          rowDirection={config?.rowDirection}
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
          randomSort={config?.randomSort}
          rowDirection={config?.rowDirection}
          limitChoices={config?.limitChoices || false}
          choiceMaxAmmount={config?.choiceMaxAmmount || 2}
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
          validatePattern={config?.validatePattern}
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
          selectRange={config?.selectRange || false}
        />
      );
    case FieldsTypes.Nps:
      return (
        <NpsField
          label={config?.label || ''}
          description={config?.description || ''}
          showSubtitles={config?.showSubtitles || false}
          leftSubtitle={config?.leftSubtitle}
          rightSubtitle={config?.rightSubtitle}
          scale={config?.scale || 10}
          startZero={config?.startZero || false}
        />
      );
    case FieldsTypes.Slider:
      return (
        <SliderField
          label={config?.label || ''}
          description={config?.description || ''}
          minValue={config?.lowerLimit || 0}
          maxValue={config?.upperLimit || 10}
          leftSubtitle={config?.leftSubtitle}
          rightSubtitle={config?.rightSubtitle}
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
          multipleChoice={config?.multipleChoice || false}
          choiceMaxAmmount={config?.choiceMaxAmmount || 2}
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
          stepSize={config?.stepSize || 1}
          limitMaxMin={config?.limitMaxMin || false}
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
          lines={config?.lines || ['']}
          columns={config?.columns || ['']}
          multipleChoice={config?.multipleChoice || false}
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
          validatePattern={config?.validatePattern || false}
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
