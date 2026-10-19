<script setup lang="ts">
import type { Project } from '~/data/projects'

const props = defineProps<{ project: Project }>()

const { tr } = useLocale()

const initials = computed(() => tr(props.project.title).slice(0, 2).toUpperCase())
</script>

<template>
  <NuxtLink :to="`/projects/${project.slug}`" class="tile">
    <div class="badge" aria-hidden="true">{{ initials }}</div>
    <h3>{{ tr(project.title) }}</h3>
    <p>{{ tr(project.description) }}</p>
    <div class="tags">
      <span v-for="(tag, i) in project.tags" :key="i" class="tag">{{ tr(tag) }}</span>
    </div>
  </NuxtLink>
</template>

<style scoped>
.tile {
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 10px;
  /* Square at minimum; grows taller when the text needs more room */
  aspect-ratio: 1 / 1;
  padding: 22px;
  border: 1px solid var(--border);
  border-radius: 18px;
  background: var(--surface);
  color: var(--text);
  box-shadow: var(--shadow);
  overflow: clip;
  transition: transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease;
}

/* Decorative circle: fixed size and tucked into the bottom-right corner,
   so it never grows under the text on wide (mobile) tiles. */
.tile::after {
  content: "";
  position: absolute;
  right: -60px;
  bottom: -60px;
  z-index: 0;
  width: 150px;
  aspect-ratio: 1;
  border-radius: 50%;
  background: var(--accent-soft);
  opacity: 0.7;
  pointer-events: none;
  transition: transform 0.3s ease;
}

.tile:hover {
  color: var(--text);
  transform: translateY(-4px);
  border-color: var(--accent);
  box-shadow: var(--shadow-hover);
}

.tile > * {
  position: relative;
  z-index: 1;
}

.tile:hover::after {
  transform: scale(1.15);
}

.badge {
  display: grid;
  place-items: center;
  width: 48px;
  height: 48px;
  border-radius: 12px;
  background: var(--accent);
  color: var(--accent-contrast);
  font-weight: 800;
  letter-spacing: 0.02em;
}

h3 {
  margin: 6px 0 0;
  font-size: 1.2rem;
  letter-spacing: -0.01em;
}

p {
  margin: 0;
  color: var(--text-muted);
  font-size: 0.95rem;
}

.tags {
  margin-top: auto;
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
}

@media (max-width: 480px) {
  .tile {
    aspect-ratio: auto;
    min-height: 200px;
  }
}
</style>
