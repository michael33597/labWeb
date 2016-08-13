<template lang="html">
  <div>
    <h1>People Personal Page</h1>
    <div class="people-nav">
      <div class="">
        Name
      </div>
      <div class="">
        Tab Control
      </div>
    </div>
    <div class="people-dash">
      <div class="people-side">
        <img src="../assets/logo.png" alt="iron-man" / class="host-img">
        <h2>Name</h2>
        <ul>
          <li>chenhsu@mail.ncku.edu.tw </li>
          <li>06-2757575 ext 54324</li>
        </ul>
        <h3>Resaerch Area</h3>
      </div>
      <div class="people-main">
        <h2>Introduction</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni modi doloremque excepturi laudantium maxime explicabo cumque deleniti voluptate deserunt.</p>
      </div>
    </div>


  </div>
</template>

<script>
export default {
  props: ['database'],
};
</script>

<style lang="scss">
</style>
