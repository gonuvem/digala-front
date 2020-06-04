import { gql } from 'apollo-boost';

import { errorFragment } from './fragment';

export const SIGN_IN = gql`
  mutation($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      info {
        _id
        user {
          name
          roles
        }
      }
      ${errorFragment}
    }
  }
`;

export const FORGOT_PASSWORD = gql`
  mutation($email: String!) {
    forgotPassword(email: $email) {
      ${errorFragment}
    }
  }
`;
