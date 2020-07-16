import { toast } from 'react-toastify';
import * as Yup from 'yup';

import { Question } from '../../store/ducks/questions/types';
import UpdateFormSchema from '../../schemas/updateForm';

interface QuestionDTO {
  form: string;
  questions: QuestionProps[];
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

export default async function createOwnQuestions(
  createsForm: Function,
  formData: Question[] | null,
  formId: string | null,
): Promise<void> {
  try {
    if (!formData || !formId) {
      throw new Error('Form Data not sended');
    }
    console.log(formData);
    // const sendData: QuestionDTO = {
    //   form: formId,
    //   questions:
    // };

    // if (formData.config.description) {
    //   sendData.description = formData?.config.description;
    // }

    // if (formData.style.footerText) {
    //   sendData.footerText = formData.style.footerText;
    // }

    // if (formData.style.headerText) {
    //   sendData.headerText = formData.style.headerText;
    // }

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
