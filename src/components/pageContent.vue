<template lang="html">
  <!-- render article -->
  <div class="article">
    <h1>Article</h1>
    <h2>{{title}}</h2>
  </div>

</template>

<script>
// import hljs from 'highlight.js';
// import marked from 'marked';
// import utils from '../utils.js';
export default {
  props: ['database'],

  data() {
    return {
      title: 'Hello Title',
      content: '',
      showTitle: true,
    };
  },
};
</script>

<style lang="css">
</style>
