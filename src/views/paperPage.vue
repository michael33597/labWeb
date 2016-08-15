<template lang="html">
  <div class="">
    <h1>Paper Page</h1>
    <a v-link="{name: 'papers'}">Back to paper list</a>
    <page-content :database="database"></page-content>
  </div>

</template>

<script>
import pageContent from '../components/pageContent.vue';
import utils from '../utils.js';
export default {
  props: ['database'],
  components: {
    pageContent,
  },
  data() {
    return {
      record: {},
      type: 'post',
      // prev: null,
      // next: null,
    };
  },
  methods: {
    getPostRecord(category, slug) {
      const posts = this.database.posts;
      const categories = this.database.categories;
      const routeTime = this.database.deployment.routeTime;
      const displayTime = this.database.deployment.displayTime;
      posts.forEach((post) => {
        if (post.category === category && post.slug === slug) {
          this.record = post;
          this.record.displayTime = utils.formatTime(this.record.date, displayTime);
          this.record.routeTime = utils.formatTime(this.record.date, routeTime);

          // 前後按鈕

          categories.forEach((cate) => {
            if (cate.slug === category) {
              this.record.categoryTitle = cate.title;
              return;
            }
          });
        }
      });
    },
  },
  route: {
    data(transition) {
      const params = transition.to.params;
      const category = (params && params.category);
      const slug = (params && params.post);
      this.getPostRecord(category, slug);

      transition.next();
    },
  },
};
</script>

<style lang="css">
</style>
