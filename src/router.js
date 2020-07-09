// Dependencies
import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  scrollBehavior() {
    return { x: 0, y: 0 };
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
      path: '/products',
      name: 'products',
      // route level code-splitting
      // this generate a separate chunk ([route-name].[hash].js) for this route
      // which is lazy-loaded when the route is visited
      component: () => import('@/views/Products'),
    },
    {
      path: '/products/:id',
      name: 'product-detail',
      // route level code-splitting
      // this generate a separate chunk ([route-name].[hash].js) for this route
      // which is lazy-loaded when the route is visited
      component: () => import('@/views/Product'),
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
