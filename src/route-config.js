import about from './views/about';

export function configRouter(router) {
  router.map({
    '/about': {
      component: about,
      name: 'about',
    },
  });
}
