import { toast } from 'react-toastify';

import * as QuestionsActions from '../../store/ducks/questions/actions';
import { Question } from '../../store/ducks/questions/types';

interface DeleteFieldDTO {
  fieldId: string | null | undefined;
  questions: Question[];
}

export default async function deleteQuestion(
  dispatch: Function,
  deleteOwnQuestion: Function,
  { fieldId, questions }: DeleteFieldDTO,
): Promise<void> {
  try {
    if (!fieldId) {
      throw new Error(undefined);
    }

    await deleteOwnQuestion({ variables: { id: fieldId } });

    const questionsFiltered = questions.filter(
      (question) => question.id !== fieldId,
    );

    await dispatch(QuestionsActions.replaceQuestion(questionsFiltered));
  } catch (err) {
    toast.error('Ocorreu um erro ao deletar a questão');
  }
}
