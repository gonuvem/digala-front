import fields from './fieldsTypes';
export default function getDefaultConfigByAlias(alias: string): any {
  switch (alias) {
    case fields.MultipleChoice: {
      return {
        rowDirection: false,
        randomSort: false,
        limitChoices: false,
      };
    }
    case fields.Date: {
      return {
        dateRequired: false,
        timeRequired: false,
        selectRange: false,
      };
    }
    case fields.Dropdown: {
      return { randomSort: false };
    }
    case fields.Email: {
      return { validatePattern: false };
    }
    case fields.ImageChoice: {
      return { multipleChoice: false, randomSort: false };
    }
    case fields.Link: {
      return { validatePattern: false };
    }
    case fields.LongText: {
      return { limitCharacter: false };
    }

    case fields.Matrix: {
      return {
        multipleChoice: false,
        lines: ['linha 01'],
        columns: ['coluna 01'],
      };
    }

    case fields.Nps: {
      return { showSubtitles: false, startZero: false, scale: '10' };
    }

    case fields.Number: {
      return { limitMaxMin: false };
    }
    case fields.Phone: {
      return { validatePattern: false };
    }

    case fields.SingleChoice: {
      return { rowDirection: false, randomSort: false };
    }

    case fields.ShortText: {
      return { limitCharacter: false };
    }

    case fields.Slider: {
      return { hideValue: false, lowerLimit: 0, upperLimit: 10 };
    }

    case fields.SortList: {
      return { randomSort: false };
    }

    default:
      return null;
  }
}
