import { createRouter, createWebHistory } from 'vue-router';

import Home from "../Home.vue"
import Foo from "../Foo.vue";

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/foo',
    name: 'Foo',
    component: Foo,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router