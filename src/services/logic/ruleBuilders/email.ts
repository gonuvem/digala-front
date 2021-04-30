import * as Yup from 'yup';
import { QuestionResponse } from '../../../pages/Survey/ISurvey';

export default function buildEmailRules(
  question: QuestionResponse,
): Record<string, any> {
  let rule = Yup.string();

  if (question.config.email.hasValidation) {
    rule = rule.email('Formato inválido');
  }

  if (question.config.isRequired) {
    rule = rule.required('Campo obrigatório');
  } else {
    rule = rule.notRequired();
  }

  return { [question._id]: rule };
}
