<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import { watch, ref } from 'vue'
import { useCartStore } from '@/stores/cart'
import type { Product } from '@/types/Product'
import { VNumberInput } from 'vuetify/labs/VNumberInput'
import { useDisplay } from 'vuetify'

const { mobile } = useDisplay()
const { updateQuantity } = useCartStore()
const props = defineProps<{
  quantity: number
  product: Product
}>()
let newCant = ref(props.quantity)

watch(newCant, async (newCant) => {
  updateQuantity(props.product, newCant)
})
</script>
<template>
  <VNumberInput
    v-if="quantity > 0"
    hide-details
    inset
    label="Quantity"
    variant="outlined"
    density="compact"
    v-model="newCant"
    :min="0"
    control-variant="split"
    vert
  ></VNumberInput>
  <v-btn
    v-else
    icon="mdi-plus"
    class="bg-yellow-darken-3 text-left text-white"
    density="comfortable"
    @click="newCant++"
  ></v-btn>
</template>
