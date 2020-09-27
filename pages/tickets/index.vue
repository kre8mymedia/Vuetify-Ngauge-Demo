<template>
  <v-container>
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
            <v-card-text v-if="item.content == 'create_ticket'">
              <v-sheet class="pa-2" elevation="10" color="grey darken-3" rounded>
                <v-row>
                  <v-col>
                    <v-card class="px-3 py-3">
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
                        Your support ticket has been sent!
                      </v-alert>
                      <h4>What is the issue you're experiencing?</h4>
                      <v-row>
                        <v-col cols="12" md="12">
                          <!-- <v-text-field
                            label="Email"
                            outlined
                            dense
                            v-model="email"
                          ></v-text-field> -->
                          <v-form
                            ref="form"
                            v-model="valid"
                            lazy-validation
                            @submit="checkForm"
                          >
                            <v-text-field
                              outlined
                              dense
                              v-model="email"
                              label="Email"
                              :rules="emailRules"
                              required
                            ></v-text-field>
                            <v-text-field
                              label="Subject"
                              outlined
                              dense
                              v-model="subject"
                              required
                            ></v-text-field>
                            <v-textarea
                              outlined
                              name="input-7-4"
                              label="Enter a description of the problem..."
                              v-model="body"
                            ></v-textarea>
                            <v-btn @click="createTicket" type="submit" color="gradient">Submit</v-btn>
                          </v-form>
                        </v-col>
                      </v-row>
                    </v-card>
                  </v-col>
                </v-row>
              </v-sheet>
            </v-card-text>
            <v-card-text v-if="item.content == 'list_tickets'" >
              <v-sheet class="pa-2" elevation="10" color="grey darken-3" rounded>
                <v-row>
                  <v-col>
                    <v-card>
                      <v-card-title>
                        Open Tickets
                        <v-spacer></v-spacer>
                        <v-text-field
                          v-model="search"
                          append-icon="mdi-magnify"
                          label="Search"
                          single-line
                          hide-details
                        ></v-text-field>
                      </v-card-title>
                      <v-data-table
                        :headers="headers"
                        :items="open_tickets"
                        :search="search"
                        @click:row="handleClick"
                      >
                      <template v-slot:item.created_at="{ item }">
                        <span>
                          {{ formatDate(item.created_at) }}
                        </span>
                      </template>
                      </v-data-table>
                    </v-card>
                  </v-col>
                  <v-col>
                    <v-card>
                      <v-card-title>
                        Closed Tickets
                        <v-spacer></v-spacer>
                        <v-text-field
                          v-model="search"
                          append-icon="mdi-magnify"
                          label="Search"
                          single-line
                          hide-details
                        ></v-text-field>
                      </v-card-title>
                      <v-data-table
                        :headers="headers"
                        :items="closed_tickets"
                        :search="search"
                        @click:row="handleClick"
                      >
                        <template v-slot:item.created_at="{ item }">
                          <span>
                            {{ formatDate(item.created_at) }}
                          </span>
                        </template>
                      </v-data-table>
                    </v-card>
                  </v-col>
                </v-row>
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
      // List Tickets Data Tables
      search: '',
      open_tickets: [],
      closed_tickets: [],
      headers: [
        {
          text: 'ID',
          align: 'start',
          sortable: false,
          value: 'id',
        },
        { text: 'User', value: 'email' },
        { text: 'Status', value: 'status' },
        { text: 'Subject', value: 'subject' },
        { text: 'Created At', value: 'created_at' },
      ],
      // Tabs
      tab: null,
      items: [
        { tab: 'Create Ticket', content: 'create_ticket' },
        { tab: 'List Tickets', content: 'list_tickets' },
      ],
      // Create Ticket
      valid: true,
      email: '',
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
      ],
      subject: '',
      body: '',
      success: false,
      error: false,
      errors: []
    }
  },
  created() {
    this.getTickets()
  },
  methods: {
    async getTickets() {
      fetch('/api/tickets')
      .then(res => res.json())
      .then(data => {
        console.log(data)
        this.open_tickets = data.open_tickets;
        this.closed_tickets = data.closed_tickets;
      })
      .catch(err => console.log(err))
    },
    handleClick(e) {
      window.location.href=`/tickets/${e.id}`;
    },
    formatDate(date_string) {
      return new Date(date_string).toLocaleString()
    },

    /**--------------------------------------------
     * Create a ticket
     * --------------------------------------------
     */
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
     * Forma Validation
     * --------------------------------------------
     */
    checkForm: function (e) {
      if (this.email && this.subject && this.description) {
        return true;
      }

      this.errors = [];

      if (!this.email) {
        this.errors.push('Email required.');
      }
      if (!this.subject) {
        this.errors.push('Subject required.');
      }
      if (!this.body) {
        this.errors.push('Description required.');
      }
      e.preventDefault();
    }
  }
}
</script>