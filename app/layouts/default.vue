<template>
  <AppHeader />
  <WhatsAppChat />

  <main>
    <slot />
  </main>

  <AppFooter />
</template>
<script setup>
import AppHeader from '~/components/app/AppHeader.vue';
import AppFooter from '~/components/app/AppFooter.vue';
import WhatsAppChat from '~/components/app/WhatsAppChat.vue';
</script>