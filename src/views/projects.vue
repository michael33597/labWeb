<template lang="html">
<div>
  <h1>Projects List</h1>
  <ul>
    <li v-for="byYear in projectsByYear | orderBy 'year' -1" track-by="$index">
      <h4>
        <a v-text="byYear.year"></a>
      </h4>
      <ul>
        <li v-for="project in byYear.projects" track-by="$index">
          <a v-text="project.title"></a>
          <project-content :database="database" :record="project"></project-content>
        </li>
      </ul>
    </li>
  </ul>


</div>

</template>

<script>
import utils from '../utils.js';
import projectContent from '../components/projectContent.vue';
export default {
  props: ['database'],
  components: {
    projectContent,
  },
  data() {
    return {
      projectsByYear: {},
      record: {},
      thisprojects: {},
    };
  },

  methods: {
    classifyAllProjects() {
      const result = utils.clssifyProjects(this.database);
      this.projectsByYear = result.projectsByYear;
    },
  },
  route: {
    data(transition) {
      this.classifyAllProjects();

      this.$dispatch('updateDocumentTitle', 'Archive');
      transition.next();
    },
  },
};
</script>

<style lang="scss">
</style>
