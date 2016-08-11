<template lang="html">
  <footer class="footer" role="contentinfo">
    <div class="footer-logo">
      <img src="https://raw.githubusercontent.com/thoughtbot/empties/master/source/images/placeholder.png" alt="Logo image">
    </div>
      <ul>
        <li><a href="javascript:void(0)">About</a></li>
        <li><a href="javascript:void(0)">Contact</a></li>
        <li><a href="javascript:void(0)">Products</a></li>
      </ul>
  </footer>
</template>

<script>
export default {
};
</script>

<style lang="scss">
@import '../scss/global';
.footer {
  $large-screen: 50em !default;

  .footer-logo {
    margin-bottom: 1em;
    margin-right: 1em;

    @include media($large-screen) {
      float: left;
      margin-bottom: 0;
    }

    img {
      height: 2.2em;
    }
  }

  ul {
    margin: 0;
    padding-left: 0;

    @include media($large-screen) {
      float: left;
      padding-top: 0.3em;
    }

    li {
      line-height: 1.5em;
      padding-right: 1em;

      @include media($large-screen) {
        display: inline;
        text-align: left;
      }
    }
  }
}
</style>
