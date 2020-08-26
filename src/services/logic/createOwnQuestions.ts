import { toast } from 'react-toastify';
import * as Yup from 'yup';

import FieldTypes from '../../utils/fieldsTypes';

import { Question } from '../../store/ducks/questions/types';
import CreateQuestion from '../../schemas/createQuestion';

interface QuestionDTO {
  form: string;
  questions: QuestionProps[] | null;
}

interface QuestionProps {
  type: string;
  formPage: number;
  position: number;
  config: {
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
      escale: string;
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
    shorText?: {
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
  };
}

interface AnswerOptions {
  text: string;
  image?: string;
}

function formatList(list: AnswerOptions[] | undefined): any {
  const listData: Array<any> = [];

  if (list) {
    for (let i = 0; i < list.length; i += 1) {
      if (list[i].image) {
        const data: Record<string, any> = {
          text: list[i].text,
          image: list[i].image,
        };
        listData.push(data);
      } else {
        const data: Record<string, any> = { text: list[i].text };
        listData.push(data);
      }
    }
  }

  return listData;
}

function getTypeQuestion(question: Question): any {
  switch (question.alias) {
    case FieldTypes.MultipleChoice: {
      let notRequiredConfig = {};
      if (question.description) {
        notRequiredConfig = {
          description: question.description,
        };
      }
      const config = {
        ...notRequiredConfig,
        name: question.label,
        isRequired: question.isRequired,
        checkBox: {
          hasHorizontalAlignment: question.hasHorizontalAlignment,
          hasRandomResponsesOrder: question.hasRandomResponsesOrder,
          hasLimitedChoices: question.limitChoices,
          maxChoices: question?.maxChoices,
          answerOptions: formatList(question.answerOptions),
        },
      };
      return config;
    }
    case FieldTypes.Date: {
      const config = {
        name: question.label,
        isRequired: question.isRequired,
        description: question?.description,
        date: {
          isDateRequired: question.isDateRequired,
          dateFormat: question?.dateFormat,
          isTimeRequired: question.isTimeRequired,
          timeFormat: question?.timeFormat,
          canCaptureInterval: question.canCaptureInterval,
        },
      };
      return config;
    }
    case FieldTypes.Dropdown: {
      const config = {
        name: question.label,
        isRequired: question.isRequired,
        description: question?.description,
        dropDown: {
          hasRandomResponsesOrder: question.hasRandomResponsesOrder,
          answerOptions: formatList(question.answerOptions),
        },
      };
      return config;
    }
    case FieldTypes.Email: {
      const config = {
        name: question.label,
        isRequired: question.isRequired,
        description: question?.description,
        email: {
          hasValidation: question.hasValidation,
        },
      };
      return config;
    }
    case FieldTypes.ImageChoice: {
      const config = {
        name: question.label,
        isRequired: question.isRequired,
        description: question?.description,
        imageChoice: {
          isMultipleChoice: question.isMultipleChoice,
          hasRandomResponsesOrder: question.hasRandomResponsesOrder,
          answerOptions: formatList(question.answerOptions),
          ...(question.isMultipleChoice
            ? { maxChoices: question?.maxChoices }
            : {}),
        },
      };
      return config;
    }
    case FieldTypes.Link: {
      const config = {
        name: question.label,
        isRequired: question.isRequired,
        description: question?.description,
        link: {
          hasValidation: question.hasValidation,
        },
      };
      return config;
    }
    case FieldTypes.LongText: {
      const config = {
        name: question.label,
        isRequired: question.isRequired,
        description: question?.description,
        longText: {
          placeholder: question?.placeholder,
          hasLimitedChars: question.hasLimitedChars,
          maxChars: question?.maxChars,
        },
      };

      return config;
    }
    case FieldTypes.Matrix: {
      const config = {
        name: question.label,
        isRequired: question.isRequired,
        description: question?.description,
        matrix: {
          isMultipleChoice: question.isMultipleChoice,
          rowsLabels: question.rowsLabels,
          colsLabels: question.colsLabels,
        },
      };
      return config;
    }
    case FieldTypes.Nps: {
      const config = {
        name: question.label,
        isRequired: question.isRequired,
        description: question?.description,
        nps: {
          canDisplayLabels: question.canDisplayLabels,
          leftLabel: question?.leftLabel,
          rightLabel: question?.rightLabel,
          canStartAtZero: question.canStartAtZero,
          escale: question.escale,
        },
      };
      return config;
    }
    case FieldTypes.Number: {
      const config = {
        name: question.label,
        isRequired: question.isRequired,
        description: question?.description,
        number: {
          hasMaxMinLimit: question.hasMaxMinLimit,
          maxValue: question?.maxValue,
          minValue: question?.minValue,
          incValue: question?.incValue,
        },
      };
      return config;
    }
    case FieldTypes.Phone: {
      const config = {
        name: question.label,
        isRequired: question.isRequired,
        description: question?.description,
        phone: {
          hasValidation: question.hasValidation,
        },
      };
      return config;
    }
    case FieldTypes.SingleChoice: {
      let notRequiredConfig = {};
      if (question.description) {
        notRequiredConfig = {
          description: question.description,
        };
      }
      const config = {
        ...notRequiredConfig,
        name: question.label,
        isRequired: question.isRequired,
        radioButton: {
          hasHorizontalAlignment: question.hasHorizontalAlignment,
          hasRandomResponsesOrder: question.hasRandomResponsesOrder,
          answerOptions: formatList(question.answerOptions),
        },
      };
      return config;
    }
    case FieldTypes.ShortText: {
      const config = {
        name: question.label,
        isRequired: question.isRequired,
        description: question?.description,
        shorText: {
          placeholder: question?.placeholder,
          hasLimitedChars: question.hasLimitedChars,
          maxChars: question?.maxChars,
        },
      };
      return config;
    }
    case FieldTypes.Slider: {
      const config = {
        name: question.label,
        isRequired: question.isRequired,
        description: question?.description,
        slider: {
          minValue: question.minValue,
          minLabel: question?.minLabel,
          maxValue: question.maxValue,
          maxLabel: question?.maxLabel,
          canHideValue: question?.canHideValue,
        },
      };
      return config;
    }
    case FieldTypes.SortList: {
      const config = {
        name: question.label,
        isRequired: question.isRequired,
        description: question?.description,
        sortList: {
          hasRandomResponsesOrder: question.hasRandomResponsesOrder,
          answerOptions: formatList(question.answerOptions),
        },
      };
      return config;
    }
    default:
      return {};
  }
}

export default async function createOwnQuestions(
  createQuestions: Function,
  questions: Question[] | null,
  formId: string,
  questionTypes: any[],
): Promise<void> {
  try {
    if (!questions || !formId) {
      throw new Error('Form Data not sended');
    }

    const questionsArray: Array<any> = [];

    for (let i = 0; i < questions.length; i += 1) {
      const config = getTypeQuestion(questions[i]);
      const questionType = questionTypes.find((type) => {
        return type.alias === questions[i].alias;
      });

      console.log('Question:: ', questions[i]);

      if (questionType?._id) {
        const questionConfig: QuestionProps = {
          type: questionType?._id,
          formPage: 1,
          position: i,
          config,
        };
        questionsArray.push(questionConfig);
      }
    }

    const sendData: QuestionDTO = {
      form: formId,
      questions: questionsArray,
    };

    await CreateQuestion.validate(sendData.questions, { abortEarly: false });

    if (questions === null) {
      throw new Error('Form data is null');
    }

    const response = await createQuestions({ variables: { input: sendData } });

    if (response.data.data.error) {
      throw new Error(response.data.data.error.message);
    }

    toast.success('Pesquisa cadastrada com sucesso');
  } catch (err) {
    if (err instanceof Yup.ValidationError) {
      console.log(err);
      toast.error('Você precisa preencher todos os campos obragatórios');
      return;
    }

    toast.error(err.message);
  }
}
