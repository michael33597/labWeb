import home from './views/home';
import about from './views/about';
import people from './views/people';
import projects from './views/projects';
import papers from './views/papers';

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
    '/projects': {
      component: projects,
      name: 'projects',
    },
    '/papers': {
      component: papers,
      name: 'papers',
    },
  });
}
