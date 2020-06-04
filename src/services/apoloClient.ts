import { ApolloClient, HttpLink, InMemoryCache } from 'apollo-boost';
import { setContext } from 'apollo-link-context';

const STAGING_URL = 'https://dig-api-staging.herokuapp.com/graphql';
const PRODUCTION_URL = 'https://dig-api-staging.herokuapp.com/graphql';

const cache = new InMemoryCache();
const link = new HttpLink({
  uri: process.env.NODE_ENV ? STAGING_URL : PRODUCTION_URL,
});

const authLink = setContext(async (_, { headers }) => {
  const token = localStorage.getItem('token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  cache,
  link: authLink.concat(link),
});

export default client;
