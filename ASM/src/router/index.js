import { createRouter, createWebHistory } from 'vue-router'

import Login from '../pages/Login.vue'
import Register from '../pages/Register.vue'
import Home from '../pages/Home.vue'
import CreatePost from '../pages/CreatePost.vue'
import PostDetail from '../pages/PostDetail.vue'

const routes = [
  {
    path: '/',
    redirect: '/login'
  },

  {
    path: '/login',
    component: Login
  },

  {
    path: '/register',
    component: Register
  },

  {
    path: '/home',
    component: Home
  },

  // CREATE + EDIT
  {
    path: '/create-post/:id?',
    component: CreatePost
  },

  // VIEW DETAIL
  {
    path: '/post/:id',
    name: 'post-detail',
    component: PostDetail
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
