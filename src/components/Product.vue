<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import { useCartStore } from '@/stores/cart'
import { useCategoryStore } from '@/stores/category'

const cart = useCartStore()
const categories = useCategoryStore()
const props = defineProps(['product'])
</script>
<template>
  <v-card>
    <v-card-title class="py-5 text-wrap">
      <v-row>
        <v-chip size="small" @click="categories.changeCategory(props.product.category)">
          {{ props.product.category.toUpperCase() }}
        </v-chip>
      </v-row>
    </v-card-title>
    <v-card-subtitle>
      {{ props.product.title }}
    </v-card-subtitle>
    <v-card-text class="mt-4">
      <v-row justify="center">
        <v-img
          :src="props.product.image"
          aspect-ratio="1/1"
          max-width="100px"
          height="100px"
        ></v-img>
      </v-row>
    </v-card-text>

    <v-card-actions>
      <v-container>
        <v-row justify="space-around">
          <span class="bg-yellow-lighten-3 rounded-pill px-2">
            ${{ props.product.price.toFixed(2) }}</span
          >
          <!-- <v-btn
            icon="mdi-plus"
            class="bg-grey"
            density="compact"
            @click="cart.updateQuantity(props.product)"
          ></v-btn> -->
        </v-row>
        <v-row class="mt-0">
          <v-btn icon="mdi-heart"></v-btn>
          <v-btn
            icon="mdi-magnify"
            :to="{ name: 'product', params: { productId: props.product.id } }"
          ></v-btn>
        </v-row>
      </v-container>
    </v-card-actions>
  </v-card>
</template>
