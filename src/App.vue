<template>
  <div id="app">
    <navbar class="fixed-top"></navbar>
    <div class="hero">
      <h1>Hero Section</h1>
      <a v-link="{ path: '/about'}">about</a>
      <img class="logo" src="./assets/logo.png">
      <hello></hello>
    </div>
    <router-view> </router-view>




  </div>
</template>

<script>
import Hello from './components/Hello';
import navbar from './components/navbar';


export default {
  components: {
    Hello,
    navbar,
  },
};

</script>

<style lang="scss">

@import "scss/global";

.logo {
  width: 100px;
  height: 100px
}

.hero{
  display: block;
  margin: 15px auto;
  text-align: center;

}
</style>
