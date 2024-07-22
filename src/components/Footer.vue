<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import { useDisplay } from 'vuetify'

const links = ['More information', 'About us', 'Partners']
const { mobile } = useDisplay()
</script>

<template>
  <v-footer app class="bg-grey-darken-1">
    <v-row justify="center" no-gutters>
      <v-btn
        v-for="link in links"
        :key="link"
        :class="mobile ? 'mx-1' : 'mx-2'"
        color="white"
        rounded="xl"
        variant="text"
        :size="mobile ? 'x-small' : 'medium'"
      >
        {{ link }}
      </v-btn>
      <v-col class="text-center mt-2" cols="12">
        {{ new Date().getFullYear() }} — <strong>JIO</strong>
      </v-col>
    </v-row>
  </v-footer>
</template>
