<template lang="html">
  <!-- render article -->
  <div class="article">
    <h1 v-if="showTitle && !excerpt" class="post-title" v-text="title"></h1>
    <div v-html="content"></div>
  </div>

</template>

<script>
import hljs from 'highlight.js';
import marked from 'marked';
// import utils from '../utils.js';
export default {
  props: ['database', 'record', 'type', 'excerpt'],

  data() {
    return {
      title: '',
      content: '',
      showTitle: true,
      path: '',
    };
  },
  methods: {
    parseContent(md) {
      const delimiter = '\n---\n';
      const delimiterPosition = md.indexOf(delimiter);
      const metadata = md.slice(0, delimiterPosition).split('\n');
      let content = md.slice(delimiterPosition + delimiter.length);
      const title = metadata[0].replace('title:', '').trim();

      if (title === 'NOSHOW') {
        this.showTitle = false;
        this.title = this.record.title;
      } else {
        this.title = (title || this.record.title);
      }

      if (this.excerpt) {
        content = content.split('<!-- more -->')[0];
      } else {
        this.$dispatch('updateDocumentTitle', this.title);
      }
      content = content.replace(/```([^\n]*)\n([\s\S]+?)\n```/g, ($block, $lang, $code) => {
        let formatted;
        try {
          formatted = hljs.highlight($lang, $code);
        } catch (e) {
          formatted = hljs.highlightAuto($code);
        }
        return `<pre data-lang="${formatted.language}">
          <code class="hljs ${formatted.language}">${formatted.value}</code></pre>`;
      });

      this.content = marked(content);
    },
    getContent(record) {
      // Safari and Android doesn't suppport fetch API and promise well, at the moment
      // this.fetchContent(record).then(this.parseContent)

      const folder = this.database.deployment.folder;
      // const year = utils.formatTime(record.date, this.database.deployment.routeTime);
      const fullpath = `${folder}/posts/papers/${record.slug}.md`;

      /* global XMLHttpRequest */
      const xhr = new XMLHttpRequest();
      xhr.open('GET', fullpath, true);
      xhr.onload = () => {
        if (xhr.status === 200) {
          this.parseContent(xhr.responseText);
        }
      };
      xhr.send(null);
    },
  },
  activate(done) {
    const record = this.record;
    if (record && record.category && record.date && record.slug) {
      this.getContent(record);
    }
    done();
  },
  watch: {
    record(newRecord, oldRecord) {
      if (newRecord && newRecord !== oldRecord) {
        this.getContent(newRecord);
      }
    },
  },
};
</script>

<style lang="css">
</style>
