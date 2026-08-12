<template>
  <section class="section hero-split">
    <div class="container">
      <div class="hero-grid">

        <div class="hero-content">
          <div class="section-header">
            <span class="eyebrow">{{ hero.eyebrow }}</span>

            <h1>{{ hero.heading }}</h1>

            <p class="section-description">
              {{ hero.description }}
            </p>
          </div>

          <div class="hero-actions">
            <NuxtLink
              :to="hero.primaryCTA.href"
              class="btn-primary"
            >
              {{ hero.primaryCTA.label }}
            </NuxtLink>

            <NuxtLink
              :to="hero.secondaryCTA.href"
              class="btn-secondary"
            >
              {{ hero.secondaryCTA.label }}
            </NuxtLink>
          </div>
        </div>

        <div class="hero-image">
          <img
            :src="image"
            :alt="hero.heading"
          >
        </div>

      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { siteData } from '~/data/siteData'

const hero = siteData.hero
const image = siteData.media.images[hero.image]
</script>

<style scoped>
.hero-split {
  padding-block: var(--space-3xl);
}

.hero-grid {
  display: grid;
  grid-template-columns: 1.1fr 0.9fr;
  gap: var(--space-2xl);
  align-items: stretch;
}

.hero-content {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.hero-actions {
  display: flex;
  align-items: center;
  gap: var(--space-3);
  flex-wrap: wrap;
}

.hero-image {
  position: relative;
  min-height: 560px;
  overflow: hidden;
  border-radius: var(--radius-lg);
  background: var(--color-surface-elevated);
  border: 1px solid var(--color-border);
  box-shadow: var(--shadow-sm);
}

.hero-image::after {
  content: "";
  position: absolute;
  inset: 0;
  pointer-events: none;

  background:
    linear-gradient(
      135deg,
      rgba(255, 255, 255, 0.08),
      rgba(255, 255, 255, 0) 45%
    );
}

.hero-image img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;

  transform: scale(1.02);
}

@media (max-width: 768px) {
  .hero-split {
    padding-block: var(--space-3xl);
  }

  .hero-grid {
    grid-template-columns: 1fr;
    gap: var(--space-xl);
  }

  .hero-image {
    min-height: 360px;
  }
}
</style>