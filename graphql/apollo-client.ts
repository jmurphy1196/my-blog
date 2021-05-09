import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: `http://${process.env.NEXT_PUBLIC_STRAPI_URL}/graphql`,
  cache: new InMemoryCache(),
});

export default client;
