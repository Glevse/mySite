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
      <a
        class="icon-btn"
        href="https://github.com/Glevse"
        target="_blank"
        rel="noopener"
        :aria-label="t('header.github')"
        :title="t('header.github')"
      >
        <svg viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
          <path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" />
        </svg>
      </a>
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
