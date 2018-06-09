// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import VueApollo from 'vue-apollo'
import { apolloProvider } from './apolloGraphql/apolloProvider'
import ('../node_modules/font-awesome/css/font-awesome.min.css') 
Vue.config.productionTip = false
Vue.use(VueApollo)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  provide: apolloProvider.provide(),
  router,
  store,
  components: { App },
  template: '<App/>'
})
