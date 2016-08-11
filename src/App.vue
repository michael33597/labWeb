<template>
  <div>
    <navbar class="fixed-top"></navbar>
    <div class="body-content">
      <router-view></router-view>
    </div>
    
    <thefooter></thefooter>

  </div>
</template>

<script>
import navbar from './components/navbar';
import thefooter from './components/footer';


export default {
  components: {
    navbar,
    thefooter,
  },
};

</script>

<style lang="scss">

@import "scss/global";
.body-content{
  min-height: 800px;
  display: block;
}


</style>
