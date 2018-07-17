import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import ToDoComponent from '@/components/ToDO'

Vue.use(Router)
/* eslint-disable */

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Todo',
      component: ToDoComponent
    },
  ]
})
