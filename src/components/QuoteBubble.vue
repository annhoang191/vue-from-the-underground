<template>
  <div class="talk-bubble tri-right left-top" v-if="character.showQuote">
    <div class="talktext">
      <p>{{ randomQuote }}</p>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'QuoteBubble',
  props: ['character'],
  data: () => ({
  }),

  mounted () {
    let title = this.character.publication
    axios
      .get(`https://goodquotesapi.herokuapp.com/title/${title}`)
      .then(response => (this.character.quotes = response.data.quotes))
      .catch(err => console.log(err))
  },

  computed: {
    randomQuote: function() {
      if (this.character.showQuote === true) {
        let index = Math.floor(Math.random() * this.character.quotes.length)
        if(this.character.quotes[index] && this.character.quotes[index].quote) {
          return this.character.quotes[index].quote
        }
      }
      return 'I have nothing to talk about. I just disdain real people'
    }
  }
}
</script>

<style lang="scss" scoped>
$codGray: #1E1E1E;

.talk-bubble {
	margin: 2em;
  position: relative;
	width: 30%;
	height: auto;
	background-color: $codGray;
  padding: 1em;
  float: right;
}

.border{
  border: 8px solid $codGray;
}

.tri-right.border.left-top:before {
	content: ' ';
	position: absolute;
	width: 0;
	height: 0;
  left: -40px;
	right: auto;
  top: -8px;
	bottom: auto;
	border: 32px solid;
	border-color: $codGray transparent transparent transparent;
}

.tri-right.left-top:after{
	content: '';
	position: absolute;
	width: 0;
	height: 0;
  left: -20px;
	right: auto;
  top: 0px;
	bottom: auto;
	border: 22px solid;
	border-color: $codGray transparent transparent transparent;
}

</style>
