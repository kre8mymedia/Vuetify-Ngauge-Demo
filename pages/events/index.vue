<template>
  <v-container>
    <v-card>
      <v-tabs
        v-model="tab"
        background-color="gradient"
        color="white"
        centered
        grow
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
          <!-- Card -->
          <v-card flat>
            <!-- SET APPOINTMENT -->
            <v-card-text class="card-background" v-if="item.content == 'set_appointment'">
              <v-sheet class="pa-1" elevation="10" rounded>
                <set-appointment></set-appointment>
              </v-sheet>
            </v-card-text>
            <!-- END SET APPOINTMENT -->
            <!-- CALENDAR -->
            <v-card-text class="card-background" v-if="item.content == 'show_calendar'">
              <v-sheet elevation="10" class="pa-1" rounded>
                <v-btn
                  class="mx-2"
                  fab
                  dark
                  small
                  color="indigo"
                >
                  <v-icon dark>
                    mdi-plus
                  </v-icon>
                </v-btn>
                <v-btn
                  depressed
                  color="primary"
                  class="mt-2 mr-1 float-right"
                  small
                >
                  Add Event
                </v-btn>
                <calendar-component></calendar-component>
              </v-sheet>
            </v-card-text>
            <!-- END CALENDAR -->
          </v-card>
          <!-- ./Card -->
        </v-tab-item>
      </v-tabs-items>
    </v-card>
  </v-container>
</template>

<script>
import Calendar from "@/components/Calendar"
import SetAppointment from "@/components/SetAppointment"

export default {
  components: {
    'calendar-component': Calendar,
    'set-appointment': SetAppointment,
  },
  data() {
    return {
      // Internal Props
      tab: null,
      items: [
        { tab: 'Set Appointment', content: 'set_appointment' },
        { tab: 'Show Calendar', content: 'show_calendar' },
      ]
    }
  }
}
</script>

<style>
  .card-background {
    background-color: #424242;
  }
</style>