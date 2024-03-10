<script setup lang="ts">
import Hero from '@/components/Hero.vue'
import IconTheater from '@/components/icons/IconTheater.vue'
import IconMusic from '@/components/icons/IconMusic.vue'
import IconDanse from '@/components/icons/IconDanse.vue'
import Button from '@/components/Button.vue'
import Card from '@/components/Card.vue'
// import { events } from '@/data'
import Patterns from '@/components/icons/Patterns.vue'
import { animateLines } from '@/helper'
import { useHead } from '@unhead/vue'
import { getNextEvents } from '@/backend'

const events = await getNextEvents()
useHead({
  title: 'Conservatoire Henri Dutilleux',
  meta: [
    {
      name: 'description',
      content:
        'Découvrez le Conservatoire, ses enseignements, ses équipes dans un nouveau lieu dédié à la culture artistique.'
    }
  ]
})
animateLines()
</script>
<template>
  <Hero
    title="Conservatoire Henri Dutilleux"
    subTitle="Conservatoire à Rayonnement Départemental du Grand Belfort"
    imgPath="./img/contrebasse.webp"
    imgAlt="Contrebasse"
  >
    <template #chapo>
      <nav class="flex-1 font-serif lg:text-3xl">
        <ul class="grid grid-cols-3 gap-12">
          <li>
            <a class="flex flex-col items-center gap-4 lg:flex-row" href="#"
              ><IconMusic aria-hidden="true" /> Musique</a
            >
          </li>
          <li>
            <a class="flex flex-col items-center gap-4 lg:flex-row" href="#"
              ><IconTheater aria-hidden="true" /> Théâtre</a
            >
          </li>
          <li>
            <a class="flex flex-col items-center gap-4 lg:flex-row" href="#"
              ><IconDanse aria-hidden="true" /> Danse</a
            >
          </li>
        </ul>
      </nav>
    </template>
    <template #patterns>
      <div
        class="absolute inset-0 flex items-center justify-end overflow-hidden stroke-pink stroke-[24px] opacity-40"
      >
        <Patterns class="-ml-60 -mr-[5vw] lg:ml-auto lg:w-[80vw]" />
      </div>
    </template>
  </Hero>

  <section class="grille my-24 space-y-8 lg:grid-rows-2 lg:space-y-0">
    <img
      class="lg:col-span-7 lg:col-start-1 lg:row-span-2 lg:row-start-1"
      src="/img/crd-int-01.jpg"
      alt="Salle de musique du conservatoire"
    />
    <header
      class="space-y-8 bg-white lg:col-span-7 lg:col-start-6 lg:row-span-1 lg:row-start-1 lg:p-16"
    >
      <h2 class="text-xl italic leading-normal lg:text-3xl">
        Découvrez le Conservatoire, ses enseignements, ses équipes dans un nouveau lieu dédié à la
        culture artistique.
      </h2>
      <Button url="/conservatoire" text="Plus d'info" />
    </header>

    <ul class="grid grid-cols-2 gap-12 lg:col-span-4 lg:col-start-9 lg:row-start-2">
      <li>
        <span class="block text-4xl text-[#e86f59] lg:text-6xl">9</span>
        <span>sites</span>
      </li>
      <li>
        <span class="block text-4xl text-[#e86f59] lg:text-6xl">84</span>
        <span>enseignants</span>
      </li>
      <li>
        <span class="block text-4xl text-[#e86f59] lg:text-6xl">1500</span>
        <span>élèves</span>
      </li>
      <li>
        <span class="block text-4xl text-[#e86f59] lg:text-6xl">50</span>
        <span>disciplines</span>
      </li>
    </ul>
  </section>

  <section
    class="grille space-y-8 py-24 lg:before:col-span-2 lg:before:col-start-1 lg:before:mt-12 lg:before:h-[1px] lg:before:bg-black"
  >
    <header class="space-y-6 lg:col-span-6 lg:col-start-3">
      <h2 class="text-4xl lg:text-6xl">Agenda</h2>
      <p class="text-xl leading-normal lg:text-3xl">
        Lieu de création artistique, le conservatoire propose régulièrement des actions culturelles
        ouvertes à tous.
      </p>
    </header>
    <Button
      class="lg:col-span-4 lg:col-start-9 lg:self-start lg:justify-self-end"
      url="/events"
      text="Tous les évènements"
      variant="default"
    />
    <Card v-for="event in events.items.slice(0, 3)" v-bind="event" :key="event.id" />
  </section>

  <section
    class="grille space-y-8 py-48 bg-black bg-[url('/img/background-inscription.webp')] bg-cover bg-center text-white lg:before:col-span-2 lg:before:col-start-1 lg:before:mt-12 lg:before:h-[1px] lg:before:bg-white"
  >
    <header class="space-y-6 lg:col-span-6 lg:col-start-3">
      <h2 class="text-4xl lg:text-6xl">Inscriptions</h2>
      <p class="text-xl leading-normal lg:text-3xl">
        Vous êtes désireux d'entrer au conservatoire ? Vous trouverez ici toutes les informations
        sur les les modalités d'inscriptions.
      </p>
    </header>
    <Button
      class="lg:col-span-4 lg:col-start-9 lg:self-start lg:justify-self-end"
      url="/"
      text="S'inscrire"
      variant="outlined"
    />
  </section>
</template>
