<template>
  <v-container>
    <v-row class="div-about">
      <v-col cols="5">
        <v-row
          :align="alignment"
          :justify="space-between"
        >
          <h1>Hi there,</h1>
        </v-row>
        <v-row>
          <p>It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout.
            The point of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using 'Content here, content here',
            making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
        </v-row>
      </v-col>
      <v-col cols="6" class="left-col">
        <v-row :justify="space-between">
          <h1>Goodbye</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vitae nunc ut nunc convallis convallis in at neque. Morbi varius nisl ut ex posuere accumsan. Donec tincidunt, mauris vitae vehicula placerat, nisl neque pretium nunc, eget dictum orci odio quis magna. Vivamus augue urna, facilisis in purus ac, volutpat laoreet quam. Donec maximus feugiat arcu eu tincidunt. Sed viverra justo quis ullamcorper imperdiet. Donec at convallis odio, sit amet mattis enim. Aliquam vel semper lacus. Suspendisse et maximus metus, nec pellentesque turpis. Phasellus in semper metus. Ut condimentum arcu in erat viverra, sit amet pretium mauris scelerisque.</p>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<style lang="scss" scoped>
.div-about {
  margin-top: 3em;
  p {
    text-align: justify;
  }
  .left-col {
    margin-left: 0.5em;
  }
}
</style>
