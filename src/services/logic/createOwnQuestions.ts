import { toast } from 'react-toastify';
import * as Yup from 'yup';

import { Question } from '../../store/ducks/questions/types';
import UpdateFormSchema from '../../schemas/updateForm';
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
      answerOptions: AnswerOptions[];
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
      incValue: number;
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
  // console.log(listData);
  return listData;
}

function getTypeQuestion(question: any): any {
  switch (question.alias) {
    case 'checkBox': {
      const config = {
        name: question.name,
        isRequired: question.isRequired,
        description: question?.description,
        checkBox: {
          hasHorizontalAlignment: question.rowDirection,
          hasRandomResponsesOrder: question.randomSort,
          answerOptions: formatList(question.listOptions),
        },
      };
      return config;
    }
    case 'date': {
      const config = {
        name: question.name,
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
        name: question.name,
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
        name: question.name,
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
        name: question.name,
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
        name: question.name,
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
        name: question.name,
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
        name: question.name,
        isRequired: question.isRequired,
        description: question?.description,
        matrix: {
          isMultipleChoice: question.multipleChoice,
          rowsLabels: question.lines,
          colsLabels: question.columns,
          // answerOptions: null,
        },
      };
      return config;
    }

    case 'nps': {
      const config = {
        name: question.name,
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
        name: question.name,
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
        name: question.name,
        isRequired: question.isRequired,
        description: question?.description,
        phone: {
          hasValidation: question.validatePattern,
        },
      };
      return config;
    }

    case 'radioButton': {
      const config = {
        name: question.name,
        isRequired: question.isRequired,
        description: question?.description,
        radioButton: {
          hasHorizontalAlignment: question.rowDirection,
          hasRandomResponsesOrder: question.randomSort,
          answerOptions: formatList(question.listOptions),
        },
      };
      return config;
    }

    case 'longText': {
      const config = {
        name: question.name,
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
        name: question.name,
        isRequired: question.isRequired,
        description: question?.description,
        slider: {
          minValue: question.lowerLimit,
          minLabel: question?.leftSubtitle,
          maxValue: question.upperLimit,
          maxLabel: question?.rightSubtitle,
          // incValue: question,
          // canHideValue: boolean;
        },
      };
      return config;
    }

    case 'sortList': {
      const config = {
        name: question.name,
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
  formId: string | null,
): Promise<void> {
  try {
    if (!formData || !formId) {
      throw new Error('Form Data not sended');
    }

    const questionsArray: Array<any> = [];
    for (let i = 0; i < formData.length; i++) {
      const config = await getTypeQuestion(formData[i]);

      var questionConfig: QuestionProps = {
        type: formData[i].id,
        formPage: 1,
        position: i,
        config: config,
      };
      questionsArray.push(questionConfig);
    }

    console.log(questionsArray);
    const sendData: QuestionDTO = {
      form: formId,
      questions: questionsArray,
    };

    // await UpdateFormSchema.validate(sendData, { abortEarly: false });

    // if (formData === null) {
    //   throw new Error('Form data is null');
    // }

    // const response = await updateForm({ variables: { ...sendData } });

    // if (response.data.data.error) {
    //   throw new Error(response.data.data.error.message);
    // }

    // toast.success('Formulário atualizado com sucesso');
  } catch (err) {
    if (err instanceof Yup.ValidationError) {
      console.log(err);
      toast.error('Você precisa preencher todos os campos das configurações');
      return;
    }

    toast.error(err.message);
  }
}
