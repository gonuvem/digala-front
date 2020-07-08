import * as QuestionsActions from '../../store/ducks/questions/actions';
import { Question } from '../../store/ducks/questions/types';

interface FieldDTO {
  field: Question;
  values: string[];
  attributes: ['name' | 'label' | 'description'];
}

export default function changeFieldConfiguration(
  dispatch: Function,
  { values, attributes, field }: FieldDTO,
): void {
  const changedField = { ...field };
  attributes.forEach((attribute, index) => {
    changedField[attribute] = values[index];
  });

  dispatch(QuestionsActions.replaceQuestion(changedField));
}
