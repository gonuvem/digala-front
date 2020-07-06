import React from 'react';
import { useSelector } from 'react-redux';
import { FiLink, FiMail } from 'react-icons/fi';

import ShortTextField from '../../../components/ResearchFields/ShortTextField';
import IconTextField from '../../../components/ResearchFields/IconTextField';
import SingleChoiceField from '../../../components/ResearchFields/SingleChoiceField';
import DateTimeField from '../../../components/ResearchFields/DateTimeField';
import NpsField from '../../../components/ResearchFields/NpsField';
import SliderField from '../../../components/ResearchFields/SliderField';
import ImagesChoice from '../../../components/ResearchFields/ImagesChoice';
import SortAnswer from '../../../components/ResearchFields/SortAnswers';
import LongTextField from '../../../components/ResearchFields/TextAreaField';
import NumberField from '../../../components/ResearchFields/NumericField';

import { ApplicationState } from '../../../store';
import { Question } from '../../../store/ducks/questions/types';
import FieldsTypes from '../../../utils/fieldsTypes';

interface FieldProps {
  fieldId: string;
  config?: Question;
}

const temp = [{ id: '123', content: 'joao' }];

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
          placeholder={config?.shortTextPlaceholder}
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
          placeholder={config?.shortTextPlaceholder}
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
        />
      );
    case FieldsTypes.SingleChoice:
      return (
        <SingleChoiceField
          label="Teste"
          name="single-teste"
          id="single-id"
          choices={['opção 01', 'opção 02', 'opção 03']}
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
          isRequired={config?.required || false}
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
    case FieldsTypes.ImageChoice:
      return (
        <ImagesChoice
          label={config?.label || ''}
          description={config?.description || ''}
          id={config?.id || ''}
          choices={config?.imgChoices || []}
          multipleChoice={config?.multipleChoice || false}
          choiceMaxAmmount={config?.choiceMaxAmmount || 2}
        />
      );
    case FieldsTypes.SortList:
      return (
        <SortAnswer
          label={config?.label || ''}
          description={config?.description}
          listOptions={config?.listOptions}
          randomSort={config?.randomSort}
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
    default:
      return null;
  }
};

export default Field;
