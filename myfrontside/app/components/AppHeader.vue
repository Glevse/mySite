<script setup lang="ts">
defineProps<{ sidebarOpen: boolean }>()
defineEmits<{ 'toggle-sidebar': [] }>()

const { t } = useLocale()
</script>

<template>
  <header class="app-header">
    <div class="left">
      <button
        class="icon-btn"
        type="button"
        :aria-expanded="sidebarOpen"
        aria-controls="projects-sidebar"
        :aria-label="t('sidebar.toggle')"
        @click="$emit('toggle-sidebar')"
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">
          <line x1="4" y1="7" x2="20" y2="7" />
          <line x1="4" y1="12" x2="20" y2="12" />
          <line x1="4" y1="17" x2="20" y2="17" />
        </svg>
      </button>
      <NuxtLink to="/" class="brand">
        <span class="dot" aria-hidden="true" />
        hkial
      </NuxtLink>
    </div>
    <div class="right">
      <LanguageToggle />
      <ThemeToggle />
    </div>
  </header>
</template>

<style scoped>
.app-header {
  position: sticky;
  top: 0;
  z-index: 30;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 64px;
  padding: 0 16px;
  background: color-mix(in srgb, var(--surface) 85%, transparent);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid var(--border);
}

.right {
  display: flex;
  align-items: center;
  gap: 8px;
}

.left {
  display: flex;
  align-items: center;
  gap: 14px;
}

.brand {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  font-size: 1.35rem;
  font-weight: 800;
  letter-spacing: -0.02em;
  color: var(--text);
}

.brand:hover {
  color: var(--accent);
}

.dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: var(--accent);
  box-shadow: 0 0 0 4px var(--accent-soft);
}

@media (min-width: 640px) {
  .app-header {
    padding: 0 24px;
  }
}
</style>
