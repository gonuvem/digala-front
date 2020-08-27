import { QuestionResponse } from '../../pages/Survey/ISurvey';
import { Question } from '../../store/ducks/questions/types';

import FieldTypes from '../../utils/fieldsTypes';

function extractFromConfig(question: QuestionResponse): Partial<Question> {
  switch (question.type.alias) {
    case FieldTypes.Date:
      return { ...question.config.date };
    case FieldTypes.ImageChoice:
      return { ...question.config.imageChoice };
    case FieldTypes.Email:
      return { ...question.config.email };
    case FieldTypes.SingleChoice:
      return { ...question.config.radioButton };
    case FieldTypes.Link:
      return { ...question.config.link };
    case FieldTypes.Dropdown:
      return { ...question.config.dropDown };
    case FieldTypes.MultipleChoice:
      return { ...question.config.checkBox };
    case FieldTypes.Number:
      return { ...question.config.number };
    case FieldTypes.SortList:
      return { ...question.config.sortList };
    case FieldTypes.Matrix:
      return { ...question.config.matrix };
    case FieldTypes.Slider:
      return { ...question.config.slider };
    case FieldTypes.Nps:
      return {
        ...question.config.nps,
        escale: parseInt(question.config.nps.escale, 10),
      };
    case FieldTypes.Phone:
      return { ...question.config.phone };
    case FieldTypes.ShortText:
      return { ...question.config.shortText };
    case FieldTypes.LongText:
      return { ...question.config.longText };
    default:
      return {};
  }
}

export default function formatQuestionResponse(
  questions: QuestionResponse[],
): Question[] {
  const questionsFormatted: Question[] = questions.map((question) => {
    return {
      ...extractFromConfig(question),
      alias: question.type.alias,
      id: question._id,
      name: question._id,
      description: question.config.description,
      isRequired: question.config.isRequired,
      label: question.config.name,
    };
  });

  return questionsFormatted;
}
