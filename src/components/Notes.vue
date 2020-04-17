<template>
  <v-container>
    <h1 class="text-center">
      <span>
        Still working. In the mean time just go read some original
          <a href="https://www.gutenberg.org/files/600/600-h/600-h.htm" target="_blank">
            notes
          </a>
      </span>
    </h1>
  </v-container>
</template>

<script>
export default {
  name: 'Notes'
}
</script>

<style lang="scss" scoped>
  h1 {
    margin-top: 20%;
    border: 1px;
    span {
      border: 1px solid;
      padding: 0.5em;
    }
  }
  a {
    text-decoration: none;
  }
</style>
