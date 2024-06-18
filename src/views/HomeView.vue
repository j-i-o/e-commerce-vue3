<script setup lang="ts">
import { onMounted } from 'vue'
import Product from '@/components/Product.vue'
import ProductMenu from '@/components/ProductMenu.vue'
import { useCategoryStore } from '@/stores/category'

const catStore = useCategoryStore()
onMounted(async () => {
  catStore.fetchProducts()
})
</script>

<template>
  <v-container>
    <ProductMenu />
    <v-row>
      <v-col cols="6" md="4" lg="3" v-for="prod in catStore.products" :key="prod.id">
        <Product :product="prod" />
      </v-col>
    </v-row>
    <v-row></v-row>
  </v-container>
</template>
