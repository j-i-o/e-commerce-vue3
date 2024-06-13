import { defineStore } from 'pinia'
import axios from 'axios'
import type { Product } from '@/types/Product'

export const useApiStore = defineStore('api', () => {
  async function fetchProduct(productId: number) {
    try {
      const response = await axios.get<Product>(`https://fakestoreapi.com/products/${productId}`)
      return response.data as Product
    } catch (error) {
      console.error('Error fetching product', error)
    }
  }

  return {
    fetchProduct
  }
})
