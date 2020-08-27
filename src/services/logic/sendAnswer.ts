import { Question, ListOptionsProps } from '../../store/ducks/questions/types';
import FieldTypes from '../../utils/fieldsTypes';

interface IFormData {
  [key: string]: string;
}

type Answer = ListOptionsProps | string;

type AnswerFormatted = string | string[] | Date[] | number;

type Alias = 'shortText' | 'longText';

function formatAnswer(alias: Alias, answer: any): AnswerFormatted {
  switch (alias) {
    case FieldTypes.ShortText:
      return answer;
    case FieldTypes.LongText:
      return answer;
    case FieldTypes.Dropdown:
      return [answer.value];
    case FieldTypes.Phone:
      return answer;
    case FieldTypes.Link:
      return answer;
    case FieldTypes.Email:
      return answer;
    case FieldTypes.ImageChoice:
      return answer;
    default:
      return '';
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
          [questionWithSameId.alias]: formatAnswer(
            questionWithSameId.alias as Alias,
            answer,
          ),
        };
      }

      return {};
    },
  );

  console.log('Answer Formatted: ', answersFormatted);
}
