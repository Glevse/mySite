<script setup lang="ts">
import { projects } from '~/data/projects'

const { t } = useLocale()

useHead({ title: 'hkial' })
</script>

<template>
  <section class="hero">
    <h1>{{ t('home.greeting') }} <span class="accent">hkial</span></h1>
    <p>{{ t('home.subtitle') }}</p>
  </section>

  <section class="grid" :aria-label="t('sidebar.title')">
    <ProjectTile v-for="p in projects" :key="p.slug" :project="p" />
  </section>
</template>

<style scoped>
.hero {
  margin-bottom: 36px;
}

h1 {
  margin: 0 0 8px;
  font-size: clamp(2rem, 5vw, 3rem);
  line-height: 1.1;
  letter-spacing: -0.03em;
}

.accent {
  color: var(--accent);
}

.hero p {
  margin: 0;
  color: var(--text-muted);
  font-size: 1.1rem;
}

.grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(min(100%, 270px), 1fr));
  gap: 20px;
}
</style>
