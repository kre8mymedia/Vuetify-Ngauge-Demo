<template>
  <v-container>
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
  </v-container>
</template>

<script>
export default {
  data() {
    return {
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
    }
  },
  created() {
    this.getTickets();
  },
  methods: {
    getTickets() {
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
    }
  }
}
</script>