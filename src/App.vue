<script setup lang="ts">
import { RouterView } from 'vue-router'
import Header from './components/HeaderPage.vue'
import Footer from './components/FooterPage.vue'
import { onErrorCaptured, ref } from 'vue'

const error = ref<Error | null>(null)

onErrorCaptured((err, component, info) => {
  // console.log({ err, component, info })
  error.value = err
  return true
})
</script>

<template>
  <Header />
  <p v-if="error">Erreur : {{ error.message }}</p>
  <main>
    <Suspense>
      <template #default>
        <RouterView />
      </template>
      <template #fallback>
        <div>Loading...</div>
      </template>
    </Suspense>
  </main>

  <Footer />
</template>
