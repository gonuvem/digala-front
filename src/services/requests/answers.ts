import { gql } from 'apollo-boost';

import { errorFragment } from './fragment';

export const SUBMIT_RESPONSE = gql`
  mutation($input: SubmitResponseInput!) {
    data: submitResponse(input: $input) {
      ${errorFragment}
    }
  }
`;

export const LIST_OWN_RESPONSES = gql`
  query($form: ID!, $page: Int) {
    data: listOwnResponses(form: $form, page: $page ,perPage: 7) {
      responses {
        _id
        form {
          questions {
            _id
          }
        }
        answersAndQuestions {
          question {
            _id
          }
        }
        createdAt
      }
      total
      pages
      ${errorFragment}
    }
  }
`;

export const LIST_OWN_RESPONSES_WITH_ANSWERS = gql`
  query($form: ID!, $perPage: Int) {
    data: listOwnResponses(form: $form, perPage: $perPage) {
      responses {
        _id
        form {
          questions {
            _id
          }
        }
        answersAndQuestions {
          question {
            _id
            type {
              alias
            }
            config {
              name
            }
          }
          answer {
            checkBox
            date
            dropDown
            email
            imageChoice
            link
            longText
            matrix
            nps
            number
            phone
            radioButton
            shortText
            slider
            sortList
          }
        }
        createdAt
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
