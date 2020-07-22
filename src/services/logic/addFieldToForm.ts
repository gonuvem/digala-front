import { uuid } from 'uuidv4';

import * as QuestionsActions from '../../store/ducks/questions/actions';

interface QuestionDTO {
  alias: string;
  defaultPayload?: any;
}

function getConfigByAlias(alias: string): any {
  switch (alias) {
    case 'checkBox': {
      return {
        hasHorizontalAlignment: false,
        hasRandomResponsesOrder: false,
        hasLimitedChoices: false,
      };
    }
    case 'date': {
      return {
        isDateRequired: false,
        isTimeRequired: false,
        canCaptureInterval: false,
      };
    }
    case 'dropDown': {
      return { hasRandomResponsesOrder: false };
    }
    case 'email': {
      return { hasValidation: false };
    }
    case 'imageChoice': {
      return { isMultipleChoice: false, hasRandomResponsesOrder: false };
    }
    case 'link': {
      return { hasValidation: false };
    }
    case 'longText': {
      return { hasLimitedChars: false };
    }

    case 'matrix': {
      return { isMultipleChoice: false };
    }

    case 'nps': {
      return { canDisplayLabels: false, canStartAtZero: false, escale: 10 };
    }

    case 'number': {
      return { hasMaxMinLimit: false };
    }
    case 'phone': {
      return { hasValidation: false };
    }

    case 'radioButton': {
      return { hasHorizontalAlignment: false, hasRandomResponsesOrder: false };
    }

    case 'longText': {
      return { hasLimitedChars: false };
    }

    case 'slider': {
      return { hideValue: false };
    }

    case 'sortList': {
      return { hasRandomResponsesOrder: false };
    }
  }
}

export default async function addFieldToForm(
  dispatch: Function,
  { alias, defaultPayload }: QuestionDTO,
) {
  const localQuestionId = uuid();
  const localFieldName = `${alias}:${localQuestionId}`;

  const defaultConfig = await getConfigByAlias(alias);

  dispatch(
    QuestionsActions.addQuestion({
      ...defaultConfig,
      alias,
      id: localQuestionId,
      name: localFieldName,
      isRequired: false,
      ...defaultPayload,
    }),
  );
  dispatch(QuestionsActions.focusQuestion(localQuestionId));
}
