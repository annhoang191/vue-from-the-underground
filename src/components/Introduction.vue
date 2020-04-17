<template>
  <v-container>
    <div class="text-xs-center" v-show="showButton">
      <v-btn class="ma-2 intro-btn" x-large tile outlined
        @click="toggleButton"
      >
        HOW'S LIFE IN THE UNDERGROUND?
      </v-btn>
    </div>
    <transition name="slide-fade">
      <div v-show="showIntroQuotes===true" class="div-intro"
        @click="hideIntro">
        <h2>I am convinced that we underground folk ought to be kept on a curb.
          Though we may sit forty years underground without speaking,
          when we do come out into the light of day and break out we talk and talk and talk....
        </h2>
        <span> Fyodor Dostoyevsky (Notes from Underground)</span>
      </div>
    </transition>
    <transition name="slide-fade">
      <Characters v-if="showCharacters===true" />
    </transition>
  </v-container>
</template>

<script>
import Characters from './Characters.vue'

export default {
  name: 'Introduction',
  components: {
    Characters
  },
  data() {
    return {
      showButton: true,
      showIntroQuotes: false,
      showCharacters: false
    }
  },
  methods: {
    toggleButton: function() {
      this.showButton = false
      this.showIntroQuotes = true
    },
    hideIntro: function() {
      this.showIntroQuotes = false
      this.showCharacters = setTimeout(() => {
        this.showCharacters = true
      }, 1000)
    }
  },
}
</script>

<style lang="scss" scoped>
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
  top: 43%;
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
  transition: all .4s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}
</style>
