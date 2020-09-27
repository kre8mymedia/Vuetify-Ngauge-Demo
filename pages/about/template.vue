<template>
  <v-container fluid>
    <v-card>
      <v-tabs
        v-model="tab"
        background-color="gradient"
        color="white"
        grow
        centered
        dark
      >
        <v-tab
          v-for="item in items"
          :key="item.tab"
        >
          {{ item.tab }}
        </v-tab>
      </v-tabs>

      <v-tabs-items v-model="tab">
        <v-tab-item
          v-for="item in items"
          :key="item.tab"
        >
        <v-card flat>
          <v-card-text class="card-background" v-if="item.content == 'set_appointment'">
            <v-sheet class="pa-2" elevation="10" rounded>
              Hello
            </v-sheet>
          </v-card-text>
          <v-card-text class="card-background" v-if="item.content == 'set_appointment'">
            <v-sheet class="pa-2" elevation="10" rounded>
              Hello
            </v-sheet>
          </v-card-text>
        </v-card>
        </v-tab-item>
      </v-tabs-items>
    </v-card>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      tab: null,
      items: [
        { tab: 'Set Appointment', content: 'set_appointment' },
        { tab: 'Show Calendar', content: 'show_calendar' },
      ],
    }
  }
}
</script>

<style>
  .card-background {
    background-color: #424242;
  }
</style>