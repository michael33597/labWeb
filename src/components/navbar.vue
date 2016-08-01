<template>
  <nav class="nav-top">
    <ul class="nav-list">
      <li class="nav-item">item</li>
      <li class="nav-item">item</li>
      <li class="nav-item">item</li>
    </ul>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      // note: changing this line won't causes changes
      // with hot-reload because the reloaded component
      // preserves its current state and we are modifying
      // its initial state.
      msg: 'nav',
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .nav-top{
    width: 100%;
    position: relative;
    height: 70px;
  }

</style>
