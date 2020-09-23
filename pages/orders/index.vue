<template>
  <v-container>
    <v-row>
      <v-col>
        Welcome to the orders page
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      orders: []
    }
  },
  created() {
    this.getOrders();
  },
  methods: {
    async getOrders() {
      fetch('/api/orders')
      .then(res => res.json())
      .then(data => {
        console.log(data)
        this.orders = data.orders;
      })
      .catch(err => console.log(err))
    }
  }
}
</script>