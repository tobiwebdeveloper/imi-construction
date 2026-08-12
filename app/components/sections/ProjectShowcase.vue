<script setup lang="ts">
import { siteData } from '~/data/siteData'

const projects = siteData.projects
const images = siteData.media.images
</script>

<template>
  <section class="section projects">
    <div class="container">

      <div class="section-header">
        <span class="eyebrow">
          {{ projects.eyebrow }}
        </span>

        <h2 class="section-title">
          {{ projects.heading }}
        </h2>

        <p class="section-description">
          {{ projects.description }}
        </p>
      </div>

      <div class="projects-list">
      <article
  v-for="project in projects.items"
  :key="project.id"
  class="project"
>
  <div class="project-image">
    <img
      :src="images[project.image]"
      :alt="project.title"
    />

    <div class="project-overlay">
      <div class="project-meta">
        <span class="project-category">
          {{ project.category }}
        </span>

        <h3>
          {{ project.title }}
        </h3>
      </div>

      <span class="project-location">
        {{ project.location }}
      </span>
    </div>
  </div>
</article>
      </div>

    </div>
  </section>
</template>

<style scoped>
.projects-list {
display: flex;
  gap: var(--space-20);
  flex-direction: column;
}
.project {
  position: relative;
  overflow: hidden;
 

  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);

  background: var(--color-surface-elevated);

  transition:
    border-color var(--duration-normal) var(--ease-standard),
    transform var(--duration-normal) var(--ease-standard);
}

.project:hover {
  border-color: var(--color-border-strong);
  transform: translateY(-2px);
}
.project-image {
  position: relative;
  overflow: hidden;
  aspect-ratio: 16 / 9;
  border-radius: var(--radius-lg);
  
}

.project-image img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform var(--duration-slow) var(--ease-standard);
}

.project-overlay {
  position: absolute;
  inset: 0;

  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: var(--space-6);

  padding: var(--space-8);

  background: linear-gradient(
    to top,
    rgba(0, 0, 0, 0.75),
    rgba(0, 0, 0, 0.15) 55%,
    transparent
  );

  color: var(--color-white);
}

.project-meta h3 {
  margin: var(--space-2) 0 0;

  font-family: var(--font-display);
  font-size: var(--text-3xl);
  font-weight: var(--font-weight-bold);
  color: var(--color-white);
  line-height: var(--leading-tight);
}

.project-category,
.project-location {
  font-family: var(--font-decorative);
  font-size: var(--text-xs);
  font-weight: var(--font-weight-bold);
  letter-spacing: var(--tracking-wide);
  text-transform: uppercase;
}

.project-category {
  opacity: 0.7;
}

.project-location {
  opacity: 0.8;
}

.project:hover .project-image img {
  transform: scale(1.02);
}

@media (max-width: 768px) {
  .project-overlay {
    padding: var(--space-5);
  }

  .project-meta h3 {
    font-size: var(--text-2xl);
  }
 
  .projects-list {
    flex-direction: column;
  }
}
</style>