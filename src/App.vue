<template>
  <v-app id="app-bg">
    <v-container>
      <div class="text-xs-center" v-show="!showIntro">
        <v-btn class="ma-2 intro-btn" tile outlined @click="showIntro = !showIntro">
          HOW'S LIFE IN THE UNDERGROUND?
        </v-btn>
      </div>
      <transition name="slide-fade">
        <div v-if="showIntro" class="div-intro">
          <h2>I am convinced that we underground folk ought to be kept on a curb.
            Though we may sit forty years underground without speaking,
            when we do come out into the light of day and break out we talk and talk and talk....
          </h2>
          <span> Fyodor Dostoyevsky (Notes from Underground)</span>
        </div>
      </transition>
    </v-container>
  </v-app>
</template>

<script>
export default {
  name: 'App',

  components: {
  },

  data: () => ({
    showIntro: false
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
.div-intro {
  margin-top: 25%;
  h2 {
    text-align: center;
    font-style: italic;
  }
  span {
    float: right
  }
}

.text-xs-center {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%); /* IE 9 */
  -webkit-transform: translate(-50%, -50%);
  .intro-btn {
    font-size: 1.5em !important;
    font-weight: bold;
    font-family: 'PT Serif Caption', serif;
  }
}

.slide-fade-enter-active {
  transition: all 1.5s ease;
}
.slide-fade-leave-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}
</style>
