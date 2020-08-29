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

function formatAnswer(question: Question, answer: any): AnswerFormatted {
  switch (question.alias) {
    case FieldTypes.Dropdown:
      return [answer.value];
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
      return parseInt(answer, 10);
    case FieldTypes.Slider:
      return parseInt(answer, 10);
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
      answersFormatted.push({
        question: questionId,
        answer: {
          [questionWithSameId.alias]: formatAnswer(questionWithSameId, answer),
        },
      });
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
