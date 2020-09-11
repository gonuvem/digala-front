import * as QuestionsActions from '../../store/ducks/questions/actions';
import { Question } from '../../store/ducks/questions/types';

interface ChangeFieldDTO {
  fieldIndex: number;
  questions: Question[];
  direction: 'up' | 'down';
}

export default function changeFieldPosition(
  dispatch: Function,
  { fieldIndex, questions, direction }: ChangeFieldDTO,
): void {
  const field = { ...questions[fieldIndex] };
  let fieldChangedIndex = 0;
  let positionHolder = 0;

  if (direction === 'up' && fieldIndex - 1 >= 0) {
    fieldChangedIndex = fieldIndex - 1;
  }

  if (direction === 'down' && fieldIndex + 1 <= questions.length) {
    fieldChangedIndex = fieldIndex + 1;
  }

  const fieldChanged = { ...questions[fieldChangedIndex] };
  positionHolder = fieldChanged.position || 0;

  fieldChanged.position = field.position;
  field.position = positionHolder;

  const questionsCopy = [...questions];
  questionsCopy[field.position] = field;
  questionsCopy[fieldChanged.position || 0] = fieldChanged;

  dispatch(QuestionsActions.replaceQuestion(questionsCopy));
}
