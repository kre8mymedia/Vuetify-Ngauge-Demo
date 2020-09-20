<template>
  <v-sheet>
    <paralax></paralax>
    <tabs-component class="py-2"></tabs-component>
  </v-sheet>
</template>

<script>
import Paralax from '~/components/Paralax'
import Tabs from '~/components/Tabs'
export default {
  components: {
    Paralax,
    'tabs-component': Tabs
  }
}
</script>
