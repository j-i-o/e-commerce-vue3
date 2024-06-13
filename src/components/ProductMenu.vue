<script setup>
import { useCategoryStore } from '@/stores/category'
const catStore = useCategoryStore()

const categories = await fetch('https://fakestoreapi.com/products/categories').then((res) =>
  res.json()
)
</script>
<template>
  <v-navigation-drawer>
    <v-list-item class="text-overline bg-grey" @click="catStore.changeCategory()"
      ><b>Home</b></v-list-item
    >
    <v-divider></v-divider>
    <v-list-item
      v-for="cat in categories"
      :class="catStore.currentCategory === cat ? 'selected' : ''"
      :to="{ name: 'home' }"
      :key="cat"
      @click="catStore.changeCategory(cat)"
      ><b>{{ cat.toUpperCase() }}</b></v-list-item
    >
  </v-navigation-drawer>
</template>
<style>
.selected {
  background-color: darkgrey;
}
</style>
