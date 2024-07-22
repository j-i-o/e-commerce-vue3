<script setup lang="ts">
import { useCartStore } from '@/stores/cart'
import { useFavStore } from '@/stores/favs'
import { useHomeStore } from '@/stores/home'

const home = useHomeStore()
const favs = useFavStore()
const cart = useCartStore()
</script>

<template>
  <v-app-bar fixed color="yellow-darken-3">
    <template v-slot:prepend>
      <v-app-bar-nav-icon
        color="white"
        icon="mdi-menu"
        @click.prevent="home.drawer = !home.drawer"
      ></v-app-bar-nav-icon>
    </template>

    <v-app-bar-title class="ml-0">
      <v-row>
        <v-col cols="auto">
          <span class="display-4">E-COMMERCE</span>
        </v-col>
      </v-row>
    </v-app-bar-title>

    <template v-slot:append>
      <v-badge
        :model-value="!!favs.totalItems"
        dot
        location="top right"
        offset-x="11"
        offset-y="13"
        color="red"
      >
        <v-btn :disabled="!favs.totalItems" icon="mdi-heart" @click.prevent="favs.drawer = true">
          <v-icon color="white" icon="mdi-heart"></v-icon>
        </v-btn>
      </v-badge>
      <v-badge
        :model-value="!!cart.totalCount"
        :content="cart.totalCount"
        location="top right"
        offset-x="10"
        offset-y="12"
      >
        <v-btn
          :disabled="!cart.totalCount"
          icon="mdi-shopping"
          :to="{
            name: 'cart'
          }"
        >
          <v-icon color="white" icon="mdi-shopping"></v-icon>
        </v-btn>
      </v-badge>
      <v-btn icon="mdi-account-circle">
        <v-icon color="white" icon="mdi-account-circle"></v-icon
      ></v-btn>
    </template>
  </v-app-bar>
</template>
<style>
.v-field__field {
  align-self: center !important;
}
</style>
