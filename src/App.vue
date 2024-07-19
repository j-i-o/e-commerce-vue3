<script setup lang="ts">
import { RouterView } from 'vue-router'
import AppBar from './components/AppBar.vue'
import Footer from './components/Footer.vue'
import CategoryDrawer from './components/CategoryDrawer.vue'
import Loader from './components/Loader.vue'
</script>

<template>
  <v-app>
    <Loader />
    <CategoryDrawer />
    <AppBar />
    <Footer />
    <v-main>
      <v-container fluid>
        <RouterView />
      </v-container>
    </v-main>
  </v-app>
</template>
