import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import LinkConfiguration from './linkConfiguration';

import { ApplicationState } from '../../../../../store';
import { Question } from '../../../../../store/ducks/questions/types';
import FieldsTypes from '../../../../../utils/fieldsTypes';
import changeFieldConfiguration from '../../../../../services/logic/changeFieldConfiguration';

interface FieldConfigurationsProps {
  fieldId: string;
}

const FieldConfiguration: React.FC<FieldConfigurationsProps> = ({
  fieldId,
}) => {
  const dispatch = useDispatch();

  const field = useSelector<ApplicationState, Question | undefined>((state) =>
    state.questions.questions.find((question) => question.id === fieldId),
  );

  const handleChange = useCallback((value: string, attribute) => {
    if (field !== undefined) {
      changeFieldConfiguration(dispatch, { attribute, value, field });
    }
  }, []);

  if (field === undefined) {
    return <p>Não foi possível encontrar um campo correspondente</p>;
  }

  switch (field.alias) {
    case FieldsTypes.Link:
      return <LinkConfiguration handleChange={handleChange} />;
    default:
      return <p>Não foi possível encontrar um campo correspondente</p>;
  }
};

export default FieldConfiguration;
