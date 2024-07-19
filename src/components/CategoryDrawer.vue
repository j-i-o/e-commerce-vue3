<template>
  <v-navigation-drawer v-model="homeStore.drawer" temporary>
    <v-list-item @click="goHome" class="bg-grey" appendIcon="mdi-home">HOME</v-list-item>
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
import { useRouter } from 'vue-router'

const homeStore = useHomeStore()
const router = useRouter()

console.log(homeStore.currentCategory)

const categories = await fetch('https://fakestoreapi.com/products/categories').then((res) =>
  res.json()
)
console.log(categories)

const changeCategory = async (cat: string) => {
  homeStore.drawer = false
  await homeStore.changeCategory(cat)
  router.push({ name: 'home' })
}

const goHome = async () => {
  homeStore.drawer = false
  await homeStore.getProducts()
  router.push({ name: 'home' })
}
</script>
