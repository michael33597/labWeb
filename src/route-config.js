import about from './views/about';
import people from './views/people';

export function configRouter(router) {
  router.map({
    '/about': {
      component: about,
      name: 'about',
    },
    '/people': {
      component: people,
      name: 'people',
    },
  });
}
