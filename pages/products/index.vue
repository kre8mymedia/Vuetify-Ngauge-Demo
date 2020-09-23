<template>
  <v-container>
    <v-row row wrap>
      <v-col cols="12" sm="3" v-for="product in products" :key="product.id">
        <v-card
        class="mx-auto"
        max-width="350"
        :key="product.id">
          <v-img
            contain
            class="white--text align-end"
            height="200px"
            :src="product.image"
          >
            <!-- <v-card-title>Top 10 Australian beaches</v-card-title> -->
          </v-img>

          <v-card-subtitle class="pb-0">${{ product.price }}.00</v-card-subtitle>

          <v-card-text class="text--primary">
            <div>{{ product.name }}</div>

            <div>{{ product.short_description }}</div>
          </v-card-text>

          <v-card-actions>
            <v-btn
              color="orange"
              text
              :href="'/products/' + product.id"
            >
              View
            </v-btn>

            <v-btn
              color="orange"
              text
            >
              Explore
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      products: []
    }
  },
  created() {
    this.getProducts();
  },
  methods: {
    async getProducts() {
      fetch('/api/products')
      .then(res => res.json())
      .then(data => {
        console.log(data.products)
        this.products = data.products.data;
      })
      .catch(err => console.log(err))
    }
  }
}
</script>