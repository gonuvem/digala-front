import * as QuestionsActions from '../../store/ducks/questions/actions';
import { Question } from '../../store/ducks/questions/types';

interface FieldDTO {
  field: Question;
  questions: Question[];
  values: string[];
  attributes: ['name' | 'label' | 'description'];
}

export default function changeFieldConfiguration(
  dispatch: Function,
  { values, attributes, field, questions }: FieldDTO,
): void {
  const changedField = { ...field };

  attributes.forEach((attribute, index) => {
    changedField[attribute] = values[index];
  });

  const questionsCopy = [...questions];
  const questionIndex = questions.findIndex(
    (question) => question.id === changedField.id,
  );
  questionsCopy[questionIndex] = changedField;

  dispatch(QuestionsActions.replaceQuestion(questionsCopy));
}
