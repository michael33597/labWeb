<template>
  <div id="app">
    <navbar class="fixed-top"></navbar>
    <div class="hero">
      <h1>Hero Section</h1>
      <img class="logo" src="./assets/logo.png">
      <hello></hello>
    </div>


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

.logo {
  width: 100px;
  height: 100px
}
</style>
