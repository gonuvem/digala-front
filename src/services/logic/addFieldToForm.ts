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
  const localFieldName = `${alias}:${localQuestionId}`;

  dispatch(
    QuestionsActions.addQuestion({
      alias,
      id: localQuestionId,
      name: localFieldName,
    }),
  );
  dispatch(QuestionsActions.focusQuestion(localQuestionId));
}
