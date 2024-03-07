<script setup lang="ts">
import DuotoneImg from '@/components/DuotoneImg.vue'
defineProps<{
  title: string
  imgPath: string
  imgAlt: string
  subTitle?: string
}>()
</script>
<template>
  <div>
    <div>
      <h1>{{ title }}</h1>
      <h2 v-if="subTitle">{{ subTitle }}</h2>
    </div>

    <slot name="chapo"></slot>
    <DuotoneImg :imgPath="imgPath" :imgAlt="imgAlt" />
  </div>
</template>
