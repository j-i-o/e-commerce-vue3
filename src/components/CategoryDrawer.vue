<template>
  <v-navigation-drawer v-model="homeStore.drawer" temporary>
    <v-list-item @click="homeStore.getProducts()" class="bg-grey" appendIcon="mdi-home"
      >HOME</v-list-item
    >
    <v-list-item
      v-for="cat in categories"
      :class="homeStore.currentCategory === cat ? 'bg-grey-lighten-2' : ''"
      :key="cat"
      @click.prevent="changeCategory(cat)"
      appendIcon="mdi-arrow-right"
      >{{ cat.toUpperCase() }}</v-list-item
    >
  </v-navigation-drawer>
</template>

<script setup lang="ts">
import { useHomeStore } from '@/stores/home'

const homeStore = useHomeStore()

console.log(homeStore.currentCategory)

const categories = await fetch('https://fakestoreapi.com/products/categories').then((res) =>
  res.json()
)
console.log(categories)

const changeCategory = async (cat: string) => {
  homeStore.drawer = false
  await homeStore.changeCategory(cat)
}
</script>
