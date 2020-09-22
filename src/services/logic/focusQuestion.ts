import * as QuestionsActions from '../../store/ducks/questions/actions';

interface FocusDTO {
  questionId: string;
}

export default function focusQuestion(
  dispatch: Function,
  { questionId }: FocusDTO,
): void {
  dispatch(QuestionsActions.focusQuestion(questionId));
}
