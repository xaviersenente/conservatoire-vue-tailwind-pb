<script setup lang="ts">
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
    <img :src="imgPath" :alt="imgAlt" />
  </div>
</template>
