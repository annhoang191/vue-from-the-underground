<template>
  <v-container>
    <v-content v-for="(character, index) in characters" :key="character.publication">
    <v-card class="d-inline-block mx-auto character-card"
      @mouseover="showQuoteBubble(index)"
      @mouseleave="hideQuoteBubble(index)"
    >
      <v-container>
        <v-row>
          <v-col cols="auto ma-2">
            <v-img
              height="200"
              width="200"
              :src="character.src"
            >
            </v-img>
          </v-col>
          <v-col cols="ma-10" class="px-2">
            <h2>{{character.name}}</h2>
            <span> of <strong>{{character.publication}}</strong>
              by {{character.author}}
            </span>
            <hr /><br/>
            <p>{{character.content}}</p>
          </v-col>
        </v-row>
      </v-container>
    </v-card>
    <transition name="slide-fade">
      <QuoteBubble :character="character"/>
    </transition>
    </v-content>
  </v-container>
</template>

<script>
import QuoteBubble from './QuoteBubble.vue'

export default {
  name: 'Characters',
  components: {
    QuoteBubble
  },
  data() {
    return {
      // showQuote: false,
      characters: [
        {
          src: 'https://lh4.ggpht.com/v4PGJBI0mqwrx8aepMFX5rsRWZRPIWBPY9kgjVI4VZNX75TtO1bETlQuUYcBxEmT_VsXKOareJk_F7LmN_PGXUtnoVDb3z9CeA=s275',
          name: 'Underground man',
          publication: 'Notes From Underground',
          author: 'Fyodor Dostoevsky',
          content: 'the Underground Man is representative of certain people who “not only may but must exist in our society, taking under consideration the circumstances under which our society has generally been formed.',
          showQuote: false,
          quotes: []
        },
        {
          src: 'https://i.ytimg.com/vi/Fs41UGRh3rA/hqdefault.jpg',
          name: 'Sensei',
          publication: 'Kokoro',
          author: 'Natsume Soseki',
          content: 'An isolated, bitter man who has no close friends and has mostly given up on life. He saw himself as a virtuous man surrounded by corruption. Gradually he came to understand that he was just as weak and corruptible as the rest of humankind and his self-loathing grew.    Spoiler: He died',
          showQuote: false,
          quotes: []
        },
        // {
        //   src: 'https://images-na.ssl-images-amazon.com/images/I/91EWBiFTnGL.jpg',
        //   name: 'Sensei',
        //   publication: 'Kokoro',
        //   author: 'Natsume Soseki',
        //   content: 'This dude is also cool i guess?',
        //   showQuote: false
        // },
      ],
    }
  },
  methods: {
    showQuoteBubble: function(index) {
      this.characters[index].showQuote = true
    },
    hideQuoteBubble: function(index) {
      this.characters[index].showQuote = false
    }
  }
}
</script>

<style lang="scss" scoped>
.character-card {
  margin-top: 1em;
  width: 700px;
  p {
    font-size: 1em;
    text-align: justify;
  }
}
.slide-fade-enter-active {
  transition: all .8s ease;
}
.slide-fade-leave-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(-10px);
  opacity: 0;
}
.external-link-btn {
  font-size: 10px !important;
  padding: 2px;
}
</style>
