<script setup lang="ts">
import { ref, onMounted, watch, computed } from 'vue'
import { useCategoryStore } from '@/stores/category'
import { useCartStore } from '@/stores/cart'
import { VNumberInput } from 'vuetify/labs/VNumberInput'

const cartStore = useCartStore()
const { getProduct, updateQuantity } = useCartStore()

const product = computed(() => cartStore.product)
const categoryStore = useCategoryStore()
const props = defineProps({ productId: { type: String, required: true } })
const quantity = ref(cartStore.getProductQuantity(Number.parseInt(props.productId)))

onMounted(() => {
  getProduct(Number.parseInt(props.productId))
  console.log(product.value)
})

watch(quantity, async (newCant) => {
  if (product.value) {
    updateQuantity(product.value, newCant)
  }
})
</script>

<template>
  <v-container v-if="product">
    <v-row class="mt-2 mb-5">
      <v-chip @click="categoryStore.changeCategory(product.category)">
        {{ product.category.toUpperCase() }}
      </v-chip>
    </v-row>
    <v-row justify="center">
      <v-col cols="8">
        <v-row class="text-h4" justify="center">
          {{ product.title }}
        </v-row>
        <v-row justify="center">
          <v-col cols="10">
            <v-img :src="product.image" max-height="50vh"></v-img>
          </v-col>
        </v-row>
        <v-row justify="center" class="text-subtitle-2">
          <v-col cols="8">
            {{ product.description }}
          </v-col>
          <v-col class="border-thin">
            <!-- QUANTITY -->
            <v-row justify="center">
              <v-col cols="12" md="6">
                <VNumberInput
                  label="Quantity"
                  variant="outlined"
                  density="compact"
                  flat
                  v-model="quantity"
                  :min="0"
                  control-variant="split"
                ></VNumberInput>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
        <v-row> OTRAS OFERTAS </v-row>
      </v-col>
    </v-row>
    <v-row></v-row>
  </v-container>
</template>
