import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import About from './views/About.vue';

import Search from './views/Search.vue';


Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Search',
      component: Search,
    },
    
    {
      path: '/about',
      name: 'About',
      component: About,
    },
   
  ],
});
