import { gql } from 'apollo-boost';

import { errorFragment } from './fragment';

export const SUBMIT_RESPONSE = gql`
  mutation($input: SubmitResponseInput!) {
    data: submitResponse(input: $input) {
      ${errorFragment}
    }
  }
`;
