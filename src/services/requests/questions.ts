import { gql } from 'apollo-boost';

import { errorFragment } from './fragment';

export const LIST_OWN_QUESTIONS = gql`
  query($form: ID!, $formPage: Int) {
    data: listOwnQuestions(form: $form, formPage: $formPage) {
      questions {
        _id
        formPage
        type {
          _id
          kind
          alias
          name
        }
        config {
          name
          description
          isRequired
          shortText {
            placeholder
            hasLimitedChars
            maxChars
          }
        }
        position
        createdAt
        updatedAt
      }
      total
      pages
      ${errorFragment}
    }
  }
`;

export const LIST_QUESTION_TYPES = gql`
  query($perPage: Int) {
    data: listQuestionTypes(perPage: $perPage) {
      types {
        _id
        kind
        alias
        name
        cover
        description
      }
      total
      pages
      error {
        message
        statusCode
        internalCode
      }
    }
  }
`;

export const CREATE_OWN_QUESTION = gql`
  mutation($input: CreateOwnQuestionInput!) {
    data: createOwnQuestion(input: $input) {
      question {
        _id
      }
      error {
        message
        statusCode
      }
    ${errorFragment}
    }
  }
`;
