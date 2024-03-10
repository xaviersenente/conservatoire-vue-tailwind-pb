<script setup lang="ts">
import LogoIcon from '@/components/icons/IconLogo.vue'
import SearchIcon from '@/components/icons/IconSearch.vue'
import { RouterLink } from 'vue-router'
import { ref, computed, watch } from 'vue'
import { useWindowScroll } from '@vueuse/core'

// Créer une référence réactive pour suivre l'état du menu
const activeMenu = ref(false)

function closeMenu() {
  activeMenu.value = false
}

const { y } = useWindowScroll()
const underLimit = computed(() => y.value < 400)

const dirTop = ref(true)
watch(y, (y, oldY) => {
  dirTop.value = y < oldY
})
</script>

<template>
  <header
    class="px-6 py-2 bg-white fixed z-10 w-full flex items-stretch justify-between transition-all duration-300 ease-in-out lg:py-0"
    :class="{
      '!-translate-y-full !bg-transparent': !dirTop,
      '!bg-transparent lg:!bg-white': underLimit
    }"
  >
    <div class="flex items-center">
      <RouterLink to="/" aria-label="Accueil">
        <LogoIcon aria-hidden="true" />
      </RouterLink>
    </div>

    <div class="flex items-center gap-4 lg:flex-row-reverse">
      <button aria-label="Recherche">
        <SearchIcon :class="{ 'stroke-white lg:stroke-black': underLimit }" aria-hidden="true" />
      </button>

      <button
        class="relative z-10 flex h-5 w-8 flex-col justify-between *:h-[2px] *:w-full *:bg-black *:transition-all *:duration-300 *:ease lg:hidden"
        @click="activeMenu = !activeMenu"
        aria-label="Menu"
        :aria-expanded="activeMenu ? 'true' : 'false'"
        aria-controls="menu-principal"
      >
        <div
          :class="{ 'translate-y-[9px] rotate-45 !bg-white': activeMenu, '!bg-white': underLimit }"
        ></div>
        <div :class="{ '!bg-white opacity-0': activeMenu, '!bg-white': underLimit }"></div>
        <div
          :class="{
            '-translate-y-[9px] -rotate-45 !bg-white': activeMenu,
            '!bg-white': underLimit
          }"
        ></div>
      </button>

      <nav
        id="menu-principal"
        class="invisible fixed inset-0 bg-indigo text-2xl text-white opacity-0 transition-all duration-300 ease-in-out lg:visible lg:relative lg:flex lg:items-center lg:bg-transparent lg:text-sm lg:font-bold lg:uppercase lg:tracking-wide lg:text-black lg:opacity-100"
        :class="{ '!visible opacity-100': activeMenu }"
        v-scroll-lock="activeMenu"
      >
        <ul class="mt-[25vh] mx-16 lg:m-0 lg:flex">
          <li class="menu-item">
            <RouterLink class="menu-link" to="/conservatoire" @click="closeMenu"
              >Le conservatoire</RouterLink
            >
          </li>
          <li class="menu-item">
            <RouterLink class="menu-link" to="/enseignements" @click="closeMenu"
              >Enseignements</RouterLink
            >
          </li>
          <li class="menu-item">
            <RouterLink class="menu-link" to="/events" @click="closeMenu">Agenda</RouterLink>
          </li>
          <li class="menu-item">
            <RouterLink class="menu-link" to="/contact" @click="closeMenu">Contact</RouterLink>
          </li>
          <li class="menu-item">
            <RouterLink
              class="menu-link lg:bg-black lg:text-white lg:px-8"
              to="/inscription"
              @click="closeMenu"
              >S'inscrire</RouterLink
            >
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>
