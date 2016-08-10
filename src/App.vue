<template>
  <div>
    <navbar class="fixed-top"></navbar>
    <router-view></router-view>

  </div>
</template>

<script>
import navbar from './components/navbar';


export default {
  components: {
    navbar,
  },
};

</script>

<style lang="scss">

@import "scss/global";


</style>
