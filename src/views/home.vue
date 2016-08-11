<template lang="html">
  <div class="hero">
    <div class="hero-content">
      <img src="https://raw.githubusercontent.com/thoughtbot/empties/master/source/images/placeholder.png" alt="Logo Image" class="hero-logo">
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni modi doloremque excepturi laudantium maxime explicabo cumque deleniti voluptate deserunt.</p>
    </div>
  </div>
  <div class="section intro-sction">
    <div class="sction-content">
      <div class="col-1-2"><img src="http://fakeimg.pl/250x100/"></div>
      <div class="col-1-2">
        <h2>Interaction Design</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni modi doloremque excepturi laudantium maxime explicabo cumque deleniti voluptate deserunt
        </p>
      </div>
    </div>
    <div class="sction-content">
      <div class="col-1-2">
        <h2>Interaction Design</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni modi doloremque excepturi laudantium maxime explicabo cumque deleniti voluptate deserunt
        </p>
      </div>
      <div class="col-1-2"><img src="http://fakeimg.pl/250x100/"></div>
    </div>
    <div class="sction-content">
      <div class="col-1-2"><img src="http://fakeimg.pl/250x100/"></div>
      <div class="col-1-2">
        <h2>Interaction Design</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni modi doloremque excepturi laudantium maxime explicabo cumque deleniti voluptate deserunt
        </p>
      </div>
    </div>
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
@import "../scss/global";
.hero {
  $large-screen: 50em !default;
  align-items: center;
  background: url("https://raw.githubusercontent.com/thoughtbot/empties/master/source/images/background-image.png");
  background-position: right;
  background-size: none;
  display: flex;
  justify-content: center;
  min-height: 25em;
  padding: 2em;

  @include media($large-screen) {
    background-size: cover;
    background-position: left;
    justify-content: flex-end;
  }

  .hero-content {
    max-width: 20em;
    text-align: center;

    @include media($large-screen) {
      text-align: left;
    }
  }

  .hero-logo {
    margin: auto;
  }
}

.intro-sction{
  margin-top: 25px;
  .sction-content{
    max-height: 15px 12px;
  }

}

</style>
