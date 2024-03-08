<script setup lang="ts">
import Hero from '@/components/Hero.vue'
import { useHead } from '@unhead/vue'
useHead({
  title: 'Contact | Conservatoire Henri Dutilleux'
})
</script>
<template>
  <Hero title="Contact" imgPath="./img/singer.webp" imgAlt="Chanteur">
    <template #chapo>
      <p class="text-xl leading-normal lg:text-3xl">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus porttitor imperdiet diam
        et rutrum. Phasellus varius turpis felis, id semper erat aliquam eu.
      </p>
    </template>
  </Hero>
</template>
