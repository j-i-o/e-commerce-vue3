import { defineStore } from 'pinia'
import { ref } from 'vue'
import { useApiStore } from './api'
import type { Product } from '@/types/Product'

export const useHomeStore = defineStore('home', () => {
  const api = useApiStore()
  // const currentCategory = ref('')
  const products = ref<Product[]>([])

  async function getProducts(category: string = '') {
    const data = await api.fetchProducts(category)
    if (data) {
      products.value = data
    }
  }

  // async function changeCategory(category: string) {
  //   currentCategory.value = category
  //   const data = await api.fetchProducts(currentCategory.value)

  //   if (data) {
  //     products.value = data
  //   }
  // }

  return {
    products,
    getProducts
    // changeCategory
  }
})
