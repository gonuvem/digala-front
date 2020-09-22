import { gql } from 'apollo-boost';

import { errorFragment } from './fragment';

export const GET_CHARTS = gql`
  query($id: ID!) {
    data: getChartsData(id: $id) {
      data {
        type
        name
        data {
          id
          day
          label
          respostas
          value
        }
      }
     ${errorFragment}
    }
  }
`;
