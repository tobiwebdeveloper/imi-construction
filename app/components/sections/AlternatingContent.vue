<template>
  <section id="about" class="section alternating-content">
    <div class="container">
      <div class="section-header">
        <span class="eyebrow">{{ about.eyebrow }}</span>
        <h2 class="section-title">{{ about.heading }}</h2>
        <p class="section-description">{{ about.description }}</p>
      </div>
      <div
        v-for="section in about.sections"
        :key="section.id"
        class="alternating-feature"
        :class="{ 'alternating-feature--reverse': section.imagePosition === 'left' }"
      >
        <div class="alternating-feature__image">
          <img
            :src="siteData.media.images[section.image]"
            :alt="section.heading"
          />
        </div>

        <div class="alternating-feature__content">
          <span class="eyebrow">
            {{ section.eyebrow }}
          </span>

          <h2>
            {{ section.heading }}
          </h2>

          <p>
            {{ section.description }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { siteData } from '~/data/siteData'

const about = siteData.about
</script>

<style scoped>
.alternating-content {
  overflow: hidden;
}
.alternating-content .section-header {
margin-bottom: var(--space-4xl);
}

.alternating-feature {
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  gap: var(--space-80);
}

.alternating-feature + .alternating-feature {
  margin-top: var(--space-24);
}

.alternating-feature--reverse {
  direction: rtl;
}

.alternating-feature--reverse > * {
  direction: ltr;
}

.alternating-feature__image {
  min-height: 420px;
  overflow: hidden;
  border-radius: var(--radius-lg);
}

.alternating-feature__image img {
  display: block;
  width: 100%;
  height: 100%;
   border-radius: var(--radius-lg);
  object-fit: cover;
}

.alternating-feature__content {
  max-width: 520px;
}

.alternating-feature__content h2 {
  margin: var(--space-4) 0;
  font-family: var(--font-display);
  font-size: var(--text-4xl);
  font-weight: var(--font-weight-bold);
  line-height: var(--leading-tight);
  letter-spacing: var(--tracking-tight);
}

.alternating-feature__content p {
  margin: 0;
  font-family: var(--font-body);
  font-size: var(--text-lg);
  line-height: var(--leading-relaxed);
  color: var(--color-text-muted);
}

@media (max-width: 768px) {
  .alternating-feature,
  .alternating-feature--reverse {
    grid-template-columns: 1fr;
    direction: ltr;
    gap: var(--space-8);
  }

  .alternating-feature + .alternating-feature {
    margin-top: var(--space-16);
  }

  .alternating-feature__image {
    min-height: 300px;
  }

  .alternating-feature__content h2 {
    font-size: var(--text-3xl);
  }
}
</style>