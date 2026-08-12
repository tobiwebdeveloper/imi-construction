
<template>
  <section class="statement section">
    <div class="container">
      <div class="statement-content section-header--center">

        <span class="eyebrow">
          {{ statement.eyebrow }}
        </span>

        <p class="statement-text">
          <span class="statement-primary">
            {{ statement.heading }}
          </span>
          <span class="statement-muted">
            {{ statement.description }}
          </span>
        </p>

      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { siteData } from '~/data/siteData'

const statement = siteData.statement
</script>


<style scoped>
.statement .section{
    padding-block: var(--space-80);
}
.statement-content {
  max-width: 900px;
}

.statement-text {
  margin: var(--space-6) 0 0;

  font-family: var(--font-display);
  font-size: clamp(
    var(--text-3xl),
    4vw,
    var(--text-5xl)
  );
  font-weight: var(--font-weight-bold);
  line-height: var(--leading-snug);
  letter-spacing: var(--tracking-tight);
}

.statement-primary {
  color: var(--color-text);
}

.statement-muted {
  color: var(--color-text-muted);
  margin-left: 0.35em;
}
</style>
