import { FiMail, FiLink } from 'react-icons/fi';

import { SurveyQuestion, AnswerOption } from '../../pages/Survey/ISurvey';
import { ImageChoice } from '../../store/ducks/questions/types';
import FieldsTypes from '../../utils/fieldsTypes';
import randomSortArray from '../../utils/randomSortArray';

interface ChoicesProps {
  id: string;
  content: string;
}

interface OptionsProps {
  label?: string;
  value?: string;
}

function buildImageChoices(
  options: AnswerOption[],
  randomSort: boolean,
): ImageChoice[] {
  let imageChoices: ImageChoice[] = options.map((option) => ({
    id: option._id,
    loading: false,
    label: option.text,
    image: option.image || '',
  }));

  if (randomSort) {
    imageChoices = randomSortArray(imageChoices);
  }

  return imageChoices;
}

function buildChoices(
  options: AnswerOption[],
  randomSort: boolean,
): ChoicesProps[] {
  let choices: ChoicesProps[] = options.map((option) => ({
    content: option.text,
    id: option._id,
  }));

  if (randomSort) {
    choices = randomSortArray(choices);
  }

  return choices;
}

function buildOptions(
  options: AnswerOption[],
  randomSort: boolean,
): OptionsProps[] {
  let optionsBuilded: OptionsProps[] = options.map((option) => ({
    label: option.text,
    value: option._id,
  }));

  if (randomSort) {
    optionsBuilded = randomSortArray(optionsBuilded);
  }

  return optionsBuilded;
}

export default function mountQuestionPayload(question: SurveyQuestion): any {
  switch (question.type.alias) {
    case FieldsTypes.Email:
      return {
        name: question.config.name,
        id: question._id,
        icon: FiMail,
        label: question.config.name,
        description: question.config.description,
      };
    case FieldsTypes.Date:
      return {
        name: question._id,
        label: question.config.name,
        description: question.config.description,
        dateFormat: question.config.date.dateFormat || 'monthYear',
        timeFormat: question.config.date.timeFormat || 'hourMinute',
        selectRange: question.config.date.canCaptureInterval,
      };
    case FieldsTypes.ImageChoice:
      return {
        name: question._id,
        label: question.config.name,
        description: question.config.description,
        id: question._id,
        multipleChoice: question.config.imageChoice.isMultipleChoice,
        choiceMaxAmmount: question.config.imageChoice.maxChoices || 1,
        choices: buildImageChoices(
          question.config.imageChoice.answerOptions,
          question.config.imageChoice.hasRandomResponsesOrder,
        ),
      };
    case FieldsTypes.SingleChoice:
      return {
        name: question._id,
        label: question.config.name,
        description: question.config.description,
        id: question._id,
        rowDirection: question.config.radioButton.hasHorizontalAlignment,
        choices: buildChoices(
          question.config.radioButton.answerOptions,
          question.config.radioButton.hasRandomResponsesOrder,
        ),
      };
    case FieldsTypes.Link:
      return {
        name: question._id,
        id: question._id,
        icon: FiLink,
        label: question.config.name,
        description: question.config.description,
      };
    case FieldsTypes.Dropdown:
      return {
        name: question._id,
        label: question.config.name,
        description: question.config.description,
        listOptions: buildOptions(
          question.config.dropDown.answerOptions,
          question.config.dropDown.hasRandomResponsesOrder,
        ),
      };
    default:
      return {};
  }
}
