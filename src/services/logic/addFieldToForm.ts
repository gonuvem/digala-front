import { uuid } from 'uuidv4';

import * as QuestionsActions from '../../store/ducks/questions/actions';
import getDefaultConfigByAlias from '../../utils/getDefaultConfigByAlias';

export default async function addFieldToForm(
  dispatch: Function,
  alias: string,
  position: number,
): Promise<void> {
  const localQuestionId = uuid();
  const localFieldName = `${alias}:${localQuestionId}`;

  const defaultConfig = await getDefaultConfigByAlias(alias);

  dispatch(
    QuestionsActions.addQuestion({
      ...defaultConfig,
      alias,
      position,
      id: localQuestionId,
      name: localFieldName,
      isRequired: false,
    }),
  );
  dispatch(QuestionsActions.focusQuestion(localQuestionId));
}
