<script setup lang="ts">
const { toggle } = useColorTheme()
const { t } = useLocale()
</script>

<template>
  <button class="icon-btn theme-toggle" type="button" :aria-label="t('theme.toggle')" :title="t('theme.toggle')" @click="toggle">
    <!-- Both icons are rendered; CSS shows the right one (works before hydration too) -->
    <svg class="icon-moon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z" />
    </svg>
    <svg class="icon-sun" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
    </svg>
  </button>
</template>

<style>
/* Light: show moon (switch to dark). Dark: show sun (switch to light). */
.theme-toggle .icon-sun {
  display: none;
}

:root[data-theme="dark"] .theme-toggle .icon-sun {
  display: block;
}

:root[data-theme="dark"] .theme-toggle .icon-moon {
  display: none;
}

@media (prefers-color-scheme: dark) {
  :root:not([data-theme="light"]) .theme-toggle .icon-sun {
    display: block;
  }

  :root:not([data-theme="light"]) .theme-toggle .icon-moon {
    display: none;
  }
}
</style>
