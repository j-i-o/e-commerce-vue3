<script setup lang="ts">
import { onMounted, computed } from 'vue'
import Product from '@/components/Product.vue'
import Carousel from '@/components/Carousel.vue'
import { useHomeStore } from '@/stores/home'
import { useLoaderStore } from '@/stores/loader'

const homeStore = useHomeStore()
const { loading } = useLoaderStore()

const products = computed(() => homeStore.products)

onMounted(async () => {
  await homeStore.getProducts()
})
</script>

<template>
  <v-container>
    <v-row v-if="!loading && products.length" justify="center">
      <v-col cols="12" md="6">
        <Carousel :products="products" />
      </v-col>
    </v-row>
    <v-row v-if="loading">
      {{ loading }}
    </v-row>
    <v-row v-else>
      <v-col v-if="!!homeStore.currentCategory" cols="12">
        <v-chip class="bg-grey-lighten-2 text-black px-2" size="lg">
          {{ homeStore.currentCategory.toUpperCase() }}
          <v-icon
            color="red-lighten-1"
            icon="mdi-close"
            @click.prevent="homeStore.getProducts()"
          ></v-icon>
        </v-chip>
      </v-col>
      <v-col cols="6" md="4" lg="3" v-for="prod in products" :key="prod.id">
        <Product :product="prod" />
      </v-col>
    </v-row>
  </v-container>
</template>
