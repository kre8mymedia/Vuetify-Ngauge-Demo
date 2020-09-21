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
let api_key = '';
let serverName = '';

if(process.env.NODE_ENV === "development") {
  serverName = 'http://ngauge.me';
  api_key = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIzIiwianRpIjoiNTY2NjViMDZmZGRiZDk2MWY1YzBiYmZkZTE3MDRhMjczNzJmYmRhMjQ4ODU0MTU3ZTRhNDQwZjE0MTdkNDVkZDVhMzU2OGFkZmUxNzE1MDUiLCJpYXQiOjE2MDA1Nzg0ODgsIm5iZiI6MTYwMDU3ODQ4OCwiZXhwIjoxNjMyMTE0NDg4LCJzdWIiOiIxIiwic2NvcGVzIjpbXX0.VGLZ6wMAP6Urga0RVjmXFcS5UeNKDXHMHtHd1FXw-186BwdEbmqKCb6_y2LBVCbFmRxsz0tGgoth4i4SFC5qmTVSDkiViAupaR0-40NZZD8dlUrsTTGZJnfqlWPSA4FZImB1F3tDw3YB8JgUBNCZ9gxu0NJndmS097yXNX3X4VRZ5eTlzJBj3GozvArgihdoMqeJLdlK-bpFArsd4tGP8L6WNy2kqO2Y-A9o7951zgVHKv1TNH_jgEXSCKjhP0s4NeV3sSIN4jwGy9aUAKi_WSU4D7hMr_a_O3FfsTYO4woSVJbJBoVMDn9aHN0FCCR3QRwWZQkZL04OFiFKpSoit9u20cVCu0eWb9VL8UQHB5f8D1fTIgt-MEoD6-jtHXXPebhNa0AcKGFg7BYn-9SmUvlpQk3e86uil6B5m5y6KgDqDbGIWDnaTFviitnJFWSnS1hbD0OZpiMJacaUDwZlCFwdNKFyLwBarceb72jl7y1cEOyIDXM_5O5pRqsQYciiSAwwCJotuI9uSPg8fqbiX1Laj3LB7AE78eDGjkZH4-vALDOW0vaMuGdjKY8MeG7DYwyZLjYVGDJSygpswvH9_g20Wz6o0XvrVsu-wFYPdVj6TxjWj4h9PLLFOvOkAc0FnSiiI4f_i60Qx38Enl8vmblDxiHCnJX3Jy3x3XzbepQ';
} else {
  serverName = 'https://ngauge.ml';
  api_key = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiOTc1ZjljYWQ3NzA0YWM3MTI1NTc2ODUzNmQwOGNkN2JlY2M3YWNjMTJhYWIzYzA1ODk3YjRmZjQ0Mzk4MTdhNDBiODA5NDBkNDdiNDFjZjQiLCJpYXQiOjE2MDA1OTQ5MzgsIm5iZiI6MTYwMDU5NDkzOCwiZXhwIjoxNjMyMTMwOTM4LCJzdWIiOiIxIiwic2NvcGVzIjpbXX0.PgB2RGwSs_hYEJDkilX77mf4BNLQKoktLLmlft8TFlg9-3tE8OSI9_JQGDp2gEzr4fGVQLtZMVh64SQ--hq18TiYD2pxCFdxffimyh8Vduake-_OBJ-yTX0D4WVUg3K2Am_ow2zuRdlDfxPfIOb2rcY4Rg50TmXm_t-Ti7mFDo_H8TckxePi-xyjr8nXlWQObMCPBE0CbPhp1rBSezM4WRc9ZO4-EzXbIbwlapYc4FJIG5LXUdHHE3D3LJ_rJ3TkdzH_NWxjPVyD3Hu3OaEqHlBRV6KfA2Y5nRiip3A8zs1AKYehqf0tE3FyfdvA0ffZDWUzAEycPiZrWOCk3Q1ze45f5VG5XTk7L0xTfW1QWrWszK4laOR8cbMV4rfWuYWOZ90Dd-iv1yMBESHe_9soszuL4-CS5L90-IQ7TSf6DzIM3eF6XdvrF4bEeC6C7Dq8y51rGKC9Vq3AL6tNddbFH9moKsJKePogdst_ZY4WmairSm2uDh3c_n8Rcbu7_nL6vnuUNHPSqM9IdhBJTvpbQbtRmHjuUYs0Mt-8-9CLKd0p9lXvUIjDwVsiAcdzlAfm-LMXXEFnwiVN9-r78nmmLX8WevdMQVKYC1t9yZIfNLXqLN6YxA7LbXiCpZdScO3lu0ns5GXANFqBjAq66NWr-8Jws3y8LQoSlcuTNGOlZA8';
}

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
      const queryUrl = `${serverName}/api/v1/products/${route_id}`

      fetch(queryUrl, {
        headers: {
          'Authorization': `Bearer ${api_key}`
        }
      })
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