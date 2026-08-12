<template>
  <header class="nav-header">
    <div class="nav-header__inner">

      <div class="nav-pill">

        <NuxtLink to="/" class="logo">
          IMI
        </NuxtLink>

        <nav class="navigation" aria-label="Main navigation">
          <ul class="links">
            <li>
              <NuxtLink to="#hero">Home</NuxtLink>
            </li>
            <li>
              <NuxtLink to="#services">Services</NuxtLink>
            </li>
            <li>
              <NuxtLink to="#about">About</NuxtLink>
            </li>
            <li>
              <NuxtLink to="#projects">Projects</NuxtLink>
            </li>
          </ul>
        </nav>

        <div class="cta">
          <NuxtLink to="#estimate">
            Get an estimate
          </NuxtLink>
        </div>

      </div>

    </div>
  </header>
</template>


<script setup lang="ts">
</script>

<style scoped>

/* =========================================================
   HEADER
   ========================================================= */

.nav-header {
  position: sticky;
  top: 0;
  z-index: var(--z-header);
  padding: var(--space-4) var(--page-padding);
}

.nav-header__inner {
  position: relative;

  display: flex;
  justify-content: center;
  align-items: center;

  width: min(100%, var(--container-width));
  margin-inline: auto;
}

/* =========================================================
   INNER PILL
   ========================================================= */

.nav-pill {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--space-4);

  width: 100%;
  max-width: 1000px;
  padding: var(--space-4) var(--space-10);

  border: 1px solid var(--color-border);
  border-radius: var(--radius-full);

  background: var(--color-surface);
  box-shadow: var(--shadow-sm);
}

/* =========================================================
   LOGO
   ========================================================= */

.logo {
  font-family: var(--font-display);
  font-size: var(--text-xl);
  font-weight: var(--font-weight-black);
  line-height: 1;

  color: var(--color-text);
}

/* =========================================================
   NAVIGATION
   ========================================================= */

.navigation {
  display: flex;
  align-items: center;
}

.links {
  display: flex;
  align-items: center;
  gap: var(--space-1);

  margin: 0;
  padding: var(--space-1) var(--space-2);

  list-style: none;

  border: 1px solid var(--color-border);
  border-radius: var(--radius-full);

  background: var(--color-surface-elevated);
}

.links li {
  margin: 0;
  padding: 0;
}

.links a {
  display: inline-flex;
  align-items: center;
  justify-content: center;

  min-height: 36px;
  padding-inline: var(--space-4);

  border-radius: var(--radius-full);

  color: var(--color-text-muted);

  font-family: var(--font-body);
  font-size: var(--text-xs);
  font-weight: var(--font-weight-bold);
  letter-spacing: var(--tracking-wide);
  text-transform: uppercase;

  transition:
    color var(--duration-fast) var(--ease-standard),
    background var(--duration-fast) var(--ease-standard);
}

.links a:hover {
  color: var(--color-text);
  background: var(--color-surface);
}

/* =========================================================
   CTA
   ========================================================= */

.cta a {
  display: inline-flex;
  align-items: center;
  justify-content: center;

  min-height: 36px;
  padding-inline: var(--space-4);

  border: 1px solid var(--color-accent);
  border-radius: var(--radius-full);

  background: var(--color-accent);
  color: var(--color-background);

  font-family: var(--font-body);
  font-size: var(--text-xs);
  font-weight: var(--font-weight-bold);
  letter-spacing: var(--tracking-wide);
  text-transform: uppercase;

  transition:
    background var(--duration-fast) var(--ease-standard),
    color var(--duration-fast) var(--ease-standard),
    transform var(--duration-fast) var(--ease-standard);
}

.cta a:hover {
  background: var(--color-accent-hover);
  color: var(--color-background);
  transform: translateY(-1px);
}

/* =========================================================
   MOBILE
   ========================================================= */

@media (max-width: 800px) {
  .nav-header {
    padding-block: var(--space-3);
  }

  .nav-header__inner {
    justify-content: space-between;
  }

  .nav-pill {
    width: 100%;
    padding: var(--space-2) var(--space-3);
  }

  .navigation {
    display: none;
  }

  .cta a {
    min-height: 34px;
    padding-inline: var(--space-3);
  }
}

/* =========================================================
   ACCESSIBILITY
   ========================================================= */

.logo:focus-visible,
.links a:focus-visible,
.cta a:focus-visible {
  outline: 2px solid var(--color-accent);
  outline-offset: 4px;
}
</style>