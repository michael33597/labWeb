<template>
  <nav class="nav-top">
    <ul class="nav-barand"><a v-link="{path: '/'}">Logo ErgoLab</a></ul>
    <ul class="nav-list">
      <li class="nav-item"><a v-link="{path: '/people'}">People</a></li>
      <li class="nav-item"><a v-link="{path: '/projects'}">Projects</a></li>
      <li class="nav-item"><a v-link="{path: '/papers'}">Papers</a></li>
      <li class="nav-item"><a v-link="{path: '/about'}">About</a></li>
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
  @import '../scss/global';
  .nav-top{
    width: 100%;
    position: relative;
    height: 70px;
    display: flex;
    justify-content: space-between;
    margin-bottom: 0;

    ul{
      list-style: none;
    }
  }

  .nav-list{
    display: flex;
  }

  .nav-item{
    margin: 0 12px;
    a{
      color: $link-color;
      text-decoration: none;
    }
  }

</style>
