import * as Yup from 'yup';
import { QuestionResponse, AnswerOption } from '../../pages/Survey/ISurvey';

export default function generateSchema(
  questions: QuestionResponse[],
): Yup.ObjectSchema {
  const rules = {};

  questions.forEach((question) => {
    if (question.config.isRequired) {
      console.log('Question: ', question.type.alias);
    }
    Object.assign(rules, {
      [question._id]: Yup.string().required(`Campo obrigatório`),
    });
  });

  return Yup.object().shape(rules);
}
