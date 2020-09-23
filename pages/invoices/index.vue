<template>
  <v-container>
    <v-row>
      <v-col>
        These are the invoices
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      invoices: []
    }
  },
  created() {
    this.getInvoices();
  },
  methods: {
    async getInvoices() {
      fetch('/api/invoices')
      .then(res => res.json())
      .then(data => {
        console.log(data)
        this.invoices = data.invoices;
      })
      .catch(err => console.log(err))
    }
  }
}
</script>