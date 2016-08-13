<template lang="html">
<div>
  <div class="host-hero section">
    <div class="section-content">
      <h1>People page</h1>
      <div class="flex-row">
        <div class="flex-item">
          <img src="../assets/logo.png" alt="iron-man" / class="host-img">
          <h2>陳建旭 教授</h2>
          <ul>
            <li>chenhsu@mail.ncku.edu.tw </li>
            <li>06-2757575 ext 54324</li>
          </ul>
        </div>
        <div class="flex-item">
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni modi doloremque excepturi laudantium maxime explicabo cumque deleniti voluptate deserunt.</p>
        </div>
      </div>
    </div>
  </div>
  <div class="time-line section">
    <ul class="section-content time-list">
      <li class="time-list-year" v-for="n in 10"> <!-- vfor -->
        <h4 class="year-heading" v-text="2016 - n"></h4>
        <ul class="people-list">
          <li class="people" v-for="x in 3">
            <a v-link="{name: 'person'}">
              <div class="people-img"></div>
              <h5 class="people-name">John Dou {{x}}</h5>
            </a>
          </li>
        </ul>
      </li>

    </ul>

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
      msg: 'about pages',
    };
  },
};
</script>

<style lang="scss">
.host-img{
  width: 200px;
  height: auto;
}

.section{
  padding: 25px 0;
}

.time-line{
  position: relative;

}

.time-list-year{
  z-index: 5;
  position: relative;
  margin: 12px;
  width: 100%;
  display: flex;


  .year-heading{
    width: 120px;
  }
  .people-list{
    display: flex;
  }
}

.people{
  margin: 25px;
}

.people-img{
  background-color: #c4b0b0;
  width: 120px;
  height: 120px;
  border-radius: 50%;
}

.people-name{
  text-align: center;
  padding-top: 3px;
}

</style>
