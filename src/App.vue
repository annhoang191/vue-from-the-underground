<template>
  <v-app id="app-bg">
    <BottomNav />
    <transition name="fade">
      <router-view></router-view>
    </transition>
  </v-app>
</template>

<script>
import BottomNav from './components/BottomNav.vue'

export default {
  name: 'App',

  components: {
    BottomNav
  },

  data: () => ({
  })
};
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=PT+Serif+Caption&display=swap');
@import url('https://fonts.googleapis.com/css?family=Cormorant+Garamond&display=swap');

* {
  font-family: 'Cormorant Garamond', serif;
}

#app-bg {
  background: url("./assets/background.jpg");
  background-position: center;
  background-size: cover;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
