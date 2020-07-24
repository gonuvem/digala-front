import { toast } from 'react-toastify';
import * as Yup from 'yup';

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

function formatList(list: any): any {
  const listData: Array<any> = [];
  for (var i = 0; i < list.length; i++) {
    if (list[i].content) {
      const data: Object = { text: list[i].content };
      listData.push(data);
    } else if (list[i].label && list[i].image) {
      const data: Object = { text: list[i].label, image: list[i].image };
      listData.push(data);
    }
  }
  return listData;
}

function getTypeQuestion(question: any): any {
  switch (question.alias) {
    case 'checkBox': {
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
          hasHorizontalAlignment: question.rowDirection,
          hasRandomResponsesOrder: question.randomSort,
          hasLimitedChoices: question.limitChoices,
          maxChoices: question?.choiceMaxAmmount,
          answerOptions: formatList(question.listOptions),
        },
      };
      return config;
    }
    case 'date': {
      const config = {
        name: question.label,
        isRequired: question.isRequired,
        description: question?.description,
        date: {
          isDateRequired: question.dateRequired,
          dateFormat: question?.dateFormat,
          isTimeRequired: question.timeRequired,
          timeFormat: question?.timeFormat,
          canCaptureInterval: question.selectRange,
        },
      };
      return config;
    }
    case 'dropDown': {
      const config = {
        name: question.label,
        isRequired: question.isRequired,
        description: question?.description,
        dropDown: {
          hasRandomResponsesOrder: question.randomSort,
          answerOptions: formatList(question.listOptions),
        },
      };
      return config;
    }
    case 'email': {
      const config = {
        name: question.label,
        isRequired: question.isRequired,
        description: question?.description,
        email: {
          hasValidation: question.validatePattern,
        },
      };
      return config;
    }
    case 'imageChoice': {
      const config = {
        name: question.label,
        isRequired: question.isRequired,
        description: question?.description,
        imageChoice: {
          isMultipleChoice: question.multipleChoice,
          maxChoices: question?.choiceMaxAmmount,
          hasRandomResponsesOrder: question.randomSort,
          answerOptions: formatList(question.imgChoices),
        },
      };
      return config;
    }
    case 'link': {
      const config = {
        name: question.label,
        isRequired: question.isRequired,
        description: question?.description,
        link: {
          hasValidation: question.validatePattern,
        },
      };
      return config;
    }
    case 'longText': {
      const config = {
        name: question.label,
        isRequired: question.isRequired,
        description: question?.description,
        longText: {
          placeholder: question?.shortTextPlaceholder,
          hasLimitedChars: question.limitCharacter,
          maxChars: question?.shortTextMaxValue,
        },
      };

      return config;
    }

    case 'matrix': {
      const config = {
        name: question.label,
        isRequired: question.isRequired,
        description: question?.description,
        matrix: {
          isMultipleChoice: question.multipleChoice,
          rowsLabels: question.lines,
          colsLabels: question.columns,
        },
      };
      return config;
    }

    case 'nps': {
      const config = {
        name: question.label,
        isRequired: question.isRequired,
        description: question?.description,
        nps: {
          canDisplayLabels: question.showSubtitles,
          leftLabel: question?.leftSubtitle,
          rightLabel: question?.rightSubtitle,
          canStartAtZero: question.startZero,
          escale: question.scale,
        },
      };
      return config;
    }

    case 'number': {
      const config = {
        name: question.label,
        isRequired: question.isRequired,
        description: question?.description,
        number: {
          hasMaxMinLimit: question.limitMaxMin,
          maxValue: question?.maxValue,
          minValue: question?.minValue,
          incValue: question?.stepSize,
        },
      };
      return config;
    }
    case 'phone': {
      const config = {
        name: question.label,
        isRequired: question.isRequired,
        description: question?.description,
        phone: {
          hasValidation: question.validatePattern,
        },
      };
      return config;
    }

    case 'radioButton': {
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
          hasHorizontalAlignment: question.rowDirection,
          hasRandomResponsesOrder: question.randomSort,
          answerOptions: formatList(question.listOptions),
        },
      };
      return config;
    }

    case 'shortText': {
      const config = {
        name: question.label,
        isRequired: question.isRequired,
        description: question?.description,
        longText: {
          placeholder: question?.shortTextPlaceholder,
          hasLimitedChars: question.limitCharacter,
          maxChars: question?.shortTextMaxValue,
        },
      };
      return config;
    }

    case 'slider': {
      const config = {
        name: question.label,
        isRequired: question.isRequired,
        description: question?.description,
        slider: {
          minValue: question.lowerLimit,
          minLabel: question?.leftSubtitle,
          maxValue: question.upperLimit,
          maxLabel: question?.rightSubtitle,
          canHideValue: question?.hideValue,
        },
      };
      return config;
    }

    case 'sortList': {
      const config = {
        name: question.label,
        isRequired: question.isRequired,
        description: question?.description,
        sortList: {
          hasRandomResponsesOrder: question.randomSort,
          answerOptions: formatList(question.listOptions),
        },
      };
      return config;
    }
  }
}

export default async function createOwnQuestions(
  createsForm: Function,
  formData: Question[] | null,
  formId: string,
  questionTypes: any[],
): Promise<void> {
  try {
    if (!formData || !formId) {
      throw new Error('Form Data not sended');
    }

    const questionsArray: Array<any> = [];
    for (let i = 0; i < formData.length; i++) {
      const config = getTypeQuestion(formData[i]);
      const questionType = questionTypes.find((question) => {
        return question.alias === formData[i].alias;
      });

      if (questionType?._id) {
        let questionConfig: QuestionProps = {
          type: questionType?._id,
          formPage: 1,
          position: i,
          config: config,
        };
        questionsArray.push(questionConfig);
      }
    }

    const sendData: QuestionDTO = {
      form: formId,
      questions: questionsArray,
    };
    console.log(sendData);

    await CreateQuestion.validate(sendData.questions, { abortEarly: false });

    if (formData === null) {
      throw new Error('Form data is null');
    }

    const response = await createsForm({ variables: { input: sendData } });

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
