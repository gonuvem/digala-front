import * as QuestionsActions from '../../store/ducks/questions/actions';

interface QuestionDTO {
  alias: string;
}

export default function addFieldToForm(
  dispatch: Function,
  { alias }: QuestionDTO,
): void {
  dispatch(QuestionsActions.addQuestion({ alias }));
}
