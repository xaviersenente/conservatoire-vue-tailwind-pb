<script setup lang="ts">
import FacebookIcon from '@/components/icons/IconFacebook.vue'
import TwitterIcon from '@/components/icons/IconTwitter.vue'
import YoutubeIcon from '@/components/icons/IconYoutube.vue'
import InstagramIcon from '@/components/icons/IconInstagram.vue'
import LogoGBIcon from '@/components/icons/IconLogoGB.vue'
import LogoFooterIcon from '@/components/icons/IconLogoFooter.vue'
import { RouterLink } from 'vue-router'
</script>
<template>
  <footer class="grille space-y-6 bg-gray-900 py-16 px-6 text-white lg:space-y-0">
    <LogoFooterIcon aria-hidden="true" />
    <nav class="space-y-3 lg:col-span-3 lg:col-start-7">
      <h3 class="font-bold font-sans uppercase">Menu</h3>
      <ul>
        <li><RouterLink to="/events">Agenda</RouterLink></li>
        <li><RouterLink to="/contact">Contact et accès</RouterLink></li>
      </ul>
    </nav>

    <div class="space-y-3 lg:col-span-3 lg:col-start-10">
      <h3 class="font-bold font-sans uppercase">Contact</h3>
      <address>
        1 rue Paul Koepfler<br />90000 Belfort<br />
        <a href="tel:0384542727">03 84 54 27 27</a><br />
        <a href="mailto:conservatoire@agglo-belfort.fr">conservatoire@agglo-belfort.fr</a>
      </address>
    </div>

    <div class="lg:col-span-3 lg:col-start-7"><LogoGBIcon aria-hidden="true" /></div>

    <div class="space-y-3 lg:col-span-3 lg:col-start-10">
      <h3 class="font-bold font-sans uppercase">Nous suivre</h3>
      <ul class="flex gap-4">
        <li>
          <a href="https://facebook.com" aria-label="facebook"
            ><FacebookIcon aria-hidden="true"
          /></a>
        </li>
        <li>
          <a href="https://instagram.com" aria-label="instagram"
            ><InstagramIcon aria-hidden="true"
          /></a>
        </li>
        <li>
          <a href="https://twitter.com" aria-label="twitter"><TwitterIcon aria-hidden="true" /></a>
        </li>
        <li>
          <a href="https://youtube.com" aria-label="youtube"><YoutubeIcon aria-hidden="true" /></a>
        </li>
      </ul>
    </div>
  </footer>
</template>
