import { QuestionResponse } from '../../pages/Survey/ISurvey';
import { Question } from '../../store/ducks/questions/types';

export default function formatQuestionResponse(
  questions: QuestionResponse[],
): Question[] {
  const questionsFormatted: Question[] = questions.map((question) => {
    return {
      ...question.config,
      alias: question.type.alias,
      id: question._id,
      label: question.config.name,
      name: question._id,
    };
  });

  return questionsFormatted;
}
