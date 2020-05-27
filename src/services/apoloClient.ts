import { ApolloClient, HttpLink, InMemoryCache } from 'apollo-boost';
import { setContext } from 'apollo-link-context';

const STAGING_URL = 'https://dig-api-staging.herokuapp.com/graphql';
const PRODUCTION_URL = 'https://dig-api-staging.herokuapp.com/graphql';

const cache = new InMemoryCache();
const link = new HttpLink({
  uri: process.env.NODE_ENV ? STAGING_URL : PRODUCTION_URL,
});

const authLink = setContext(async (_, { headers }) => {
  // const token = await getToken();
  return {
    headers: {
      ...headers,
      // authorization: token ? `Bearer ${token}` : '',
      authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZWNiZDNhZGY3MGE3YTA0Y2FjMzI5YTIiLCJpYXQiOjE1OTA1MjUwMjMsImV4cCI6MTU5MTEyOTgyMywiaXNzIjoiY29udGF0b0Bnb251dmVtLmNvbSJ9.87P0Qeif0F_COluQQ749qdpHtgnmKzAnJ_bHJ5NjS74`,
    },
  };
});

const client = new ApolloClient({
  cache,
  link: authLink.concat(link),
});

export default client;
