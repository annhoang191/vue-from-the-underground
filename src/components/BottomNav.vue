<template>
  <v-bottom-navigation
    hide-on-scroll
    scroll-threshold="500"
    absolute
    color="white"
    horizontal
    class="bottom-nav"
  >
    <v-btn to="/notes" :value="Note">
        <span>Notes</span>
        <v-icon>mdi-pencil</v-icon>
    </v-btn>
    <v-btn to="/" :value="Home">
      <span>Home</span>
      <v-icon>mdi-home</v-icon>
    </v-btn>
    <v-btn to="/about" :value="About">
      <span>About</span>
      <v-icon>mdi-book</v-icon>
    </v-btn>
  </v-bottom-navigation>
</template>

<script>
export default {
  name: 'BottomNav'
}
</script>

<style lang="scss" scoped>
.bottom-nav {
  opacity: 0.9;
  height: 2.5em !important;
}
</style>
