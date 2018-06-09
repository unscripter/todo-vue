import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import TestComponent from '@/components/TestComponent'

Vue.use(Router)
/* eslint-disable */

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/testComponent',
      name: 'TestComponent',
      component: TestComponent
    }
  ]
})
