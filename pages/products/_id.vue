<template>
  <v-container>
    <v-row no wrap>
      <v-col cols=12 sm=12>
        <v-card
        :loading="loading"
        dark
        width="100%"
        height="100%"
        class="pa-3"
        elevation=15>
          <v-container>
            <v-row align="center" justify="center">
              <v-col cols=12 sm=6>
                <v-img
                :src="product.image"
                contain
                max-width="400"
                class="rounded"></v-img>
              </v-col>
              <v-col cols=12 sm=6>
                <h1 class="ma-0">{{ product.name }}</h1>
                <small class="grey--text">Quantity: {{ product.quantity }}</small>
                <p class="short_description mb-0">{{ product.short_description }}</p>
              </v-col>
            </v-row>
          </v-container>
          <v-container class="pa-0 ml-4 mb-2">
            <v-row> 
              <v-col
              cols=3
              sm=1
              v-for="image in images"
              :key="image.id"> 
                <v-img
                @click="setPhoto(image.url)"
                :src="image.url"
                contain
                max-width="100"
                max-height="100"
                class="rounded pa-0"></v-img>
              </v-col>
            </v-row>
          </v-container>
          <v-tabs
            v-model="tab"
            background-color="gradient"
            centered
            color="white"
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
                <v-card-text>{{ item.content }}</v-card-text>
              </v-card>
            </v-tab-item>
          </v-tabs-items>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      loading: false,
      product: {},
      images: [],
      tab: null,
      items: [
        {
          tab: 'Description',
          content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vulputate odio ut enim blandit. Molestie ac feugiat sed lectus vestibulum mattis ullamcorper velit.'
        },
        {
          tab: 'Comments',
          content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vulputate odio ut enim blandit. Molestie ac feugiat sed lectus vestibulum mattis ullamcorper velit.'
        },
        {
          tab: 'Reviews',
          content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vulputate odio ut enim blandit. Molestie ac feugiat sed lectus vestibulum mattis ullamcorper velit.'
        },
      ],
    }
  },
  created() {
    this.getProduct();
  },
  methods: {
    async getProduct() {
      let route_id = this.$route.path.split('/')[2];
      const queryUrl = `/api/products/${route_id}`

      fetch(queryUrl)
      .then(res => res.json())
      .then(data => {
        // console.log(data)
        this.product = data.product;
        this.items[0].content = data.product.long_description; 
        this.images = data.images;
      })
      .then(err => console.log(err))
    },
    async setPhoto(url) {
      this.product.image = url;
    }
  }
}
</script>

<style>
  .short_description {
    font-size: 12px;
  }
</style>