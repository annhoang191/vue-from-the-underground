<template>
  <v-container>
    <v-row class="div-about">
      <v-col cols="5">
        <v-row>
          <h1>Hello.</h1>
        </v-row>
        <v-row>
          <p>
            As an underground girl who spends most of her time grudging real people,
            and tries to live her little life, I can only find comfort in
            fellow underground characters in literature.
            Therefore, I make this place to honor these guys and also to remind myself to have a little courage to keep on living
            <br/>
            <strike>Also because I'm pretentious and want to build some dark academia aesthetic</strike>
          </p>
          <p>*<strong>Vue From Underground</strong>:
            I build this site with <strong>Vue</strong> (<em>/vjuː/</em>) to learn this framework, hence the name!
            It's a <strong>"View From The Underground"</strong>
          </p>
        </v-row>
      </v-col>
      <v-col cols="6" class="left-col">
        <v-row>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<style lang="scss" scoped>
.div-about {
  margin-top: 5em;
  p {
    text-align: justify;
    font-size: 1.25em;
    font-weight: 200;
  }
  .left-col {
    margin-left: 0.5em;
  }
  strong {
    font-weight: bold;
  }
}
</style>
