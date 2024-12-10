import { ApolloClient, InMemoryCache } from '@apollo/client';

const apolloClient = () => {
  return new ApolloClient({
    uri: process.env.GRAPHQL_KEY,
    cache: new InMemoryCache(),
  });
};

export default apolloClient;
