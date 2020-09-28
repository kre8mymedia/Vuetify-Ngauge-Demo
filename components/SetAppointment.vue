<template>
  <v-form
    ref="form"
    v-model="valid"
    lazy-validation
    class="pa-3"
    @submit="checkForm"
  >
    <v-alert v-for="error in errors"
      dense
      text
      type="error"
      :key="error.id">
      {{ error }}
    </v-alert>
    <v-alert v-if="success === true"
      dense
      text
      type="success"
    >
      Your appointment has been received!
    </v-alert>
    <h3>Please enter your personal details and suggest a time.</h3>
    <v-row>
      <v-col cols="12" md="4">
        <v-text-field
          v-model="firstname"
          :counter="30"
          :rules="nameRules"
          label="First name"
          outlined
          dense
          required
        ></v-text-field>
      </v-col>

      <v-col cols="12" md="4">
        <v-text-field
          v-model="lastname"
          :counter="50"
          :rules="nameRules"
          label="Last name"
          outlined
          dense
          required
        ></v-text-field>
      </v-col>

      <v-col cols="12" md="4">
        <v-text-field
          v-model="email"
          :rules="emailRules"
          label="Email"
          outlined
          dense
          required
        ></v-text-field>
      </v-col>
    </v-row>

    <h2 class="mb-2">Start Time:</h2>
    <hr>
    <v-row>
      <v-col
        cols="12"
        sm="6"
        md="6"
      >
        <v-dialog
          ref="start_date"
          v-model="start_modal_date"
          :return-value.sync="start_date"
          persistent
          width="290px"
        >
          <template v-slot:activator="{ on, attrs }">
            <v-text-field
              v-model="start_date"
              label="Pick a date"
              prepend-icon="mdi-calendar"
              readonly
              v-bind="attrs"
              v-on="on"
            ></v-text-field>
          </template>
          <v-date-picker
            v-model="start_date"
            scrollable
          >
            <v-spacer></v-spacer>
            <v-btn
              text
              color="primary"
              @click="start_modal_date = false"
            >
              Cancel
            </v-btn>
            <v-btn
              text
              color="primary"
              @click="$refs.start_date.save(start_date)"
            >
              OK
            </v-btn>
          </v-date-picker>
        </v-dialog>
      </v-col>
      <v-col
        cols="12"
        sm="6"
      >
        <v-dialog
          ref="start_time"
          v-model="start_modal_time"
          :return-value.sync="start_time"
          persistent
          width="290px"
        >
          <template v-slot:activator="{ on, attrs }">
            <v-text-field
              v-model="start_time"
              label="Pick a time"
              prepend-icon="mdi-clock-time-four-outline"
              readonly
              v-bind="attrs"
              v-on="on"
            ></v-text-field>
          </template>
          <v-time-picker
            v-if="start_modal_time"
            v-model="start_time"
            full-width
          >
            <v-spacer></v-spacer>
            <v-btn
              text
              color="primary"
              @click="start_modal_time = false"
            >
              Cancel
            </v-btn>
            <v-btn
              text
              color="primary"
              @click="$refs.start_time.save(start_time)"
            >
              OK
            </v-btn>
          </v-time-picker>
        </v-dialog>
      </v-col>
    </v-row>
    <v-spacer></v-spacer>

    <h2 class="mb-2">End Time:</h2>
    <hr>
    <v-row>
      <v-col
        cols="12"
        sm="6"
        md="6"
      >
        <v-dialog
          ref="end_date"
          v-model="end_modal_date"
          :return-value.sync="end_date"
          persistent
          width="290px"
        >
          <template v-slot:activator="{ on, attrs }">
            <v-text-field
              v-model="end_date"
              label="Pick a date"
              prepend-icon="mdi-calendar"
              readonly
              v-bind="attrs"
              v-on="on"
            ></v-text-field>
          </template>
          <v-date-picker
            v-model="end_date"
            scrollable
          >
            <v-spacer></v-spacer>
            <v-btn
              text
              color="primary"
              @click="end_modal_date = false"
            >
              Cancel
            </v-btn>
            <v-btn
              text
              color="primary"
              @click="$refs.end_date.save(end_date)"
            >
              OK
            </v-btn>
          </v-date-picker>
        </v-dialog>
      </v-col>
      <v-col
        cols="12"
        sm="6"
      >
        <v-dialog
          ref="end_time"
          v-model="end_modal_time"
          :return-value.sync="end_time"
          persistent
          width="290px"
        >
          <template v-slot:activator="{ on, attrs }">
            <v-text-field
              v-model="end_time"
              label="Pick a time"
              prepend-icon="mdi-clock-time-four-outline"
              readonly
              v-bind="attrs"
              v-on="on"
            ></v-text-field>
          </template>
          <v-time-picker
            v-if="end_modal_time"
            v-model="end_time"
            full-width
          >
            <v-spacer></v-spacer>
            <v-btn
              text
              color="primary"
              @click="end_modal_time = false"
            >
              Cancel
            </v-btn>
            <v-btn
              text
              color="primary"
              @click="$refs.end_time.save(end_time)"
            >
              OK
            </v-btn>
          </v-time-picker>
        </v-dialog>
      </v-col>
    </v-row>
    <v-btn
      depressed
      color="gradient"
      type="submit"
      @click="createAppointment"
    >
      Submit
    </v-btn>
  </v-form>
