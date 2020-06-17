import * as QuestionsActions from '../../store/ducks/questions/actions';
import { Question } from '../../store/ducks/questions/types';

interface FieldDTO {
  field: Question;
  value: string;
  attribute: 'name' | 'label' | 'description';
}

export default function changeFieldConfiguration(
  dispatch: Function,
  { value, attribute, field }: FieldDTO,
): void {
  const changedField = { ...field };
  changedField[attribute] = value;

  dispatch(QuestionsActions.replaceQuestion(changedField));
}
