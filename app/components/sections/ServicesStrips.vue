<template>
  <section id="services" class="section services-strip">
    <div class="container">

      <div class="section-header">
        <span class="eyebrow">{{ services.eyebrow }}</span>
        <h2 class="section-title">{{ services.heading }}</h2>
        <p class="section-description">{{ services.description }}</p>
      </div>

      <a href="#estimate" class="services-list">
        <div
          v-for="item in services.items"
          :key="item.id"
          class="service-item"
        >
          <span class="service-number">{{ item.number }}</span>

          <div class="service-content">
            <h3>{{ item.title }}</h3>
            <p>{{ item.description }}</p>
          </div>

          <a href="#estimate" class="service-arrow">↗</a>
        </div>
      </a>

    </div>
  </section>
</template>

<script setup lang="ts">
import { siteData } from '~/data/siteData'

const services = siteData.services
</script>

<style scoped>
.services-list {
  border-top: 1px solid var(--color-border);
}

.service-item {
  display: grid;
  grid-template-columns: 80px 1fr auto;
  align-items: center;
  gap: var(--space-6);

  padding-block: var(--space-8);

  border-bottom: 1px solid var(--color-border);

  transition:
    padding var(--duration-normal) var(--ease-standard),
    background var(--duration-normal) var(--ease-standard);
}

.service-number {
  font-family: var(--font-decorative);
  font-size: var(--text-xs);
  color: var(--color-text-muted);
}

.service-content h3 {
  margin: 0 0 var(--space-2);

  font-family: var(--font-display);
  font-size: var(--text-xl);
  font-weight: var(--font-weight-bold);
}

.service-content p {
  max-width: 600px;
  margin: 0;

  font-size: var(--text-sm);
  line-height: var(--leading-relaxed);
  color: var(--color-text-muted);
}

.service-arrow {
  font-size: var(--text-xl);
  color: var(--color-text-muted);

  transition:
    color var(--duration-normal) var(--ease-standard),
    transform var(--duration-normal) var(--ease-standard);
}

.service-item:hover {
  padding-inline: var(--space-3);
}

.service-item:hover .service-arrow {
  color: var(--color-accent);
  transform: translate(3px, -3px);
}

@media (max-width: 768px) {
  .service-item {
    grid-template-columns: 40px 1fr auto;
    gap: var(--space-3);
    padding-block: var(--space-6);
  }

  .service-content h3 {
    font-size: var(--text-lg);
  }

  .service-content p {
    font-size: var(--text-sm);
  }
}
</style>