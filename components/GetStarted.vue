<template>
  <div class="text-center">
    <v-menu offset-y>
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          class="gradient"
          dark
          v-bind="attrs"
          v-on="on"
        >
          Get Started
        </v-btn>
      </template>
      <v-list>
        <v-list-item
          v-for="(item, index) in items"
          :key="index"
          :href="item.url"
        >
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
  </div>
</template>

<script>
  export default {
    data: () => ({
      items: [
        { title: 'View Products', url: '/products' },
        { title: 'Schedule Appointment', url: '/appointments' },
        { title: 'Get Support', url: '/tickets' },
        { title: 'Upcoming Events', url: '/events' },
      ],
    }),
  }
</script>