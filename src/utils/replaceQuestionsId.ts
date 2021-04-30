import { Question, IListOfUpdatedIds } from '../store/ducks/questions/types';

function replaceQuestionsId(
  Questions: Question[],
  ListOfUpdatedIds: IListOfUpdatedIds[],
): Question[] {
  const updatedQuestions = [...Questions];

  ListOfUpdatedIds.forEach((updatePair) => {
    const questionInSamePositionIndex = updatedQuestions.findIndex(
      (question) => question.position === updatePair.position,
    );

    if (questionInSamePositionIndex) {
      updatedQuestions[questionInSamePositionIndex].id = updatePair._id;
    }
  });

  return updatedQuestions;
}

export default replaceQuestionsId;
