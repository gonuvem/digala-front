import { uuid } from 'uuidv4';

import * as QuestionsActions from '../../store/ducks/questions/actions';

interface QuestionDTO {
  alias: string;
  defaultPayload?: any;
}

export default function addFieldToForm(
  dispatch: Function,
  { alias, defaultPayload }: QuestionDTO,
): void {
  const localQuestionId = uuid();
  const localFieldName = `${alias}:${localQuestionId}`;

  dispatch(
    QuestionsActions.addQuestion({
      alias,
      id: localQuestionId,
      name: localFieldName,
      isRequired: false,
      ...defaultPayload,
    }),
  );
  dispatch(QuestionsActions.focusQuestion(localQuestionId));
}
