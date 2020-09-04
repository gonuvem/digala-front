import React, { useCallback, useRef, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import EmailConfiguration from './emailConfiguration';
import LinkConfiguration from './linkConfiguration';
import NpsConfiguration from './npsConfiguration';
import DateTimeConfiguration from './dateTimeConfiguration';
import SliderConfiguration from './sliderConfiguration';
import SortConfiguration from './sortAnswersConfiguration';
import ImagesChoiceConfiguration from './imagesChoiceConfiguration';
import ShortTextConfiguration from './shortTextConfiguration';
import NumericFieldConfiguration from './numericFieldConfiguration';
import MatrixConfiguration from './matrixConfiguration';
import SingleChoiceConfiguration from './singleChoiceConfiguration';
import TelephoneConfiguration from './telephoneConfiguration';
import MultipleChoiceConfigurarion from './multipleChoiceConfiguration';

import { ApplicationState } from '../../../../../store';
import { Question } from '../../../../../store/ducks/questions/types';
import FieldsTypes from '../../../../../utils/fieldsTypes';
import changeFieldConfiguration from '../../../../../services/logic/changeFieldConfiguration';
import DropdownConfigurarion from './dropdownConfiguration';

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

  const questions = useSelector<ApplicationState, Question[]>(
    (state) => state.questions.questions,
  );

  const handleChange = useCallback(
    (values: string[], attributes) => {
      if (field !== undefined) {
        changeFieldConfiguration(dispatch, {
          attributes,
          values,
          field,
          questions,
        });
      }
    },
    [field, questions, dispatch],
  );

  if (field === undefined) {
    return <p>Não foi possível encontrar um campo correspondente</p>;
  }

  switch (field.alias) {
    case FieldsTypes.Email:
      return <EmailConfiguration field={field} handleChange={handleChange} />;
    case FieldsTypes.Link:
      return <LinkConfiguration field={field} handleChange={handleChange} />;
    case FieldsTypes.Nps:
      return <NpsConfiguration field={field} handleChange={handleChange} />;
    case FieldsTypes.Date:
      return (
        <DateTimeConfiguration field={field} handleChange={handleChange} />
      );
    case FieldsTypes.Slider:
      return <SliderConfiguration field={field} handleChange={handleChange} />;
    case FieldsTypes.SortList:
      return <SortConfiguration field={field} handleChange={handleChange} />;
    case FieldsTypes.ImageChoice:
      return (
        <ImagesChoiceConfiguration field={field} handleChange={handleChange} />
      );
    case FieldsTypes.ShortText:
      return (
        <ShortTextConfiguration field={field} handleChange={handleChange} />
      );
    case FieldsTypes.LongText:
      return (
        <ShortTextConfiguration field={field} handleChange={handleChange} />
      );
    case FieldsTypes.Number:
      return (
        <NumericFieldConfiguration field={field} handleChange={handleChange} />
      );
    case FieldsTypes.Matrix:
      return <MatrixConfiguration field={field} handleChange={handleChange} />;
    case FieldsTypes.SingleChoice:
      return (
        <SingleChoiceConfiguration field={field} handleChange={handleChange} />
      );
    case FieldsTypes.MultipleChoice:
      return (
        <MultipleChoiceConfigurarion
          field={field}
          handleChange={handleChange}
        />
      );
    case FieldsTypes.Phone:
      return (
        <TelephoneConfiguration field={field} handleChange={handleChange} />
      );
    case FieldsTypes.Dropdown:
      return (
        <DropdownConfigurarion field={field} handleChange={handleChange} />
      );
    default:
      return <p>Não foi possível encontrar um campo correspondente</p>;
  }
};

export default FieldConfiguration;
