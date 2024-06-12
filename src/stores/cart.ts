import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

interface Product {
  id: number
  cant: number
  price: number
}
export const useCartStore = defineStore('cart', () => {
  const products = ref<Product[]>([])
  const totalCount = computed(() => products.value.length)
  const totalPrice = computed(() =>
    products.value.reduce((total, prod) => total + prod.price * prod.cant, 0)
  )

  function addProduct(product: Omit<Product, 'cant'>): void {
    const prod = products.value.find((prod) => prod.id === product.id)
    if (prod) {
      prod.cant += 1
    } else {
      products.value.push({ ...product, cant: 1 })
    }
  }
  function removeProduct(id: number): void {
    const prod = products.value.find((prod) => prod.id === id)
    if (prod) {
      prod.cant--
    }
  }
  function eraseProduct(id: number): void {
    products.value = products.value.filter((product) => product.id !== id)
  }
  function clearCart() {
    products.value = []
  }
  return {
    products,
    totalCount,
    totalPrice,
    addProduct,
    removeProduct,
    eraseProduct,
    clearCart
  }
})
