import { gql } from 'apollo-boost';

import { errorFragment } from './fragment';

export const SHOW_FORM = gql`
  query($id: ID!) {
    showForm(id: $id) {
      form {
        _id
        config {
          name
          description
          beginDate
          endDate
          canDisplayProgressBar
          progressBarType
          canAllowMultipleSubmissions
        }
        numResponses
        style {
          background
          logo
          headerText
          hasLogoInHeader
          headerBackground
          footerText
          footerBackground
        }
      }
      ${errorFragment}
    }
  }
`;
