import { defineStore } from 'pinia'
import { ref } from 'vue'
import { useApiStore } from './api'
import type { Product } from '@/types/Product'

export const useHomeStore = defineStore('home', () => {
  const api = useApiStore()
  const drawer = ref(false)
  const currentCategory = ref('')
  const products = ref<Product[]>([])
  const popup = ref(true)

  async function getProducts(category: string = '') {
    console.log('Category', category)

    const data = await api.fetchProducts(category)
    if (data) {
      products.value = data
      if (category) {
        currentCategory.value = category
      } else {
        currentCategory.value = ''
      }
    }
  }

  async function changeCategory(category: string) {
    currentCategory.value = category
    const data = await api.fetchProducts(currentCategory.value)

    if (data) {
      products.value = data
    }
  }

  return {
    popup,
    drawer,
    currentCategory,
    products,
    getProducts,
    changeCategory
  }
})
