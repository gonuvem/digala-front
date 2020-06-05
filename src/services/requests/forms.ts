import { gql } from 'apollo-boost';

import { errorFragment } from './fragment';

export const LIST_OWN_FORMS = gql`
  query($page: Int = 0, $perPage: Int = 5, $sort: String) {
    data: listOwnForms(page: $page, perPage: $perPage, sort: $sort) {
      forms {
        _id
        numResponses
        isActive
        createdAt
        config {
          name
        }
      }
      ${errorFragment}
    }
  }
`;

export const DELETE_FORM = gql`
  mutation($id: ID!) {
    deleteOwnForm(id: $id) {
      error {
        message
      }
    }
  }
`;
