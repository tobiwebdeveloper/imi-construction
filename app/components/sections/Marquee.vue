<template>
  <section class="marquee section">
    <div class="marquee-track">
  <div
    v-for="group in 4"
    :key="group"
    class="marquee-group"
  >
    <div
      v-for="item in marquee"
      :key="item"
      class="marquee-item"
    >
      <span>{{ item }}</span>
      <span class="marquee-separator">•</span>
    </div>
  </div>
</div>
  </section>
</template>

<script setup lang="ts">
import { siteData } from '~/data/siteData';
const marquee = siteData.marquee;
</script>
<style scoped>
.marquee {
  overflow: hidden;
}

.marquee-track {
  display: flex;
  width: max-content;
  animation: marquee-scroll 20s linear infinite;
}

.marquee-group {
  display: flex;
  align-items: center;
  gap: var(--space-6);
  padding-right: var(--space-6);
  flex-shrink: 0;
}

@keyframes marquee-scroll {
  from {
    transform: translateX(0);
  }

  to {
    transform: translateX(-25%);
  }
}

.marquee-item {
  display: flex;
  align-items: center;
  gap: var(--space-6);

  white-space: nowrap;

  font-family: var(--font-decorative);
  font-size: var(--text-sm);
  font-weight: var(--font-weight-bold);
  letter-spacing: var(--tracking-wide);
  text-transform: uppercase;

  color: var(--color-text-muted);
}

.marquee-separator {
  color: var(--color-accent);
}


</style>