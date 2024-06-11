<script setup lang="ts">
import Product from '../components/Product.vue'
import ProductMenu from '../components/ProductMenu.vue'

const products = await fetch('https://fakestoreapi.com/products?limit=6').then((res) => res.json())
console.log(products)
</script>

<template>
  <v-container>
    <ProductMenu />
    <v-row>
      <v-col cols="4" v-for="prod in products" :key="prod.id">
        <Product :product="prod" />
      </v-col>
    </v-row>
    <v-row></v-row>
  </v-container>
</template>
