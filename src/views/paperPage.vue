<template lang="html">
  <div class="">
    <h1>Paper Page</h1>
    <a v-link="{name: 'papers'}">Back to paper list</a>
    <page-content :database="database"></page-content>
  </div>

</template>

<script>
import pageContent from '../components/pageContent.vue';
export default {
  props: ['database'],
  components: {
    pageContent,
  },
  data() {
    return {
      /* global VUELOG_DATABASE */
    };
  },
};
</script>

<style lang="css">
</style>
