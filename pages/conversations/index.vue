<template>
  <v-container>
    <v-row>
      <v-col>
        <v-card>
          <v-card-title>
            Conversations
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
            :items="conversations"
            :search="search"
            @click:row="handleClick"
          ></v-data-table>
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
      users: [],
      conversations: [],
      headers: [
        {
          text: '#',
          align: 'start',
          sortable: false,
          value: 'id',
        },
        { text: 'Topic', value: 'topic' },
        { text: 'Users', value: 'users' },
        { text: 'Created At', value: 'created_at' },
        { text: 'Updated', value: 'updated_at' },
      ],
    }
  },
  created() {
    this.getConversations();
  },
  methods: {
    async getConversations() {
      fetch('/api/conversations')
      .then(response => response.json())
      .then(data => {
        console.log(data)
        this.users = data.users;
        this.conversations = data.conversations;
      })
      .catch((err) => console.log(err))
    },
    handleClick(e) {
      window.location.href=`/conversations/${e.id}/messages`;
    }
  }
}
</script>