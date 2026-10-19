<script setup lang="ts">
import { projects } from '~/data/projects'

const { t, tr } = useLocale()

const open = defineModel<boolean>('open', { required: true })

function onKeydown(e: KeyboardEvent) {
  if (e.key === 'Escape') open.value = false
}

onMounted(() => window.addEventListener('keydown', onKeydown))
onBeforeUnmount(() => window.removeEventListener('keydown', onKeydown))
</script>

<template>
  <div class="overlay" :class="{ visible: open }" aria-hidden="true" @click="open = false" />
  <aside id="projects-sidebar" class="sidebar" :class="{ open }" :inert="!open" :aria-label="t('sidebar.title')">
    <div class="sidebar-head">
      <span class="title">{{ t('sidebar.title') }}</span>
      <button class="icon-btn" type="button" :aria-label="t('sidebar.close')" @click="open = false">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">
          <line x1="6" y1="6" x2="18" y2="18" />
          <line x1="18" y1="6" x2="6" y2="18" />
        </svg>
      </button>
    </div>
    <nav>
      <ul>
        <li>
          <NuxtLink to="/" class="item" exact-active-class="active">{{ t('sidebar.all') }}</NuxtLink>
        </li>
        <li v-for="p in projects" :key="p.slug">
          <NuxtLink :to="`/projects/${p.slug}`" class="item" active-class="active">
            <span class="bullet" aria-hidden="true" />
            {{ tr(p.title) }}
          </NuxtLink>
        </li>
      </ul>
    </nav>
  </aside>
</template>

<style scoped>
.overlay {
  position: fixed;
  inset: 0;
  z-index: 40;
  background: var(--overlay);
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.25s ease;
}

.overlay.visible {
  opacity: 1;
  pointer-events: auto;
}

.sidebar {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  z-index: 50;
  width: min(300px, 85vw);
  display: flex;
  flex-direction: column;
  background: var(--surface);
  border-right: 1px solid var(--border);
  box-shadow: var(--shadow);
  transform: translateX(-100%);
  transition: transform 0.28s ease;
}

.sidebar.open {
  transform: translateX(0);
}

.sidebar-head {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 64px;
  padding: 0 16px;
  border-bottom: 1px solid var(--border);
}

.title {
  font-size: 0.8rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--text-muted);
}

nav {
  flex: 1;
  overflow-y: auto;
  padding: 12px;
}

ul {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.item {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px 12px;
  border-radius: 10px;
  color: var(--text);
  font-weight: 500;
  transition: background-color 0.15s ease, color 0.15s ease;
}

.item:hover {
  background: var(--surface-2);
  color: var(--accent);
}

.item.active {
  background: var(--accent-soft);
  color: var(--accent-strong);
}

.bullet {
  width: 8px;
  height: 8px;
  border-radius: 2px;
  background: var(--accent);
  flex-shrink: 0;
}
</style>
