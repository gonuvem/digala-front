import { Question } from '../../store/ducks/questions/types';

import getQuestionConfigByAlias from '../../utils/getQuestionConfigByAlias';

interface QuestionsInput {
  _id: string;
  type: string;
  formPage: number;
  position: number;
  config: any;
}

export default async function updateOwnQuestions(
  updateQuestions: Function,
  questions: Question[],
  formId: string,
): Promise<void> {
  try {
    const questionsArray: QuestionsInput[] = questions.map(
      (question, index) => {
        return {
          _id: question.id,
          type: question.alias,
          formPage: 1,
          position: index,
          config: getQuestionConfigByAlias(question),
        };
      },
    );

    console.log('Questions Array: ', questionsArray);
  } catch (error) {
    console.error(error);
  }
}
