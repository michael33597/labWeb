<template lang="html">
<div>
  <h1>papers List</h1>
  <div v-if="displayType === 'all'" class="content-body">

    <h2>Posts by Time:</h2>
    <ul>
      <li v-for="byYear in postsByYear | orderBy 'year' -1" track-by="$index">
        <h4>
          <a v-text="byYear.year"></a>
          <span v-text="' (' + byYear.posts.length + ')'"></span>
        </h4>
        <ul>
          <li v-for="post in byYear.posts" track-by="$index">
            <a v-link="{name: 'paperunit'}"  v-text="post.title"></a>
            <span> ( </span>
            <a v-text="post.categoryTitle"></a>
            <span> )</span>
          </li>
        </ul>
      </li>
    </ul>

  </div>
</div>
</template>

<script>
import utils from '../utils.js';

export default {
  props: ['database'],

  data() {
    return {
      displayType: 'all',
      postsByCategory: {},
      postsInCategory: {},
      postsByYear: {},
      postsInYear: {},
      peopleInY: {},
    };
  },

  methods: {
    classifyAllPosts() {
      const result = utils.classifyAllPosts(this.database);
      this.postsByCategory = result.byCategory;
      this.postsByYear = result.byYear;
      const peop = utils.classifyAllPeople(this.database);
      this.peopleInY = peop.peopleByYear;
    },

    classifyPosts(displayType, criteria) {
      if (displayType === 'category') {
        this.postsInCategory = this.postsByCategory[criteria] || {};
      } else if (displayType === 'year') {
        this.postsInYear = this.postsByYear[criteria] || {};
      }
    },
  },
  route: {
    data(transition) {
      this.displayType = 'all';
      this.classifyAllPosts();

      const params = transition.to.params;
      const criteria = (params && params.category || params.year);

      if (criteria) {
        this.displayType = params.category ? 'category' : 'year';
        this.classifyPosts(this.displayType, criteria);
      }

      this.$dispatch('updateDocumentTitle', 'Archive');
      transition.next();
    },
  },
};
</script>

<style lang="scss">
</style>
