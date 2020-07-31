// Dependencies
import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  scrollBehavior() {
    return { x: 0, y: 0 }
  },
  routes: [
    {
      path: '/',
      name: 'home',
      // route level code-splitting
      // this generate a separate chunk ([route-name].[hash].js) for this route
      // which is lazy-loaded when the route is visited
      component: () => import('@/views/Home'),
    },
    {
      path: '/how-it-works',
      name: 'howitworks',
      // route level code-splitting
      // this generate a separate chunk ([route-name].[hash].js) for this route
      // which is lazy-loaded when the route is visited
      component: () => import('@/views/HowItWorks'),
    },
    {
      path: '/faqs',
      name: 'faqs',
      // route level code-splitting
      // this generate a separate chunk ([route-name].[hash].js) for this route
      // which is lazy-loaded when the route is visited
      component: () => import('@/views/FAQs'),
    },
    {
      path: '/templates',
      name: 'templates',
      // route level code-splitting
      // this generate a separate chunk ([route-name].[hash].js) for this route
      // which is lazy-loaded when the route is visited
      component: () => import('@/views/Templates'),
    },
    {
      path: '/templates/:id',
      name: 'template-detail',
      // route level code-splitting
      // this generate a separate chunk ([route-name].[hash].js) for this route
      // which is lazy-loaded when the route is visited
      component: () => import('@/views/Template'),
    },
    {
      path: '/contact',
      name: 'contact',
      // route level code-splitting
      // this generate a separate chunk ([route-name].[hash].js) for this route
      // which is lazy-loaded when the route is visited
      component: () => import('@/views/Contact'),
    },
    {
      path: '*',
      name: 'error',
      // route level code-splitting
      // this generate a separate chunk ([route-name].[hash].js) for this route
      // which is lazy-loaded when the route is visited
      component: () => import('@/views/Error'),
    },
  ],
})
