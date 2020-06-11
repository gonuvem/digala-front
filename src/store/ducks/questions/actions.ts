import { action } from 'typesafe-actions';
import { QuestionsTypes, Question } from './types';

export const addQuestion = (question: Question): {} =>
  action(QuestionsTypes.ADD_QUESTION, question);

export const loadQuestions = (questions: Question[]): {} =>
  action(QuestionsTypes.LOAD_QUESTIONS, questions);
