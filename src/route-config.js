import home from './views/home';
import about from './views/about';
import people from './views/people';
import projects from './views/projects';
import papers from './views/papers';
import peoplePage from './views/peoplePage';

export function configRouter(router) {
  router.map({
    '/': {
      component: home,
      name: 'home',
    },
    '/about': {
      component: about,
      name: 'about',
    },
    '/people': {
      component: people,
      name: 'people',
    },
    '/poeple/name': {
      component: peoplePage,
      name: 'person',
    },
    '/projects': {
      component: projects,
      name: 'projects',
    },
    '/papers': {
      component: papers,
      name: 'papers',
    },
  });
  /* global VUELOG_DATABASE */
  if (VUELOG_DATABASE.deployment.useHomepage) {
    router.on('/', {
      name: 'home',
      component: home,
    });
  } else {
    router.redirect({
      '/': '/papers',
      '/p/:p': '/blog/p/:p',
    });
  }
}
