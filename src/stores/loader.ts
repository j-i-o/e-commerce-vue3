import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useLoaderStore = defineStore('loader', () => {
  const loading = ref(false)

  function setLoader() {
    console.log('seteando loader')

    loading.value = true
  }

  function removeLoader() {
    console.log('quitando loader')
    loading.value = false
  }

  return {
    loading,
    setLoader,
    removeLoader
  }
})
