<template>
  <v-container>
    <v-row>
      <v-col>
        <v-card>
          <v-card-title>{{ ticket.subject }}</v-card-title>
          <v-card-subtitle>{{ ticket.email }}</v-card-subtitle>
          <v-card-text>{{ ticket.body }}</v-card-text>
        </v-card>
        <v-card
        v-for="comment in comments"
        :key="comment.id"
        class="mt-4 pa-1 py-0">
          <v-card-subtitle class="white--text">{{ comment.user_id }}</v-card-subtitle>
          <v-card-text>{{ comment.body }}</v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      user: {},
      ticket: {},
      comments: []
    }
  },
  created() {
    this.getTicket();
  },
  methods: {
    async getTicket() {
      const route_id = this.$route.path.split('/')[2];
      const queryUrl = `/api/tickets/${route_id}`
      
      fetch(queryUrl)
      .then(res => res.json())
      .then(data => {
        console.log(data)
        this.ticket = data.ticket;
        this.comments = data.comments.data;
        this.user = data.user;
      })
      .catch(err => console.log(err))
    },
  }
}
</script>