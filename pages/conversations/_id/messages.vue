<template>
  <v-container>
    <v-row>
      <v-col>
        Messages for conversation #{{ this.$route.params.id }}
        <br>
        <br>
        <v-card v-for="message in messages" :key="message.id"
        class="mb-2 pa-4">
          <h3 class="mb-2">{{ message.username }}</h3>
          <hr>
          <p class="mt-2">{{ message.message }}</p>
          <small>{{ message.created_at }}</small>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      messages: []
    }
  },
  created() {
    this.getMessages();
  },
  methods: {
    async getMessages() {
      fetch(`/api/conversations/${this.$route.params.id}/messages`)
      .then(response => response.json())
      .then(data => {
        console.log(data)
        this.messages = data.messages;
      })
      .catch((err) => console.log(err))
    }
  }
}
</script>