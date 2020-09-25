<template>
  <v-container>
    <v-row>
      <v-col>
        <v-alert v-if="success === true"
          dense
          text
          type="success"
        >
          Your support ticket has been sent!
        </v-alert>
        <v-card class="pa-5">
          <h4>What is the issue your experiencing?</h4>
          <v-row>
            <v-col cols="12" md="12">
              <v-text-field
                label="Email"
                outlined
                dense
                v-model="email"
              ></v-text-field>
              <v-text-field
                label="Subject"
                outlined
                dense
                v-model="subject"
              ></v-text-field>
               <v-textarea
                outlined
                name="input-7-4"
                label="Enter a description of the problem..."
                v-model="body"
              ></v-textarea>
              <v-btn @click="createTicket" color="gradient">Submit</v-btn>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  export default {
    data: () => ({
      email: '',
      subject: '',
      body: '',
      success: false,
      error: false
    }),
    methods: {
      createTicket() {
        const data = {
          email: this.email,
          subject: this.subject,
          body: this.body,
          company_id: 1
        }

        fetch('/api/tickets', {
          method: 'POST',
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(data => {
          console.log(data)
        })
        .catch(err => console.log(err))

        if(data) {
          this.success = true;
          setTimeout(() => {
            this.success = false;
          }, 3000)
        }
      }
    }
  }
</script>