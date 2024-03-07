<script setup lang="ts">
import Hero from '@/components/Hero.vue'
</script>
<template>
  <Hero title="Les enseignements" imgPath="./img/concert.webp" imgAlt="Concert">
    <template #chapo>
      <p class="text-xl leading-normal lg:text-3xl">
        La formation s’articule autour de 3 unités de valeurs complémentaires et indissociables : un
        cours d’instrument, un cours de formation musicale et une pratique collective.
      </p>
    </template>
  </Hero>
</template>
