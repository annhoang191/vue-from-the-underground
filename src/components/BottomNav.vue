<template>
  <v-bottom-navigation
    hide-on-scroll
    scroll-threshold="500"
    absolute
    color="white"
    horizontal
    class="bottom-nav"
    v-model="bottomNav"
  >
    <v-btn to="/notes">
        <span>Notes</span>
        <v-icon>mdi-pencil</v-icon>
    </v-btn>
    <v-btn to="/" >
      <span>Home</span>
      <v-icon>mdi-home</v-icon>
    </v-btn>
    <v-btn to="/about">
      <span>About</span>
      <v-icon>mdi-book</v-icon>
    </v-btn>
  </v-bottom-navigation>
</template>

<script>

export default {
  name: 'BottomNav',
  data: () => {
    return {
      bottomNav: 1
    }
  }
}
</script>

<style lang="scss" scoped>
.bottom-nav {
  opacity: 0.9;
  height: 2.5em !important;
}
</style>
