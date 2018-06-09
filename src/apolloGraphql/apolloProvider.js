import { apolloClient } from './apolloClientConnection'
import VueApollo from 'vue-apollo'
export const apolloProvider = new VueApollo({
  defaultClient: apolloClient
//   defaultOptions: {
//   // apollo options applied to all queries in components
//     $query: {
//       loadingKey: 'loading',
//       fetchPolicy: 'cache-and-network'
//     }
//   }
})
