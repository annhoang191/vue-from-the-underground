<template>
  <v-app id="app-bg">
    <BottomNav />
    <Introduction />
  </v-app>
</template>

<script>
import Introduction from './components/Introduction.vue'
import BottomNav from './components/BottomNav.vue'

export default {
  name: 'App',

  components: {
    Introduction,
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

// .div-intro {
//   margin-top: 25%;
//   h2 {
//     text-align: center;
//     font-style: italic;
//   }
//   span {
//     float: right
//   }
// }

// .text-xs-center {
//   position: absolute;
//   top: 50%;
//   left: 50%;
//   transform: translate(-50%, -50%);
//   -ms-transform: translate(-50%, -50%); /* IE 9 */
//   -webkit-transform: translate(-50%, -50%);
//   .intro-btn {
//     font-size: 1.5em !important;
//     font-weight: bold;
//     font-family: 'PT Serif Caption', serif;
//   }
// }

// .slide-fade-enter-active {
//   transition: all 1.5s ease;
// }
// .slide-fade-leave-active {
//   transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
// }
// .slide-fade-enter, .slide-fade-leave-to
// /* .slide-fade-leave-active below version 2.1.8 */ {
//   transform: translateX(10px);
//   opacity: 0;
// }
</style>
