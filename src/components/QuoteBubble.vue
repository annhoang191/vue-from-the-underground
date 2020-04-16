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
    quotes: []
  }),

  created () {
    let title = this.character.publication
    axios
      .get(`https://goodquotesapi.herokuapp.com/title/${title}`)
      .then(response => (this.quotes = response.data.quotes))
      .catch(err => console.log(err))
  },

  computed: {
    randomQuote: function() {
      if (this.character.showQuote === true && this.quotes !== null) {
        return(
          this.quotes[Math.floor(Math.random() * this.quotes.length)].quote &&
          this.quotes[Math.floor(Math.random() * this.quotes.length)].quote
        )
      }
      return null
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
