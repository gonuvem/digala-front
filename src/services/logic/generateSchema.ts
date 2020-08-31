import * as Yup from 'yup';
import { QuestionResponse, AnswerOption } from '../../pages/Survey/ISurvey';
import FieldsTypes from '../../utils/fieldsTypes';

function mountRule(question: QuestionResponse): Record<string, any> {
  switch (question.type.alias) {
    case FieldsTypes.ImageChoice:
    case FieldsTypes.SingleChoice:
    case FieldsTypes.MultipleChoice:
    case FieldsTypes.Matrix:
      return {
        [question._id]: Yup.array().min(1, 'Selecione no mínimo uma opção'),
      };
    case FieldsTypes.Dropdown:
      return {
        [question._id]: Yup.mixed().test(
          question._id,
          'Campo obrigatório',
          (value) => value.value,
        ),
      };
    case FieldsTypes.Date:
      return {
        [question._id]: Yup.object().test(
          question._id,
          'Campo obrigatório',
          (value) => value.date.length >= 1 && value.time.length >= 1,
        ),
      };
    default:
      return {
        [question._id]: Yup.string().required(`Campo obrigatório`),
      };
  }
}

export default function generateSchema(
  questions: QuestionResponse[],
): Yup.ObjectSchema {
  const rules = {};

  questions.forEach((question) => {
    if (question.config.isRequired) {
      const rule = mountRule(question);
      Object.assign(rules, rule);
    }
  });

  return Yup.object().shape(rules);
}
