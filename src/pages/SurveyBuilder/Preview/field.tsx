import React from 'react';
import { useSelector } from 'react-redux';
import { FiLink } from 'react-icons/fi';

import ShortTextField from '../../../components/ResearchFields/ShortTextField';
import IconTextField from '../../../components/ResearchFields/IconTextField';
import SingleChoiceField from '../../../components/ResearchFields/SingleChoiceField';

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
    default:
      return null;
  }
};

export default Field;
