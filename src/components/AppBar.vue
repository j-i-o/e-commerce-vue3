<script setup lang="ts">
import { ref } from 'vue'
import { useCartStore } from '@/stores/cart'

const cart = useCartStore()
let showSearchBox = ref(true)
let search = ref('')
</script>

<template>
  <v-app-bar fixed>
    <template v-slot:prepend>
      <v-app-bar-nav-icon
        icon="$vuetify"
        :to="{
          name: 'home'
        }"
      ></v-app-bar-nav-icon>
    </template>

    <v-app-bar-title
      ><b class="text-uppercase" :style="{ letterSpacing: '3px' }">E-commerce</b></v-app-bar-title
    >
    <v-row justify="end" class="mt-2">
      <v-col cols="6">
        <v-text-field
          v-if="!showSearchBox"
          v-model="search"
          center-affix
          density="compact"
          rounded
          single-line
          variant="outlined"
          placeholder="Find what you look for"
        >
          <template v-slot:append-inner>
            <v-btn icon="mdi-magnify" @click="showSearchBox = !showSearchBox"> </v-btn>
          </template>
        </v-text-field>
      </v-col>
    </v-row>

    <template v-slot:append>
      <v-btn v-if="showSearchBox" icon="mdi-magnify" @click="showSearchBox = !showSearchBox">
      </v-btn>
      <v-btn icon="mdi-heart"> </v-btn>
      <v-badge
        :model-value="!!cart.totalCount"
        :content="cart.totalCount"
        location="top right"
        offset-x="10"
        offset-y="12"
      >
        <!-- <v-icon icon="$vuetify" size="x-large"></v-icon> -->
        <v-btn icon="mdi-shopping"></v-btn>
      </v-badge>
      <v-btn icon="mdi-account-circle"> </v-btn>
    </template>
  </v-app-bar>
</template>
<style scoped>
.v-input--density-compact .v-field--variant-outlined,
.v-input--density-compact .v-field--single-line,
.v-input--density-compact .v-field--no-label {
  padding-bottom: 0px !important;
}
</style>
