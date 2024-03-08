<script setup lang="ts">
import Hero from '@/components/Hero.vue'
import Card from '@/components/Card.vue'
// import { events } from '@/data'
import { useHead } from '@unhead/vue'
import { getNextEvents } from '@/backend'

const events = await getNextEvents()
// console.log(events)
useHead({
  title: 'Agenda | Conservatoire Henri Dutilleux'
})
</script>
<template>
  <Hero title="Agenda" imgPath="./img/orchestre.webp" imgAlt="Orchestre">
    <template #chapo>
      <p class="text-xl leading-normal lg:text-3xl">
        Lieu de création artistique, le conservatoire propose régulièrement des actions culturelles
        ouvertes à tous.
      </p>
    </template>
  </Hero>
  <div class="grille my-24">
    <Card v-for="event in events.items" v-bind="event" :key="event.id" />
  </div>
</template>
