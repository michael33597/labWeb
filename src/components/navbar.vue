<template>
  <nav class="nav-top">
    <ul class="nav-barand">ErgoLab</ul>
    <ul class="nav-list">
      <li class="nav-item"><a href="">People</a></li>
      <li class="nav-item"><a href="">Projects</a></li>
      <li class="nav-item"><a href="">Paper</a></li>
      <li class="nav-item"><a href="">Domain</a></li>
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
