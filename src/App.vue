<template>
  <div id="app">
    <navbar class="fixed-top"></navbar>
    <div class="hero">
      <h1>Hero Section</h1>
      <a v-link="{ path: '/about'}"></a>
      <img class="logo" src="./assets/logo.png">
      <hello></hello>
    </div>


  </div>
</template>

<script>
import Hello from './components/Hello';
import navbar from './components/navbar';
import about from './views/about';


export default {
  components: {
    Hello,
    navbar,
    about,
  },
};

</script>

<style lang="scss">

@import "scss/global";

.logo {
  width: 100px;
  height: 100px
}
</style>
