import { isValid } from 'date-fns';

import { Question, ListOptionsProps } from '../../store/ducks/questions/types';
import FieldTypes from '../../utils/fieldsTypes';
import parseToDate from '../../utils/parseToDate';

interface IFormData {
  [key: string]: string;
}

type Answer = ListOptionsProps | string;

type AnswerFormatted = string | string[] | Date[] | number;

type Alias = 'shortText' | 'longText';

interface AnswerObject {
  question: string;
  answer: Record<string, any>;
}

function checkIfAnswerIsFilled(alias: string, answer: any): boolean {
  switch (alias) {
    case FieldTypes.ImageChoice:
    case FieldTypes.SingleChoice:
    case FieldTypes.MultipleChoice:
    case FieldTypes.Dropdown:
      return answer.length > 0;
    case FieldTypes.Date:
      return isValid(answer[0]);
    case FieldTypes.LongText:
    case FieldTypes.ShortText:
    case FieldTypes.Phone:
    case FieldTypes.Link:
    case FieldTypes.Email:
      return !!answer;
    case FieldTypes.Nps:
      return answer > -1;
    default:
      return true;
  }
}

function formatAnswer(question: Question, answer: any): AnswerFormatted {
  switch (question.alias) {
    case FieldTypes.Dropdown:
      return answer.value ? [answer.value] : [];
    case FieldTypes.Date:
      return [
        parseToDate({
          date: answer.date,
          time: answer.time,
          dateFormat: question.dateFormat || 'dayMonthYear',
          timeFormat: question.timeFormat || 'hourMinute',
        }),
      ];
    case FieldTypes.SortList:
      return answer.map((option: any) => option._id);
    case FieldTypes.Number:
    case FieldTypes.Slider:
      return parseInt(answer, 10);
    case FieldTypes.Nps:
      return parseInt(answer, 10) > -1
        ? parseInt(answer, 10) + 1
        : parseInt(answer, 10);
    default:
      return answer;
  }
}

export default async function sendAnswer(
  formId: string,
  formData: IFormData,
  questions: Question[],
  submitResponse: Function,
): Promise<void> {
  const answersFormatted: AnswerObject[] = [];

  Object.entries(formData).forEach(([questionId, answer]) => {
    const questionWithSameId = questions.find(
      (question) => question.id === questionId,
    );

    if (questionWithSameId) {
      const formatedAnswer = formatAnswer(questionWithSameId, answer);

      if (checkIfAnswerIsFilled(questionWithSameId.alias, formatedAnswer)) {
        answersFormatted.push({
          question: questionId,
          answer: {
            [questionWithSameId.alias]: formatedAnswer,
          },
        });
      }
    }
  });

  const payload = {
    form: formId,
    answersAndQuestions: answersFormatted,
  };

  try {
    const response = await submitResponse({ variables: { input: payload } });

    if (response.data.data.error) {
      throw new Error(response.data.data.error.message);
    }
  } catch (err) {
    throw new Error('Erro durante o envio dos dados');
  }
}
