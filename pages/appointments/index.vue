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
let api_key = '';
let serverName = '';

if(process.env.NODE_ENV === "development") {
  serverName = 'http://ngauge.me';
  api_key = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIzIiwianRpIjoiNTY2NjViMDZmZGRiZDk2MWY1YzBiYmZkZTE3MDRhMjczNzJmYmRhMjQ4ODU0MTU3ZTRhNDQwZjE0MTdkNDVkZDVhMzU2OGFkZmUxNzE1MDUiLCJpYXQiOjE2MDA1Nzg0ODgsIm5iZiI6MTYwMDU3ODQ4OCwiZXhwIjoxNjMyMTE0NDg4LCJzdWIiOiIxIiwic2NvcGVzIjpbXX0.VGLZ6wMAP6Urga0RVjmXFcS5UeNKDXHMHtHd1FXw-186BwdEbmqKCb6_y2LBVCbFmRxsz0tGgoth4i4SFC5qmTVSDkiViAupaR0-40NZZD8dlUrsTTGZJnfqlWPSA4FZImB1F3tDw3YB8JgUBNCZ9gxu0NJndmS097yXNX3X4VRZ5eTlzJBj3GozvArgihdoMqeJLdlK-bpFArsd4tGP8L6WNy2kqO2Y-A9o7951zgVHKv1TNH_jgEXSCKjhP0s4NeV3sSIN4jwGy9aUAKi_WSU4D7hMr_a_O3FfsTYO4woSVJbJBoVMDn9aHN0FCCR3QRwWZQkZL04OFiFKpSoit9u20cVCu0eWb9VL8UQHB5f8D1fTIgt-MEoD6-jtHXXPebhNa0AcKGFg7BYn-9SmUvlpQk3e86uil6B5m5y6KgDqDbGIWDnaTFviitnJFWSnS1hbD0OZpiMJacaUDwZlCFwdNKFyLwBarceb72jl7y1cEOyIDXM_5O5pRqsQYciiSAwwCJotuI9uSPg8fqbiX1Laj3LB7AE78eDGjkZH4-vALDOW0vaMuGdjKY8MeG7DYwyZLjYVGDJSygpswvH9_g20Wz6o0XvrVsu-wFYPdVj6TxjWj4h9PLLFOvOkAc0FnSiiI4f_i60Qx38Enl8vmblDxiHCnJX3Jy3x3XzbepQ';
} else {
  serverName = 'https://ngauge.ml';
  api_key = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiOTc1ZjljYWQ3NzA0YWM3MTI1NTc2ODUzNmQwOGNkN2JlY2M3YWNjMTJhYWIzYzA1ODk3YjRmZjQ0Mzk4MTdhNDBiODA5NDBkNDdiNDFjZjQiLCJpYXQiOjE2MDA1OTQ5MzgsIm5iZiI6MTYwMDU5NDkzOCwiZXhwIjoxNjMyMTMwOTM4LCJzdWIiOiIxIiwic2NvcGVzIjpbXX0.PgB2RGwSs_hYEJDkilX77mf4BNLQKoktLLmlft8TFlg9-3tE8OSI9_JQGDp2gEzr4fGVQLtZMVh64SQ--hq18TiYD2pxCFdxffimyh8Vduake-_OBJ-yTX0D4WVUg3K2Am_ow2zuRdlDfxPfIOb2rcY4Rg50TmXm_t-Ti7mFDo_H8TckxePi-xyjr8nXlWQObMCPBE0CbPhp1rBSezM4WRc9ZO4-EzXbIbwlapYc4FJIG5LXUdHHE3D3LJ_rJ3TkdzH_NWxjPVyD3Hu3OaEqHlBRV6KfA2Y5nRiip3A8zs1AKYehqf0tE3FyfdvA0ffZDWUzAEycPiZrWOCk3Q1ze45f5VG5XTk7L0xTfW1QWrWszK4laOR8cbMV4rfWuYWOZ90Dd-iv1yMBESHe_9soszuL4-CS5L90-IQ7TSf6DzIM3eF6XdvrF4bEeC6C7Dq8y51rGKC9Vq3AL6tNddbFH9moKsJKePogdst_ZY4WmairSm2uDh3c_n8Rcbu7_nL6vnuUNHPSqM9IdhBJTvpbQbtRmHjuUYs0Mt-8-9CLKd0p9lXvUIjDwVsiAcdzlAfm-LMXXEFnwiVN9-r78nmmLX8WevdMQVKYC1t9yZIfNLXqLN6YxA7LbXiCpZdScO3lu0ns5GXANFqBjAq66NWr-8Jws3y8LQoSlcuTNGOlZA8';
}

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