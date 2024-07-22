<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
const props = defineProps(['products'])
</script>
<template>
  <v-carousel
    v-if="props.products.length"
    show-arrows="hover"
    height="auto"
    cycle
    hide-delimiters
    color="black"
  >
    <!-- v-for="(prod, i) in props.products" :key="i" -->
    <v-carousel-item v-for="(prod, i) in props.products" :key="i">
      <v-card class="mb-5" max-height="30vh">
        <v-card-text>
          <v-row class="px-4" justify="space-around">
            <v-col cols="5" align-self="center">
              <v-row class="text-h5" justify="center">
                <v-col class="text-center">
                  <span>
                    <b>ON SALE</b>
                  </span>
                </v-col>
              </v-row>
              <v-row>
                <v-col class="text-center">
                  <v-btn color="yellow-darken-3 text-white">Buy now</v-btn>
                </v-col>
              </v-row>
            </v-col>
            <v-col cols="7" align-self="center">
              <v-img :src="prod.image" aspect-ratio="1/1" height="15vh"></v-img>
            </v-col>
          </v-row>
        </v-card-text>
      </v-card>
    </v-carousel-item>
  </v-carousel>
</template>
