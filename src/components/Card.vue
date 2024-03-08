<script setup lang="ts">
import DuotoneImg from '@/components/DuotoneImg.vue'
import { formatDate } from '@/helper'
import { RouterLink } from 'vue-router'
import { pb } from '@/backend'
import type { EventsResponse } from '@/pocketbase-types'

const props: EventsResponse = defineProps<EventsResponse>()

const urlImgCard = props.imgUrl && pb.getFileUrl(props, props.imgUrl, { thumb: '1024x680' })
</script>
<template>
  <article
    class="group col-span-4 grid grid-cols-[24px_1fr] grid-rows-[200px_48px_1fr] lg:grid-cols-[2fr_11fr]"
  >
    <DuotoneImg
      :imgPath="urlImgCard"
      :imgAlt="imgAlt"
      classPicture="col-start-1 row-start-1 col-span-2 row-span-2 group-hover:before:bg-black"
      classImg="group-hover:grayscale-0 group-hover:mix-blend-normal"
    />
    <h3 class="z-[1] col-start-2 row-start-1 my-6 mr-4 self-end font-serif text-3xl text-white">
      <RouterLink :to="{ name: '/events/[id]', params: { id } }">{{ title }}</RouterLink>
    </h3>
    <div class="z-[2] col-span-1 col-start-2 row-span-2 row-start-2 space-y-4 bg-white p-6">
      <p>{{ formatDate(date) }}</p>
      <p>{{ excerpt }}</p>
      <RouterLink
        :to="{ name: '/events/[id]', params: { id } }"
        class="inline-block border-b-2 border-black uppercase"
        >Plus d'info</RouterLink
      >
    </div>
  </article>
</template>
