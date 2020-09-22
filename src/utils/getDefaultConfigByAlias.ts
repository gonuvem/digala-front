import { Question } from '../store/ducks/questions/types';
import fields from './fieldsTypes';

export default function getDefaultConfigByAlias(
  alias: string,
): Partial<Question> {
  switch (alias) {
    case fields.MultipleChoice: {
      return {
        hasHorizontalAlignment: false,
        hasRandomResponsesOrder: false,
        hasLimitedChoices: false,
      };
    }
    case fields.Date: {
      return {
        isDateRequired: false,
        isTimeRequired: false,
        canCaptureInterval: false,
      };
    }
    case fields.Dropdown: {
      return { hasRandomResponsesOrder: false };
    }
    case fields.Email: {
      return { hasValidation: false };
    }
    case fields.ImageChoice: {
      return { isMultipleChoice: false, hasRandomResponsesOrder: false };
    }
    case fields.Link: {
      return { hasValidation: false };
    }
    case fields.LongText: {
      return { hasLimitedChars: false };
    }
    case fields.Matrix: {
      return {
        isMultipleChoice: false,
        rowsLabels: ['linha 01'],
        colsLabels: ['coluna 01'],
      };
    }
    case fields.Nps: {
      return { canDisplayLabels: false, canStartAtZero: false, escale: 10 };
    }
    case fields.Number: {
      return { hasMaxMinLimit: false };
    }
    case fields.Phone: {
      return { hasValidation: false };
    }
    case fields.SingleChoice: {
      return { hasHorizontalAlignment: false, hasRandomResponsesOrder: false };
    }
    case fields.ShortText: {
      return { hasLimitedChars: false };
    }
    case fields.Slider: {
      return { canHideValue: false, minValue: 0, maxValue: 10 };
    }
    case fields.SortList: {
      return { hasRandomResponsesOrder: false };
    }
    default:
      return {};
  }
}
