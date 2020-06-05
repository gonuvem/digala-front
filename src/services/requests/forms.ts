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

export const CREATE_OWN_FORM = gql`
  mutation(
    $isActive: Boolean
    $name: String!
    $description: String
    $beginDate: Date
    $endDate: Date
    $hasLimitedResponses: Boolean
    $maxResponses: Int
    $isTotemMode: Boolean
    $canDisplayProgressBar: Boolean
    $progressBarType: String
    $canAllowMultipleSubmissions: Boolean
    $background: String
    $logo: String
    $headerText: String
    $hasLogoInHeader: Boolean
    $headerBackground: String
    $footerText: String
    $footerBackground: String
  ) {
    createOwnForm(
      input: {
        isActive: $isActive
        config: {
          name: $name
          description: $description
          beginDate: $beginDate
          endDate: $endDate
          hasLimitedResponses: $hasLimitedResponses
          maxResponses: $maxResponses
          isTotemMode: $isTotemMode
          canDisplayProgressBar: $canDisplayProgressBar
          progressBarType: $progressBarType
          canAllowMultipleSubmissions: $canAllowMultipleSubmissions
        }
        style: {
          background: $background
          logo: $logo
          headerText: $headerText
          hasLogoInHeader: $hasLogoInHeader
          headerBackground: $headerBackground
          footerText: $footerText
          footerBackground: $footerBackground
        }
      }
    ) {
      form {
        _id
      }
      ${errorFragment}
    }
  }
`;
