<script setup lang="ts">
import { RouterLink, RouterView, useRoute } from 'vue-router'
import AppBar from './components/AppBar.vue'
import Footer from './components/Footer.vue'

const route = useRoute()
</script>

<template>
  <v-app>
    <AppBar />
    <v-main>
      <v-container fluid>
        <RouterView :key="route.fullPath" />
      </v-container>
    </v-main>
    <Footer />
  </v-app>
</template>
