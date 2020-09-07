import { Question, ListOptionsProps } from '../store/ducks/questions/types';
import FieldTypes from './fieldsTypes';

interface AnswerOptions {
  text: string;
  image?: string;
}

export interface QuestionConfig {
  name: string;
  description?: string;
  isRequired: boolean;
  checkBox?: {
    hasHorizontalAlignment: boolean;
    hasRandomResponsesOrder: boolean;
    hasLimitedChoices: boolean;
    maxChoices?: number;
    answerOptions: AnswerOptions[];
  };
  date?: {
    isDateRequired: boolean;
    dateFormat?: string;
    isTimeRequired: boolean;
    timeFormat?: string;
    canCaptureInterval: boolean;
  };
  dropDown?: {
    hasRandomResponsesOrder: boolean;
    answerOptions: AnswerOptions[];
  };
  email?: {
    hasValidation: boolean;
  };
  imageChoice?: {
    isMultipleChoice: boolean;
    maxChoices?: number;
    hasRandomResponsesOrder: boolean;
    answerOptions: AnswerOptions[];
  };
  link?: {
    hasValidation: boolean;
  };
  longText?: {
    placeholder?: string;
    hasLimitedChars: boolean;
    maxChars?: number;
  };
  matrix?: {
    isMultipleChoice: boolean;
    rowsLabels: string[];
    colsLabels: string[];
  };
  nps?: {
    canDisplayLabels: boolean;
    leftLabel?: string;
    rightLabel?: string;
    canStartAtZero: boolean;
    escale: number;
  };
  number?: {
    hasMaxMinLimit: boolean;
    maxValue?: number;
    minValue?: number;
    incValue?: number;
  };
  phone?: {
    hasValidation: boolean;
  };
  radioButton?: {
    hasHorizontalAlignment: boolean;
    hasRandomResponsesOrder: boolean;
    answerOptions: AnswerOptions[];
  };
  shortText?: {
    placeholder?: string;
    hasLimitedChars: boolean;
    maxChars?: number;
  };
  slider?: {
    minValue: number;
    minLabel?: string;
    maxValue: number;
    maxLabel?: string;
    canHideValue: boolean;
  };
  sortList?: {
    hasRandomResponsesOrder: boolean;
    answerOptions: AnswerOptions[];
  };
}

function formatList(list: ListOptionsProps[] | undefined): AnswerOptions[] {
  const listData: AnswerOptions[] = [];

  if (list) {
    for (let i = 0; i < list.length; i += 1) {
      if (list[i].image) {
        const data: AnswerOptions = {
          text: list[i].text,
          image: list[i].image,
        };
        listData.push(data);
      } else {
        const data: AnswerOptions = { text: list[i].text };
        listData.push(data);
      }
    }
  }

  return listData;
}

export default function getQuestionConfigByAlias(
  question: Question,
): QuestionConfig | undefined {
  const initialConfig = {
    name: question.label || '',
    isRequired: question.isRequired,
    description: question.description,
  };

  switch (question.alias) {
    case FieldTypes.MultipleChoice: {
      return {
        ...initialConfig,
        checkBox: {
          hasHorizontalAlignment: question.hasHorizontalAlignment || false,
          hasRandomResponsesOrder: question.hasRandomResponsesOrder || false,
          hasLimitedChoices: question.hasLimitedChoices || false,
          maxChoices: question?.maxChoices,
          answerOptions: formatList(question.answerOptions),
        },
      };
    }
    case FieldTypes.Date: {
      return {
        ...initialConfig,
        date: {
          isDateRequired: question.isDateRequired || false,
          dateFormat: question?.dateFormat,
          isTimeRequired: question.isTimeRequired || false,
          timeFormat: question?.timeFormat,
          canCaptureInterval: question.canCaptureInterval || false,
        },
      };
    }
    case FieldTypes.Dropdown: {
      return {
        ...initialConfig,
        dropDown: {
          hasRandomResponsesOrder: question.hasRandomResponsesOrder || false,
          answerOptions: formatList(question.answerOptions),
        },
      };
    }
    case FieldTypes.Email: {
      return {
        ...initialConfig,
        email: {
          hasValidation: question.hasValidation || false,
        },
      };
    }
    case FieldTypes.ImageChoice: {
      return {
        ...initialConfig,
        imageChoice: {
          isMultipleChoice: question.isMultipleChoice || false,
          hasRandomResponsesOrder: question.hasRandomResponsesOrder || false,
          answerOptions: formatList(question.answerOptions),
          ...(question.isMultipleChoice
            ? { maxChoices: question?.maxChoices }
            : {}),
        },
      };
    }
    case FieldTypes.Link: {
      return {
        ...initialConfig,
        link: {
          hasValidation: question.hasValidation || false,
        },
      };
    }
    case FieldTypes.LongText: {
      return {
        ...initialConfig,
        longText: {
          placeholder: question?.placeholder,
          hasLimitedChars: question.hasLimitedChars || false,
          maxChars: question?.maxChars,
        },
      };
    }
    case FieldTypes.Matrix: {
      return {
        ...initialConfig,
        matrix: {
          isMultipleChoice: question.isMultipleChoice || false,
          rowsLabels: question.rowsLabels || [],
          colsLabels: question.colsLabels || [],
        },
      };
    }
    case FieldTypes.Nps: {
      return {
        ...initialConfig,
        nps: {
          canDisplayLabels: question.canDisplayLabels || false,
          leftLabel: question?.leftLabel,
          rightLabel: question?.rightLabel,
          canStartAtZero: question.canStartAtZero || false,
          escale: parseInt(
            question.escale ? question.escale.toString() : '10',
            10,
          ),
        },
      };
    }
    case FieldTypes.Number: {
      return {
        ...initialConfig,
        number: {
          hasMaxMinLimit: question.hasMaxMinLimit || false,
          maxValue: question?.maxValue,
          minValue: question?.minValue,
          incValue: question?.incValue,
        },
      };
    }
    case FieldTypes.Phone: {
      return {
        ...initialConfig,
        phone: {
          hasValidation: question.hasValidation || false,
        },
      };
    }
    case FieldTypes.SingleChoice: {
      return {
        ...initialConfig,
        radioButton: {
          hasHorizontalAlignment: question.hasHorizontalAlignment || false,
          hasRandomResponsesOrder: question.hasRandomResponsesOrder || false,
          answerOptions: formatList(question.answerOptions),
        },
      };
    }
    case FieldTypes.ShortText: {
      return {
        ...initialConfig,
        shortText: {
          placeholder: question?.placeholder,
          hasLimitedChars: question.hasLimitedChars || false,
          maxChars: question?.maxChars,
        },
      };
    }
    case FieldTypes.Slider: {
      return {
        ...initialConfig,
        slider: {
          minValue: question.minValue || 0,
          minLabel: question?.minLabel,
          maxValue: question.maxValue || 10,
          maxLabel: question?.maxLabel,
          canHideValue: question?.canHideValue || false,
        },
      };
    }
    case FieldTypes.SortList:
      return {
        ...initialConfig,
        sortList: {
          hasRandomResponsesOrder: question.hasRandomResponsesOrder || false,
          answerOptions: formatList(question.answerOptions),
        },
      };
    default:
      return undefined;
  }
}
