import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import EmailConfiguration from './emailConfiguration';
import LinkConfiguration from './linkConfiguration';
import NpsConfiguration from './npsConfiguration';
import DateTimeConfiguration from './dateTimeConfiguration';
import SliderConfiguration from './sliderConfiguration';
import SortConfiguration from './sortAnswersConfiguration';
import ImagesChoiceConfiguration from './imagesChoiceConfiguration';
import ShortTextConfiguration from './shortTextConfiguration';

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

  const handleChange = useCallback(
    (value: string, attribute) => {
      if (field !== undefined) {
        changeFieldConfiguration(dispatch, { attribute, value, field });
      }
    },
    [field, dispatch],
  );

  if (field === undefined) {
    return <p>Não foi possível encontrar um campo correspondente</p>;
  }

  switch (field.alias) {
    case FieldsTypes.Email:
      return <EmailConfiguration handleChange={handleChange} />;
    case FieldsTypes.Link:
      return <LinkConfiguration handleChange={handleChange} />;
    case FieldsTypes.Nps:
      return <NpsConfiguration handleChange={handleChange} />;
    case FieldsTypes.Date:
      return <DateTimeConfiguration handleChange={handleChange} />;
    case FieldsTypes.Slider:
      return <SliderConfiguration handleChange={handleChange} />;
    case FieldsTypes.SortList:
      return <SortConfiguration handleChange={handleChange} />;
    case FieldsTypes.ImageChoice:
      return (
        <ImagesChoiceConfiguration field={field} handleChange={handleChange} />
      );
    case FieldsTypes.ShortText:
      return <ShortTextConfiguration handleChange={handleChange} />;
    default:
      return <p>Não foi possível encontrar um campo correspondente</p>;
  }
};

export default FieldConfiguration;
