import ApolloClient from 'apollo-boost';

const STAGING_API = 'https://dig-api-staging.herokuapp.com/';
const PRODUCTION_API = 'https://dig-api-staging.herokuapp.com/';

export const GRAPHQL_URL =
  process.env.NODE_ENV === 'production' && process.env.STAGING_APP !== 'true'
    ? PRODUCTION_API
    : STAGING_API;

const client = new ApolloClient({
  uri: GRAPHQL_URL,
});

export default client;
