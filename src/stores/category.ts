import { defineStore } from 'pinia'

export const useCategoryStore = defineStore('category', {
  state: () => {
    return { currentCategory: '', products: null }
  },
  actions: {
    changeCategory(category: string): void {
      this.currentCategory = category
      console.log('Cambio categoría: ', category)
      this.fetchProducts()
    },
    async fetchProducts() {
      const url = `https://fakestoreapi.com/products/${this.currentCategory ? `/category/${this.currentCategory}` : `?limit=8`}`
      this.products = await fetch(url).then((res) => res.json())
    }
  }
})
