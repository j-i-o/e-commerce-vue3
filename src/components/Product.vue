<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import { useCartStore } from '@/stores/cart'
import { useHomeStore } from '@/stores/home'
import { useFavStore } from '@/stores/favs'
import { useRouter } from 'vue-router'
import { useDisplay } from 'vuetify'
import QuantityInput from './QuantityInput.vue'

const route = useRouter()
const cart = useCartStore()
const favs = useFavStore()
const categories = useHomeStore()
const props = defineProps(['product'])
const { mobile } = useDisplay()
</script>
<template>
  <v-card variant="outlined" hover rounded="xl">
    <v-card-title class="py-5 text-wrap bg-grey-darken-2">
      <v-row justify="space-between" class="ml-1">
        <v-col cols="auto" class="pa-0">
          <v-chip
            color="grey-lighten-5"
            :size="mobile ? 'x-small' : 'small'"
            @click="categories.getProducts(props.product.category)"
          >
            <span class="display-4">
              {{ props.product.category.toUpperCase() }}
            </span>
          </v-chip>
        </v-col>
        <v-col cols="auto" class="pa-0 mr-2">
          <v-icon
            size="small"
            :color="favs.includes(props.product.id) ? 'red' : 'yellow-darken-3'"
            icon="mdi-heart"
            @click.prevent="favs.addRemoveProduct(props.product)"
          ></v-icon>
        </v-col>
      </v-row>
    </v-card-title>
    <v-card-text
      class="mt-2 cursor-pointer"
      @click.prevent="route.push({ name: 'product', params: { productId: props.product.id } })"
    >
      <v-row>
        <v-col class="text-truncate">
          {{ props.product.title }}
        </v-col>
      </v-row>
      <v-row justify="center">
        <v-img
          :src="props.product.image"
          aspect-ratio="1/1"
          max-width="100px"
          height="100px"
        ></v-img>
      </v-row>
    </v-card-text>

    <v-card-actions class="pb-3">
      <v-container class="pa-0">
        <v-row justify="space-around" align="center" no-gutters>
          <v-col cols="12" md="4" class="text-center">
            <span class="bg-yellow-darken-2 rounded-pill px-2 text-h6">
              ${{ props.product.price.toFixed(2) }}</span
            >
          </v-col>
          <v-col cols="11" md="5" class="text-center mt-2">
            <QuantityInput
              :product="props.product"
              :quantity="cart.getProductQuantity(Number.parseInt(props.product.id))"
            />
          </v-col>
          <!-- <v-btn
            icon="mdi-plus"
            class="bg-grey"
            density="compact"
            @click="cart.updateQuantity(props.product)"
          ></v-btn> -->
        </v-row>
        <!-- <v-row class="mt-0">
          <v-btn
            icon="mdi-magnify"
            :to="{ name: 'product', params: { productId: props.product.id } }"
          ></v-btn>
        </v-row> -->
      </v-container>
    </v-card-actions>
  </v-card>
</template>
