import { QuestionResponse, AnswerOption } from '../../pages/Survey/ISurvey';
import { Question, ListOptionsProps } from '../../store/ducks/questions/types';

import randomSortArray from '../../utils/randomSortArray';
import FieldTypes from '../../utils/fieldsTypes';

function buildAnswersOptions(
  options: AnswerOption[],
  shuffle: boolean,
): ListOptionsProps[] {
  let formattedAnswerOptions: ListOptionsProps[] = options.map((option) => ({
    _id: option._id,
    text: option.text,
    value: option._id,
    image: option.image,
  }));

  if (shuffle) {
    formattedAnswerOptions = randomSortArray(formattedAnswerOptions);
  }

  return formattedAnswerOptions;
}

function extractFromConfig(question: QuestionResponse): any {
  switch (question.type.alias) {
    case FieldTypes.Date:
      return { ...question.config.date };
    case FieldTypes.ImageChoice:
      return {
        ...question.config.imageChoice,
        answerOptions: buildAnswersOptions(
          question.config.imageChoice.answerOptions,
          question.config.imageChoice.hasRandomResponsesOrder,
        ),
      };
    case FieldTypes.Email:
      return { ...question.config.email };
    case FieldTypes.SingleChoice:
      return {
        ...question.config.radioButton,
        answerOptions: buildAnswersOptions(
          question.config.radioButton.answerOptions,
          question.config.radioButton.hasRandomResponsesOrder,
        ),
      };
    case FieldTypes.Link:
      return { ...question.config.link };
    case FieldTypes.Dropdown:
      return {
        ...question.config.dropDown,
        answerOptions: buildAnswersOptions(
          question.config.dropDown.answerOptions,
          question.config.dropDown.hasRandomResponsesOrder,
        ),
      };
    case FieldTypes.MultipleChoice:
      return {
        ...question.config.checkBox,
        answerOptions: buildAnswersOptions(
          question.config.checkBox.answerOptions,
          question.config.checkBox.hasRandomResponsesOrder,
        ),
      };
    case FieldTypes.Number:
      return { ...question.config.number };
    case FieldTypes.SortList:
      return {
        ...question.config.sortList,
        answerOptions: buildAnswersOptions(
          question.config.sortList.answerOptions,
          question.config.sortList.hasRandomResponsesOrder,
        ),
      };
    case FieldTypes.Matrix:
      return { ...question.config.matrix };
    case FieldTypes.Slider:
      return { ...question.config.slider };
    case FieldTypes.Nps:
      return {
        ...question.config.nps,
        escale: question.config.nps.escale.toString(),
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
