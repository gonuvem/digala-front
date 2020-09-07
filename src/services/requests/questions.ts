import { gql } from 'apollo-boost';

import { errorFragment } from './fragment';

export const LIST_OWN_QUESTIONS = gql`
  query($form: ID!, $formPage: Int, $perPage: Int) {
    data: listOwnQuestions(form: $form, formPage: $formPage, perPage: $perPage) {
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
          checkBox {
            hasHorizontalAlignment
            hasRandomResponsesOrder
            hasLimitedChoices
            maxChoices
            answerOptions {
              _id
              text
              image
            }
          }
          date {
            isDateRequired
            dateFormat
            isTimeRequired
            timeFormat
            canCaptureInterval
          }

          dropDown {
            hasRandomResponsesOrder
            answerOptions {
              _id
              text
              image
            }
          }

          email {
            hasValidation
          }

          imageChoice {
            isMultipleChoice
            maxChoices
            hasRandomResponsesOrder
            answerOptions {
              _id
              text
              image
            }
          }

          link {
            hasValidation
          }

          longText {
            placeholder
            hasLimitedChars
            maxChars
          }

          matrix {
            isMultipleChoice
            rowsLabels
            colsLabels
          }

          nps {
            canDisplayLabels
            canStartAtZero
            leftLabel
            rightLabel
            escale
          }

          number {
            hasMaxMinLimit
            maxValue
            minValue
            incValue
          }

          phone {
            hasValidation
          }

          radioButton {
            hasHorizontalAlignment
            hasRandomResponsesOrder
            answerOptions {
              _id
              text
              image
            }
          }

          shortText {
            placeholder
            hasLimitedChars
            maxChars
          }

          slider {
            minValue
            minLabel
            maxValue
            maxLabel
            canHideValue
          }

          sortList {
            hasRandomResponsesOrder
            answerOptions {
              _id
              text
              image
            }
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

export const CREATE_OWN_QUESTIONS = gql`
  mutation($input: CreateOwnQuestionsInput!) {
    data: createOwnQuestions(input: $input) {
      questions {
        _id
      }
      ${errorFragment}
    }
  }
`;

export const UPDATE_OWN_QUESTIONS = gql`
  mutation($input: UpdateOwnQuestionsInput!) {
    data: updateOwnQuestions(input: $input) {
      ${errorFragment}
    }
  }
`;
