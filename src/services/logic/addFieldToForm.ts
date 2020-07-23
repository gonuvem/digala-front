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
        rowDirection: false,
        randomSort: false,
        limitChoices: false,
      };
    }
    case 'date': {
      return {
        dateRequired: false,
        timeRequired: false,
        selectRange: false,
      };
    }
    case 'dropDown': {
      return { randomSort: false };
    }
    case 'email': {
      return { validatePattern: false };
    }
    case 'imageChoice': {
      return { multipleChoice: false, randomSort: false };
    }
    case 'link': {
      return { validatePattern: false };
    }
    case 'longText': {
      return { limitCharacter: false };
    }

    case 'matrix': {
      return { multipleChoice: false };
    }

    case 'nps': {
      return { showSubtitles: false, startZero: false, scale: '10' };
    }

    case 'number': {
      return { limitMaxMin: false };
    }
    case 'phone': {
      return { validatePattern: false };
    }

    case 'radioButton': {
      return { rowDirection: false, randomSort: false };
    }

    case 'shortText': {
      return { limitCharacter: false };
    }

    case 'slider': {
      return { hideValue: false, lowerLimit: 0, upperLimit: 10 };
    }

    case 'sortList': {
      return { randomSort: false };
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
