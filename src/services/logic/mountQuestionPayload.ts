import { FiMail, FiLink } from 'react-icons/fi';
import { FaPhoneAlt } from 'react-icons/fa';

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
  const defaultPayload = {
    name: question._id,
    label: question.config.name,
    description: question.config.description,
  };

  switch (question.type.alias) {
    case FieldsTypes.Email:
      return {
        ...defaultPayload,
        id: question._id,
        icon: FiMail,
      };
    case FieldsTypes.Date:
      return {
        ...defaultPayload,
        dateFormat: question.config.date.dateFormat || 'monthYear',
        timeFormat: question.config.date.timeFormat || 'hourMinute',
        selectRange: question.config.date.canCaptureInterval,
      };
    case FieldsTypes.ImageChoice:
      return {
        ...defaultPayload,
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
        ...defaultPayload,
        id: question._id,
        rowDirection: question.config.radioButton.hasHorizontalAlignment,
        choices: buildChoices(
          question.config.radioButton.answerOptions,
          question.config.radioButton.hasRandomResponsesOrder,
        ),
      };
    case FieldsTypes.Link:
      return {
        ...defaultPayload,
        id: question._id,
        icon: FiLink,
      };
    case FieldsTypes.Dropdown:
      return {
        ...defaultPayload,
        listOptions: buildOptions(
          question.config.dropDown.answerOptions,
          question.config.dropDown.hasRandomResponsesOrder,
        ),
      };
    case FieldsTypes.MultipleChoice:
      return {
        ...defaultPayload,
        limitChoices: question.config.checkBox.hasLimitedChoices,
        choiceMaxAmmount: question.config.checkBox.maxChoices,
        rowDirection: question.config.checkBox.hasHorizontalAlignment,
        choices: buildChoices(
          question.config.checkBox.answerOptions,
          question.config.checkBox.hasRandomResponsesOrder,
        ),
      };
    case FieldsTypes.Nps:
      return {
        ...defaultPayload,
        showSubtitles: question.config.nps.canDisplayLabels,
        leftSubtitle: question.config.nps.leftLabel,
        rightSubtitle: question.config.nps.rightLabel,
        scale: question.config.nps.escale,
        startZero: question.config.nps.canStartAtZero,
      };
    case FieldsTypes.Number:
      return {
        ...defaultPayload,
        limitMaxMin: question.config.number.hasMaxMinLimit,
        minValue: question.config.number.minValue,
        maxValue: question.config.number.maxValue,
        stepSize: question.config.number.incValue || 1,
      };
    case FieldsTypes.SortList:
      return {
        ...defaultPayload,
        listOptions: buildChoices(
          question.config.sortList.answerOptions,
          question.config.sortList.hasRandomResponsesOrder,
        ),
      };
    case FieldsTypes.Slider:
      return {
        ...defaultPayload,
        minValue: question.config.slider.minValue,
        maxValue: question.config.slider.maxValue,
        leftSubtitle: question.config.slider.minLabel,
        rightSubtitle: question.config.slider.maxLabel,
      };
    case FieldsTypes.Matrix:
      return {
        ...defaultPayload,
        multipleChoice: question.config.matrix.isMultipleChoice,
        columns: question.config.matrix.colsLabels,
        lines: question.config.matrix.rowsLabels,
      };
    case FieldsTypes.Phone:
      return {
        ...defaultPayload,
        icon: FaPhoneAlt,
        validatePattern: question.config.phone.hasValidation,
        mask: '(99) 99999-9999',
      };
    case FieldsTypes.LongText:
      return {
        ...defaultPayload,
        id: question._id,
        placeholder: question.config.longText.placeholder,
        maxLength: question.config.longText.hasLimitedChars
          ? question.config.longText.maxChars
          : undefined,
      };
    // case FieldsTypes.ShortText:
    //   return {
    //     ...defaultPayload,
    //     id: question._id,
    //     placeholder: question.config.shortText.placeholder,
    //     maxLength: question.config.shortText.hasLimitedChars
    //       ? question.config.shortText.maxChars
    //       : undefined,
    //   };
    default:
      return {};
  }
}
