<template>
  <v-card class="rounded">
    <v-tabs
      v-model="tab"
      background-color="gradient"
      dark
      centered
      color="white"
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
          <v-card-text>
            <v-container fill-height fluid>
              <v-layout>
                <v-row align="center" justify="center">
                  <v-flex
                  xs12
                  sm8
                  md6
                  align-self-center
                  >
                    <v-col class="px-5 py-5">
                      <v-img contain height="400" width="100%" :src="item.src" :alt="item.alt"></v-img>
                    </v-col>
                  </v-flex>
                  <v-flex
                  xs12
                  sm8
                  md6
                  >
                    <v-col>
                      <p class="myFont tabContent text-justify">
                        {{ item.content }}
                      </p>
                      <v-btn :href="item.to" class="gradient float-right" text>Learn More</v-btn>
                    </v-col>
                  </v-flex>
                </v-row>
              </v-layout>
            </v-container>
          </v-card-text>
        </v-card>
      </v-tab-item>
    </v-tabs-items>
  </v-card>
</template>

<script>
  export default {
    data () {
      return {
        tab: null,
        items: [
          {
            tab: 'About',
            src: 'business.svg',
            alt: 'business',
            to: '/about',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
          },
          {
            tab: 'Contact',
            src: 'email.svg',
            alt: 'contact',
            to: '/contact',
            content: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
          },
          {
            tab: 'Portfolio',
            src: 'cloud.svg',
            alt: 'cloud-services',
            to: '/portfolio',
            content: 'Magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
          },
        ],
      }
    },
  }
</script>

<style>
  .tabContent {
    font-size: 20px;
    line-height: 1.7em;
  }
</style>