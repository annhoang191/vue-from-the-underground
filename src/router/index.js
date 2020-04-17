import Vue from 'vue'
import VueRouter from 'vue-router'

import Introduction from '../components/Introduction.vue'
import About from '../components/About.vue'
import Notes from '../components/Notes.vue'

Vue.use(VueRouter)

export default new VueRouter({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Introduction
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/notes',
      name: 'Notes',
      component: Notes
    }
  ]
})
