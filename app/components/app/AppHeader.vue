<template>
  <header class="nav-header">
    <div class="nav-header__inner">

      <div class="nav-pill">

        <NuxtLink to="/" class="logo">
          IMI
        </NuxtLink>

        <!-- DESKTOP NAV -->
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

        <!-- MOBILE MENU BUTTON -->
        <button
          class="menu-button"
          type="button"
          aria-label="Toggle navigation"
          :aria-expanded="isMenuOpen"
          @click="isMenuOpen = !isMenuOpen"
        >
                 <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="800px" height="800px" viewBox="0 0 24 24" version="1.1">
    <title>Menu</title>
    <g id="Page-1" stroke="none" stroke-width="1"  fill-rule="evenodd">
        <g id="Menu">
            <rect id="Rectangle" fill-rule="nonzero" x="0" y="0" width="24" height="24">

</rect>
            <line x1="5" y1="7" x2="19" y2="7" id="Path" stroke="currentColor" stroke-width="2" stroke-linecap="round">

</line>
            <line x1="5" y1="17" x2="19" y2="17" id="Path" stroke="currentColor" stroke-width="2" stroke-linecap="round">

</line>
            <line x1="5" y1="12" x2="19" y2="12" id="Path" stroke="currentColor" stroke-width="2" stroke-linecap="round">

</line>
        </g>
    </g>
</svg>
        </button>

      </div>

      <!-- MOBILE MENU -->
      <nav
        v-if="isMenuOpen"
        class="mobile-menu"
        aria-label="Mobile navigation"
      >
        <NuxtLink to="#hero" @click="isMenuOpen = false">
          Home
        </NuxtLink>

        <NuxtLink to="#services" @click="isMenuOpen = false">
          Services
        </NuxtLink>

        <NuxtLink to="#about" @click="isMenuOpen = false">
          About
        </NuxtLink>

        <NuxtLink to="#projects" @click="isMenuOpen = false">
          Projects
        </NuxtLink>

        <NuxtLink
          to="#estimate"
          class="mobile-menu__cta"
          @click="isMenuOpen = false"
        >
          Get an estimate
        </NuxtLink>
      </nav>

    </div>
  </header>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const isMenuOpen = ref(false)
</script>

<style scoped>

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

.logo {
  font-family: var(--font-display);
  font-size: var(--text-xl);
  font-weight: var(--font-weight-black);
  line-height: 1;

  color: var(--color-text);
}

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
   MOBILE MENU BUTTON
   ========================================================= */

.menu-button {
  display: none;

  width: 40px;
  height: 40px;

  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 5px;

  padding: 0;

  border: 1px solid var(--color-border);
  border-radius: var(--radius-full);

  background: var(--color-surface);

  cursor: pointer;
}
.menu-button svg {
  width: 18px;
  height: 18px;

  fill: none;
  stroke: var(--color-text);
  stroke-width: 1.5;
  stroke-linecap: round;
}


/* =========================================================
   MOBILE MENU
   ========================================================= */

.mobile-menu {
  display: none;
}


/* =========================================================
   MOBILE
   ========================================================= */

@media (max-width: 800px) {

  .nav-header {
    padding-block: var(--space-3);
  }

  .nav-header__inner {
    display: block;
  }

  .nav-pill {
    width: 100%;
    padding: var(--space-3) var(--space-4);
  }

  .logo {
    padding: 0 1rem;
  }
  .menu-button {
    padding: 0 1rem;
  }

  .navigation,
  .cta {
    display: none;
  }

  .menu-button {
    display: flex;
  }

  .mobile-menu {
    display: flex;
    flex-direction: column;
    gap: var(--space-2);

    width: 100%;
    margin-top: var(--space-3);
    padding: var(--space-4);

    border: 1px solid var(--color-border);
    border-radius: var(--radius-lg);

    background: var(--color-surface);
    box-shadow: var(--shadow-md);
  }

  .mobile-menu a {
    display: flex;
    align-items: center;

    min-height: 48px;
    padding-inline: var(--space-4);

    border-radius: var(--radius-md);

    color: var(--color-text);

    font-family: var(--font-body);
    font-size: var(--text-sm);
    font-weight: var(--font-weight-bold);
    letter-spacing: var(--tracking-wide);
    text-transform: uppercase;

    transition:
      background var(--duration-fast) var(--ease-standard),
      color var(--duration-fast) var(--ease-standard);
  }

  .mobile-menu a:hover {
    background: var(--color-surface-elevated);
  }

  .mobile-menu__cta {
    justify-content: center;

    margin-top: var(--space-2);

    background: var(--color-accent);
    color: var(--color-background) !important;
  }

  .mobile-menu__cta:hover {
    background: var(--color-accent-hover) !important;
  }
}


/* =========================================================
   ACCESSIBILITY
   ========================================================= */

.logo:focus-visible,
.links a:focus-visible,
.cta a:focus-visible,
.menu-button:focus-visible,
.mobile-menu a:focus-visible {
  outline: 2px solid var(--color-accent);
  outline-offset: 4px;
}

</style>