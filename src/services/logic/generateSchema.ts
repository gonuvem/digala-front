import * as Yup from 'yup';
import { QuestionResponse, AnswerOption } from '../../pages/Survey/ISurvey';
import FieldsTypes from '../../utils/fieldsTypes';

export default function generateSchema(
  questions: QuestionResponse[],
): Yup.ObjectSchema {
  const rules = {};

  questions.forEach((question) => {
    if (question.config.isRequired) {
      console.log('Question: ', question.type.alias);
    }

    if (question.type.alias === FieldsTypes.Date) {
      Object.assign(rules, {
        [question._id]: Yup.object().test(
          question._id,
          'Campo obrigatório',
          (value) => value.date.length >= 1 && value.time.length >= 1,
        ),
      });
      return;
    }

    if (question.type.alias === FieldsTypes.ImageChoice) {
      Object.assign(rules, {
        [question._id]: Yup.array().min(1, 'Selecione no mínimo uma opção'),
      });
      return;
    }

    Object.assign(rules, {
      [question._id]: Yup.string().required(`Campo obrigatório`),
    });
  });

  return Yup.object().shape(rules);
}
