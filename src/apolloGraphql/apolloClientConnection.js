import { ApolloClient } from 'apollo-client'
import { HttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'
const httpLink = new HttpLink({
  // You should use an absolute URL here
  uri: 'http://localhost:4000/graphql?',
  transportBatching: true
})

export const apolloClient = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
//   connectToDevTools: true
})
