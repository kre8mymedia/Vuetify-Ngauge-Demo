<template>
  <v-parallax
    dark
    height="500"
    src="data_center.jpg"
    class="rounded"
  >
    <v-row
      align="center"
      justify="center"
    >
      <v-col class="text-center">
        <h1 class="myFont font-weight-thin mb-4">HELLO WORLD</h1>
        <get-started></get-started>
      </v-col>
    </v-row>
  </v-parallax>
</template>

<script>
import GetStarted from '~/components/GetStarted';
export default {
  components: {
    'get-started': GetStarted
  }
}
</script>

<style>
  img {
    filter: brightness(35%);
  }

  .myFont {
    font-family: 'Aldrich';
    font-size: 3em;
    font-stretch: expanded;
  }
</style>