<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
const props = defineProps(['product'])
// type Product = {
//   id: int;
//   title: string
//   description: string;
//   category: string;
//   image: string;
//   price: int;
//   rating: {
//     rate: double;
//     count: int;
//   }
// }
console.log(props.product)
</script>
<template>
  <v-card>
    <v-card-title class="my-2">
      <v-row>
        <v-chip size="large">
          {{ props.product.category }}
        </v-chip>
      </v-row>
      <v-row>
        {{ props.product.title }}
      </v-row>
    </v-card-title>
    <v-card-subtitle>
      {{ props.product.description }}
    </v-card-subtitle>
    <v-card-text class="mt-4">
      <v-row justify="center">
        <v-img
          :src="props.product.image"
          aspect-ratio="1/1"
          max-width="100px"
          max-height="100px"
        ></v-img>
      </v-row>
    </v-card-text>

    <v-card-actions>
      <b class="mr-2">Price:</b> <span class="bg-yellow rounded"> ${{ props.product.price }}</span>
      <v-btn icon="mdi-plus"></v-btn>
      <v-btn icon="mdi-heart"></v-btn>
    </v-card-actions>
  </v-card>
</template>
