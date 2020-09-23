<template>
  <v-container>
    Schedule Appointment
    <v-row>
      <v-col cols="12" sm="6" md="4">
        <v-text-field
          dense
          label="First Name"
          type="text"
          v-model="firstname"
        ></v-text-field>
      </v-col>
      <v-col cols="12" sm="6" md="4">
        <v-text-field
          dense
          label="Last Name"
          type="text"
          v-model="lastname"
        ></v-text-field>
      </v-col>
      <v-col cols="12" sm="6" md="4">
        <v-text-field
          dense
          label="Email"
          type="email"
          v-model="email"
        ></v-text-field>
      </v-col>
    </v-row>
    
    <div v-if="firstname != null && lastname != null && email != null">
      <h3 class="text-center">Start Time</h3>
      <v-row row wrap>
        <v-col class="ml-4">
          <v-date-picker v-model="start_date"></v-date-picker>
        </v-col>
        <v-col class="ml-4">
           <v-time-picker v-model="start_time"></v-time-picker>
        </v-col>
      </v-row>
    </div>
    <br>
    <div v-if="start_date !== null && start_time !== null">
      <hr>
      <br>
      <h2 class="text-center">End Time</h2>
      <v-row row wrap>
        <v-col class="ml-4">
          <v-date-picker v-model="end_date"></v-date-picker>
        </v-col>
        <v-col class="ml-4">
          <v-time-picker v-model="end_time"></v-time-picker>
        </v-col>
      </v-row>
      <v-btn @click="createAppointment" class="ml-4 gradient" color="primary">Primary</v-btn>
    </div>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      firstname: null,
      lastname: null,
      email: null,
      start_date: new Date().toISOString().substr(0, 10),
      start_time: null,
      end_date: new Date().toISOString().substr(0, 10),
      end_time: null
    }
  },
  methods: {
    createAppointment() {
      const params = {
        firstname: this.firstname,
        lastname: this.lastname,
        email: this.email,
        reservationtime: `${new Date(this.start_date + ' ' + this.start_time).toUTCString()} - ${new Date(this.end_date + ' ' +this.end_time).toUTCString()}`
      };

      const queryUrl = `${serverName}/api/v1/appointments`;

      fetch(queryUrl, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${api_key}`,
          'Content-Type': 'application/json',

        },
        body: JSON.stringify(params)
      })
      .then(response => response.json())
      .then(data => {
        console.log(data)
        alert('Appointment sent!')
      })
      .catch(err => console.log(err))
    }
  }
}
</script>