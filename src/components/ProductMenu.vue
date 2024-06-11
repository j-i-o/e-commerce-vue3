<script setup>
import { useCategoryStore } from '@/stores/category'
const catStore = useCategoryStore()

const categories = await fetch('https://fakestoreapi.com/products/categories').then((res) =>
  res.json()
)
</script>
<template>
  <v-navigation-drawer>
    <v-list-item class="text-overline bg-grey"><b>CATEGORIES</b></v-list-item>
    <v-divider></v-divider>
    <div v-if="categories">
      <v-list-item
        v-for="cat in categories"
        :to="{ name: 'home' }"
        :key="cat"
        @click="catStore.changeCategory(cat)"
        ><b :style="{ letterSpacing: '3px' }">{{ cat.toUpperCase() }}</b></v-list-item
      >
    </div>
  </v-navigation-drawer>
</template>
