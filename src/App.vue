<template>
  <div >
    <navbar class="fixed-top"></navbar>
    <router-view :database="database"></router-view>
    <thefooter></thefooter>
  </div>


</template>

<script>
import navbar from './components/navbar';
import thefooter from './components/footer';


export default {
  components: {
    navbar,
    thefooter,
  },
  data() {
    return {
      /* global VUELOG_DATABASE */
      database: VUELOG_DATABASE,
    };
  },
  methods: {
    scrollTop() {
      if (document.scrollingElement && document.scrollingElement.scrollTop) {
        document.scrollingElement.scrollTop = 0;
        return;
      }

      if (document.documentElement && document.documentElement.scrollTop) {
        document.documentElement.scrollTop = 0;
        return;
      }

      document.body.scrollTop = 0;
    },
  },
  events: {
    updateDocumentTitle(label) {
      const title = this.database.deployment.title;
      document.title = label ? `${title} | ${label}` : title;
      this.scrollTop();
    },
  },
};

</script>

<style lang="scss">

@import "scss/global";
.body-content{
  min-height: 800px;
  display: block;
}


</style>
