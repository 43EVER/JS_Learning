import Vue from 'vue'
import Router from 'vue-router'
import ListArticle from './views/ListArticle.vue'
import CreateArticle from './views/CreateArticle.vue'
import EditArticle from './views/EditArticle.vue'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path    : '/',
      name    : 'home',
      redirect: '/articles/index'
    },
    {
      path: '/articles/index',
      name: 'index-article',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: ListArticle
    },
    {
      path: '/articles/create',
      name: 'create-article',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: CreateArticle
    },
    {
      path: '/articles/:id/edit',
      name: 'edit-article',
      component: EditArticle
    }
  ]
})
