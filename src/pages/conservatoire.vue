<script setup lang="ts">
import Hero from '@/components/Hero.vue'
import { useHead } from '@unhead/vue'
useHead({
  title: 'Le conservatoire | Conservatoire Henri Dutilleux'
})
</script>
<template>
  <Hero title="Le conservatoire" imgPath="./img/crd-ext-02.webp" imgAlt="Conservatoire">
    <template #chapo>
      <p class="text-xl leading-normal lg:text-3xl">
        Réparti sur 9 sites d’enseignement, le CRD compte plus de 1 500 élèves, 84 enseignants.
        Environ 50 disciplines sont proposées en musique, danse et théâtre.
      </p>
    </template>
  </Hero>
</template>
