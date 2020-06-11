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
