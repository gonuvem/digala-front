import { action } from 'typesafe-actions';
import { QuestionsTypes, Question } from './types';

export const addQuestion = (question: Question): {} =>
  action(QuestionsTypes.ADD_QUESTION, question);

export const loadQuestions = (questions: Question[]): {} =>
  action(QuestionsTypes.LOAD_QUESTIONS, questions);

export const focusQuestion = (questionId: string): {} =>
  action(QuestionsTypes.FOCUS_QUESTION, questionId);

export const replaceQuestion = (question: Question): {} =>
  action(QuestionsTypes.REPLACE_QUESTION, question);