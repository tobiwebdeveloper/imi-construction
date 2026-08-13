<template>
  <a
    :href="whatsappLink"
    class="whatsapp-button"
    target="_blank"
    rel="noopener noreferrer"
  >
   <img
  src="/assets/icons/whatsapp.svg"
  alt=""
  class="h-8 w-8"
  aria-hidden="true"
/>
  </a>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { siteData } from '~/data/siteData'

const contact = siteData.contact

const whatsappLink = computed(() => {
  const message = encodeURIComponent(
    'Hi, I would like to discuss a construction project.'
  )

  return `https://wa.me/${contact.whatsapp}?text=${message}`
})
</script>

<style scoped>
.whatsapp-button {
  position: fixed;
  right: var(--space-10);
  bottom: var(--space-10);
  z-index: 1000;

  width: 56px;
  height: 56px;

  display: grid;
  place-items: center;

  border-radius: 50%;

  background: #25D366;
  color: white;

  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08);

  transition:
    transform var(--duration-fast) var(--ease-standard),
    box-shadow var(--duration-fast) var(--ease-standard);
}

.whatsapp-button:hover {
  transform: translateY(-3px);
  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.24);
}

.whatsapp-button svg {
  width: 28px;
  height: 28px;
}



.whatsapp-button:hover .whatsapp-arrow {
  transform: translate(2px, -2px);
}
</style>