var VUELOG_DATABASE = {

  // DO NOT touch this part
  system: {
    name: 'Vuelog',
    description: 'A backend-free blog system built on top of Vue.js',
    version: '0.4.0',
    project: 'https://github.com/myst729/Vuelog',
    release: 'https://github.com/myst729/Vuelog/releases',
    logo: './static/img/logo.svg',
    author: 'Leo Deng'
  },

  // Edit your site from here
  deployment: {
    title: 'Ergolab',
    url: 'https://myst729.github.io/Vuelog/',
    logo: './static/favicon.ico',
    folder: './docs',          // The folder name where your source markdown files are stored
    perPage: 5,                // How many posts are listed in a blog/category view
    displayTime: 'YYYY-MM-DD', // 'YYYY', 'YYYY-MM', or 'YYYY-MM-DD'
    routeTime: 'YYYY',         // 'YYYY', 'YYYY-MM', or 'YYYY-MM-DD', DO NOT include '/'
    useHomepage: true          // If a dedicated homepage isn't specified, it'll route to `/blog`
  },

  // Search functionality is served with Algolia
  // search: {
  //   enable: false,
  //   appId: '',
  //   apiKey: '',
  //   indexName: '',
  //   displayKey: ''
  // },

  // navigation: [
  //   {
  //     label: 'Guide',
  //     type: 'category',
  //     path: '/category/guide'
  //   },
  //   {
  //     label: 'About',
  //     type: 'page',
  //     path: '/page/all-about-vuelog'
  //   },
  //   {
  //     label: 'Changelog',
  //     type: 'page',
  //     path: '/page/changelog'
  //   },
  //   {
  //     label: 'Archive',
  //     type: 'archive',
  //     path: '/archive'
  //   },
  //   {
  //     label: 'Links',
  //     type: 'dropdown',
  //     children: [
  //       {
  //         label: 'Weibo',
  //         type: 'outgoing',
  //         link: 'http://weibo.com/myst729'
  //       },
  //       {
  //         label: 'GitHub',
  //         type: 'outgoing',
  //         link: 'https://github.com/myst729'
  //       },
  //       {
  //         label: 'StackOverflow',
  //         type: 'outgoing',
  //         link: 'https://stackoverflow.com/users/1032492'
  //       }
  //     ]
  //   }
  // ],

  // pages: [
  //   {
  //     title: 'All about Vuelog',
  //     slug: 'all-about-vuelog'
  //   },
  //   {
  //     title: 'Changelog',
  //     slug: 'changelog'
  //   }
  // ],

  categories: [
    {
      title: 'Guide',
      slug: 'guide'
    },
    {
      title: 'Papers',
      slug: 'papers'
    }
  ],

  papers: [
    {
      title: 'paper test',
      slug: 'paper-test',
      tags: ['tags', 'tags'],
      date: 20160812
    }
  ],

  projects: [
    {
      title: 'Developing Storytelling Tools for Drama Education Activities for Children',
      slug: 'dream-stage',
      tags: ['tags', 'tags'],
      date: 20130101,
    },
    {
      title: 'Long Dong Chiang',
      slug: 'Long-Dong-Chiang',
      tags: ['tags', 'tags'],
      date: 20190101,
    }
  ],

  posts: [
    {
      title: 'paper test',
      slug: 'paper-test',
      category: 'papers',
      date: 20160812
    },
    {
      title: 'How to add a post or page?',
      slug: 'how-to-add-a-post-or-page',
      category: 'guide',
      date: 20160416
    },
    {
      title: 'The structure of Vuelog',
      slug: 'the-structure-of-vuelog',
      category: 'guide',
      date: 20160414
    },
    {
      title: 'The (so-called) database',
      slug: 'the-so-called-database',
      category: 'guide',
      date: 20160412
    },
    {
      title: 'Talk is cheap, show me the styles!',
      slug: 'the-styles',
      category: 'guide',
      date: 20160411
    },
    {
      title: 'Using Disqus comment service',
      slug: 'using-disqus-comment-service',
      category: 'guide',
      date: 20160410
    },
    {
      title: 'Using Algolia search service',
      slug: 'using-algolia-search-service',
      category: 'guide',
      date: 20160409
    },
    {
      title: 'Vuelog hacker’s guide',
      slug: 'vuelog-hackers-guide',
      category: 'guide',
      date: 20160408
    }
  ],

  //end post

  // 人物資訊物件
  peopleList:[
    {
      name: '周宥騰',
      year: 2016,
      type: 'master',
      mail: 'yumaster1994@gmail.com',
      slug: 'tung-again',
    },
    {
      name: '劉馥瑜',
      year: 2016,
      type: 'master',
      mail: 'asfiksears@gmail.com',
      slug:'fish-with-cash',
    },
    {
      name: '李宜家',
      year: 2016,
      type: 'phD',
      mail: 'jellynina@gmail.com',
      slug: 'ikea',
    },
    {
      name: '賴品儀',
      year: 2015,
      type: 'master',
      mail: 'pinyi1019@gmail.com',
      slug: 'joe',
    },
    {
      name: '李易睿',
      year: 2000,
      type: 'phD',
      mail: 'lee@gmail.com',
    }


  ]

}
