<template>
  <footer class="footer">
    <div class="container">

      <div class="footer-main">

        <div class="footer-brand">
          <a href="/" class="footer-logo">
            IMI Construction
          </a>

          <p>
            Reliable construction solutions delivered with precision,
            clear communication, and quality workmanship.
          </p>
        </div>

        <nav class="footer-nav" aria-label="Footer navigation">
          <span class="footer-label">Navigation</span>

          <a
            v-for="item in navigation"
            :key="item.id"
            :href="item.href"
          >
            {{ item.label }}
          </a>
        </nav>

      </div>

      <div class="footer-bottom">
        <span>
          © {{ new Date().getFullYear() }} IMI Construction
        </span>

        <a href="#top">
          Back to top ↗
        </a>
      </div>

    </div>
  </footer>
</template>
<script setup lang="ts">
import { siteData } from '~/data/siteData'

const navigation = siteData.navigation
</script>
<style scoped>
.footer {
  padding-block: var(--space-16) var(--space-8);

  border-top: 1px solid var(--color-border);

  background: var(--color-surface);
}

.footer-main {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: var(--space-12);

  padding-bottom: var(--space-16);
}

.footer-brand {
  max-width: 420px;
}

.footer-logo {
  display: inline-block;

  margin-bottom: var(--space-4);

  font-family: var(--font-display);
  font-size: var(--text-2xl);
  font-weight: var(--font-weight-bold);

  color: var(--color-text);
  text-decoration: none;
}

.footer-brand p {
  max-width: 380px;
  margin: 0;

  color: var(--color-text-muted);
  line-height: var(--leading-relaxed);
}

.footer-nav {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: var(--space-3);

  min-width: 160px;
}

.footer-label {
  margin-bottom: var(--space-2);

  font-family: var(--font-decorative);
  font-size: var(--text-xs);
  font-weight: var(--font-weight-bold);
  letter-spacing: var(--tracking-wide);
  text-transform: uppercase;

  color: var(--color-text-muted);
}

.footer-nav a {
  color: var(--color-text);
  text-decoration: none;

  transition:
    color var(--duration-fast) var(--ease-standard),
    transform var(--duration-fast) var(--ease-standard);
}

.footer-nav a:hover {
  color: var(--color-text-muted);
  transform: translateX(3px);
}

.footer-bottom {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--space-6);

  padding-top: var(--space-6);

  border-top: 1px solid var(--color-border);

  color: var(--color-text-muted);
  font-size: var(--text-sm);
}

.footer-bottom a {
  color: inherit;
  text-decoration: none;

  transition: color var(--duration-fast) var(--ease-standard);
}

.footer-bottom a:hover {
  color: var(--color-text);
}

@media (max-width: 768px) {
  .footer-main {
    flex-direction: column;
    gap: var(--space-10);
  }

  .footer-nav {
    min-width: 0;
  }

  .footer-bottom {
    flex-direction: column;
    align-items: flex-start;
  }
}
</style>