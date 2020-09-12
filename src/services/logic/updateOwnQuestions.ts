import * as Yup from 'yup';
import { toast } from 'react-toastify';

import { Question } from '../../store/ducks/questions/types';

import getQuestionConfigByAlias from '../../utils/getQuestionConfigByAlias';

import CreateQuestion from '../../schemas/createQuestion';

interface QuestionDTO {
  form: string;
  questions: QuestionsInput[] | null;
}

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
  questionTypes: any[],
): Promise<void> {
  try {
    const questionsArray: QuestionsInput[] = questions.map(
      (question, index) => {
        const questionType = questionTypes.find((type) => {
          return type.alias === question.alias;
        });

        return {
          _id: question.id,
          type: questionType?._id,
          formPage: 1,
          position: question.position || index,
          config: getQuestionConfigByAlias(question),
        };
      },
    );

    const sendData: QuestionDTO = {
      form: formId,
      questions: questionsArray,
    };

    await CreateQuestion.validate(sendData.questions, { abortEarly: false });

    const response = await updateQuestions({ variables: { input: sendData } });

    if (response.data.data.error) {
      throw new Error(response.data.data.error.message);
    }

    toast.success('Questões atualizadas com sucesso!');
  } catch (error) {
    if (error instanceof Yup.ValidationError) {
      console.error(error);
      toast.error('Você precisa preencher todos os campos obragatórios');
      return;
    }

    toast.error(error.message);
  }
}
