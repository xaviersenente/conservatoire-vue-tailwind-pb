<script setup lang="ts">
import Hero from '@/components/Hero.vue'
import { useHead } from '@unhead/vue'
useHead({
  title: 'Inscription | Conservatoire Henri Dutilleux'
})
</script>
<template>
  <Hero title="Inscription" imgPath="./img/danse.webp" imgAlt="Danseurs">
    <template #chapo>
      <p class="text-xl leading-normal lg:text-3xl">
        Les inscriptions sont ouvertes à partir de la journée portes ouvertes (mi-mai) jusqu'au 15
        septembre.
      </p>
    </template>
  </Hero>
</template>
