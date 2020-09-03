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
        answersAndQuestions {
          question {
            _id
          }
        }
        createdAt
      }
      total
      ${errorFragment}
    }
  }
`;
