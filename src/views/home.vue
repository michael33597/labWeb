<template lang="html">
  <div class="hero">
    <h1>home page</h1>
  </div>


</template>

<script>
export default {
  data() {
    return {
      // note: changing this line won't causes changes
      // with hot-reload because the reloaded component
      // preserves its current state and we are modifying
      // its initial state.
      msg: 'home pages',
    };
  },
};
</script>

<style lang="scss">
.hero{
  width: 100%;
  background-color: #554c4c;
  color: #FFF;
  display: block;
  margin-top: 0;
}
</style>
