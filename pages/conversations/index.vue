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
      desserts: [
        {
          name: 'Frozen Yogurt',
          calories: 159,
          fat: 6.0,
          carbs: 24,
          protein: 4.0,
          iron: '1%',
        },
        {
          name: 'Ice cream sandwich',
          calories: 237,
          fat: 9.0,
          carbs: 37,
          protein: 4.3,
          iron: '1%',
        },
        {
          name: 'Eclair',
          calories: 262,
          fat: 16.0,
          carbs: 23,
          protein: 6.0,
          iron: '7%',
        }
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