</template>

<script>
  export default {
    data () {
      return {
        // Start date/time
        start_time: null,
        start_date: new Date().toISOString().substr(0, 10),
        start_modal_date: false,
        start_modal_time: false,
        // // End date/time
        end_time: null,
        end_date: new Date().toISOString().substr(0, 10),
        end_modal_date: false,
        end_modal_time: false,
        // Set Appointment Props
        valid: false,
        firstname: '',
        lastname: '',
        nameRules: [
          v => !!v || 'Name is required',
          v => (v && v.length <= 10) || 'Name must be less than 10 characters',
        ],
        email: '',
        emailRules: [
          v => !!v || 'E-mail is required',
          v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
        ],
        // MESSAGES
        valid: true,
        success: false,
        error: false,
        errors: []
      }
    },
    methods: {
      /**--------------------------------------------
       * Create Appointment
       * --------------------------------------------
       */
      createAppointment() {
        const params = {
          firstname: this.firstname,
          lastname: this.lastname,
          email: this.email,
          reservationtime: `${new Date(this.start_date + ' ' + this.start_time).toUTCString()} - ${new Date(this.end_date + ' ' +this.end_time).toUTCString()}`
        };

        fetch('/api/appointments', {
          method: 'POST',
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(params)
        })
        .then(res => res.json())
        .then(data => {
          console.log(data)

          if(data.status == 201) {
            this.success = true;
            this.subject = null;
            this.body = null;
            setTimeout(() => {
              this.success = false;
            }, 5000)
          }

        })
        .catch(err => console.log(err))
      },

      /**--------------------------------------------
       * Form Validation
       * --------------------------------------------
       */
      checkForm: function(e) {
        if (
          this.email &&
          this.firstname &&
          this.lastname &&
          this.start_time && 
          this.start_date && 
          this.end_time &&
          this.end_date
        ) {
          return true;
        }

        this.errors = [];

        if (!this.email) {
          this.errors.push('Email required.');
        }
        if (!this.firstname) {
          this.errors.push('First name required.');
        }
        if (!this.lastname) {
          this.errors.push('Last name required.');
        }
        if (!this.start_time) {
          this.errors.push('Start time required.');
        }
        if (!this.start_date) {
          this.errors.push('Start date required.');
        }
        if (!this.end_time) {
          this.errors.push('End time required.');
        }
        if (!this.end_date) {
          this.errors.push('End date required.');
        }

        console.log(this.errors)
        e.preventDefault();
      }
    }
  }
</script>