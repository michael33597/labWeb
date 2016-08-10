import Vue from 'vue';
import App from './App';
import VueRouter from 'vue-router';
import { configRouter } from './route-config';

/* eslint-disable no-new */
// new Vue({
//   el: 'body',
//   components: { App },
// });

Vue.use(VueRouter);
// create router
const router = new VueRouter({
  hashbang: true,
  history: false,
  saveScrollPosition: true,
  transitionOnLoad: true,
});

configRouter(router);

router.start(App, '#app');
// just for debugging
window.router = router;
