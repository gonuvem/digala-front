import { toast } from 'react-toastify';
import * as Yup from 'yup';

import getQuestionConfigByAlias, {
  QuestionConfig,
} from '../../utils/getQuestionConfigByAlias';

import { Question } from '../../store/ducks/questions/types';
import CreateQuestion from '../../schemas/createQuestion';

interface QuestionDTO {
  form: string;
  questions: QuestionProps[] | null;
}

interface QuestionProps {
  type: string;
  formPage: number;
  position: number;
  config: QuestionConfig;
}

export default async function createOwnQuestions(
  createQuestions: Function,
  questions: Question[] | null,
  formId: string,
  questionTypes: any[],
): Promise<void> {
  try {
    if (!questions || !formId) {
      throw new Error('Form Data not sended');
    }

    const questionsArray: Array<any> = [];

    for (let i = 0; i < questions.length; i += 1) {
      const config = getQuestionConfigByAlias(questions[i]);
      const questionType = questionTypes.find((type) => {
        return type.alias === questions[i].alias;
      });

      if (questionType?._id && config) {
        const questionConfig: QuestionProps = {
          type: questionType?._id,
          formPage: 1,
          position: i,
          config,
        };
        questionsArray.push(questionConfig);
      }
    }

    const sendData: QuestionDTO = {
      form: formId,
      questions: questionsArray,
    };

    await CreateQuestion.validate(sendData.questions, { abortEarly: false });

    if (questions === null) {
      throw new Error('Form data is null');
    }

    const response = await createQuestions({ variables: { input: sendData } });

    if (response.data.data.error) {
      throw new Error(response.data.data.error.message);
    }

    toast.success('Pesquisa cadastrada com sucesso');
  } catch (err) {
    if (err instanceof Yup.ValidationError) {
      console.log(err);
      toast.error('Você precisa preencher todos os campos obragatórios');
      return;
    }

    toast.error(err.message);
  }
}
