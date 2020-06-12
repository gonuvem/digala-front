import React from 'react';
import { useSelector } from 'react-redux';

import { ApplicationState } from '../../../../../store';
import { Question } from '../../../../../store/ducks/questions/types';
import FieldsTypes from '../../../../../utils/fieldsTypes';

import LinkConfiguration from './linkConfiguration';

interface FieldConfigurationsProps {
  fieldId: string;
}

const FieldConfiguration: React.FC<FieldConfigurationsProps> = ({
  fieldId,
}) => {
  const field = useSelector<ApplicationState, Question | undefined>((state) =>
    state.questions.questions.find((question) => question.id === fieldId),
  );

  if (field === undefined) {
    return <p>Não foi possível encontrar um campo correspondente</p>;
  }

  switch (field.alias) {
    case FieldsTypes.Link:
      return <LinkConfiguration />;
    default:
      return <p>Não foi possível encontrar um campo correspondente</p>;
  }
};

export default FieldConfiguration;
