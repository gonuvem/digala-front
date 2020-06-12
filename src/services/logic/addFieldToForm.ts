import { uuid } from 'uuidv4';

import * as QuestionsActions from '../../store/ducks/questions/actions';

interface QuestionDTO {
  alias: string;
}

export default function addFieldToForm(
  dispatch: Function,
  { alias }: QuestionDTO,
): void {
  const localQuestionId = uuid();

  dispatch(QuestionsActions.addQuestion({ alias, id: localQuestionId }));
  dispatch(QuestionsActions.focusQuestion(localQuestionId));
}
