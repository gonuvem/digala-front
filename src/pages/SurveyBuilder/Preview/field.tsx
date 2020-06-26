import React from 'react';
import { useSelector } from 'react-redux';
import { FiLink } from 'react-icons/fi';

import ShortTextField from '../../../components/ResearchFields/ShortTextField';
import IconTextField from '../../../components/ResearchFields/IconTextField';
import SingleChoiceField from '../../../components/ResearchFields/SingleChoiceField';
import NpsField from '../../../components/ResearchFields/NpsField';
import SliderField from '../../../components/ResearchFields/SliderField';

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
      return <ShortTextField name="short-teste" id="short-id" />;
    case FieldsTypes.SingleChoice:
      return (
        <SingleChoiceField
          label="Teste"
          name="single- teste"
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
    default:
      return null;
  }
};

export default Field;
