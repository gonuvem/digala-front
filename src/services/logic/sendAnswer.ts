import { Question, ListOptionsProps } from '../../store/ducks/questions/types';
import FieldTypes from '../../utils/fieldsTypes';
import parseToDate from '../../utils/parseToDate';

interface IFormData {
  [key: string]: string;
}

type Answer = ListOptionsProps | string;

type AnswerFormatted = string | string[] | Date[] | number;

type Alias = 'shortText' | 'longText';

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
    default:
      return answer;
  }
}

export default function sendAnswer(
  formData: IFormData,
  questions: Question[],
): void {
  const answersFormatted = Object.entries(formData).map(
    ([questionId, answer]) => {
      const questionWithSameId = questions.find(
        (question) => question.id === questionId,
      );

      if (questionWithSameId) {
        return {
          question: questionId,
          [questionWithSameId.alias]: formatAnswer(questionWithSameId, answer),
        };
      }

      return {};
    },
  );

  console.log('Answer Formatted: ', answersFormatted);
}
