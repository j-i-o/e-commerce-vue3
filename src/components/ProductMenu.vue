<script setup>
const categories = await fetch('https://fakestoreapi.com/products/categories').then((res) =>
  res.json()
)
const drawer = 'algo'
console.log(categories)
</script>
<template>
  <v-navigation-drawer>
    <v-list-item title="CATEGORIES"></v-list-item>
    <v-divider></v-divider>
    <div v-if="categories">
      <v-list-item v-for="cat in categories" link :key="cat">{{ cat.toUpperCase() }}</v-list-item>
    </div>
  </v-navigation-drawer>
</template>
