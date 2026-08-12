<template>
  <AppHeader />

  <main>
    <slot />
  </main>

  <AppFooter />
</template>
<script setup>
import AppHeader from '~/components/app/AppHeader.vue';
import AppFooter from '~/components/app/AppFooter.vue';
</script>