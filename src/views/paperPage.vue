<template lang="html">
  <div class="">
    <h1>Paper Page</h1>
    <a v-link="{name: 'papers'}">Back to paper list</a>
    <page-content :database="database" :record="record" :type="type" :excerpt="false"></page-content>
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
      getParams: '',
      // prev: null,
      // next: null,
    };
  },
  methods: {
    getPostRecord(slug) {
      const posts = this.database.posts;
      // const categories = this.database.categories;
      // const routeTime = this.database.deployment.routeTime;
      const displayTime = this.database.deployment.displayTime;
      posts.forEach((post) => {
        if (post.slug === slug) {
          this.record = post;
          this.record.displayTime = utils.formatTime(this.record.date, displayTime);
          this.record.categoryTitle = post.category;
        }
      });
    },
  },
  route: {
    data(transition) {
      const params = transition.to.params;
      this.getParams = params;
      // const category = (params && params.category);
      const slug = params.slug;
      this.getPostRecord(slug);

      transition.next();
    },
  },
};
</script>

<style lang="css">
</style>
