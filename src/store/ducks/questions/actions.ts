import { action } from 'typesafe-actions';
import { QuestionsTypes, Question } from './types';

export const addQuestion = (question: Question): {} =>
  action(QuestionsTypes.ADD_QUESTION, question);

export const loadQuestions = (questions: Question[]): {} =>
  action(QuestionsTypes.LOAD_QUESTIONS, questions);

export const focusQuestion = (questionId: string): {} =>
  action(QuestionsTypes.FOCUS_QUESTION, questionId);

export const clearFocusedQuestion = (): {} =>
  action(QuestionsTypes.CLEAR_FOCUSED_QUESTION);

export const replaceQuestion = (updatedQuestions: Question[]): {} =>
  action(QuestionsTypes.REPLACE_QUESTION, updatedQuestions);
