<script setup lang="ts">
import { findProject } from '~/data/projects'
import { projectContentHtml } from '~/data/projectContent'

const route = useRoute()
const { locale, t, tr } = useLocale()
const project = computed(() => findProject(String(route.params.slug)))

if (!project.value) {
  throw createError({ statusCode: 404, statusMessage: 'Project not found' })
}

const contentHtml = computed(() => projectContentHtml(String(route.params.slug), locale.value))

useHead({ title: () => `${project.value ? tr(project.value.title) : ''} · hkial` })
</script>

<template>
  <article v-if="project" class="project">
    <NuxtLink to="/" class="back">{{ t('project.back') }}</NuxtLink>
    <h1>{{ tr(project.title) }}</h1>
    <div class="tags" :aria-label="t('project.stack')">
      <span v-for="(tag, i) in project.tags" :key="i" class="tag">{{ tr(tag) }}</span>
    </div>
    <p class="desc">{{ tr(project.description) }}</p>
    <!-- Rich description from app/content/projects/<slug>.<lang>.md -->
    <div v-if="contentHtml" class="prose" v-html="contentHtml" />
    <a v-if="project.url" :href="project.url" target="_blank" rel="noopener" class="link">{{ t('project.open') }}</a>
  </article>
</template>

<style scoped>
.project {
  max-width: 720px;
}

.back {
  display: inline-block;
  margin-bottom: 20px;
  color: var(--text-muted);
  font-weight: 500;
}

.back:hover {
  color: var(--accent);
}

h1 {
  margin: 0 0 12px;
  font-size: clamp(1.8rem, 4vw, 2.6rem);
  letter-spacing: -0.03em;
}

.tags {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-bottom: 20px;
}

.desc {
  color: var(--text-muted);
  font-size: 1.1rem;
}

.link {
  display: inline-block;
  margin-top: 12px;
  padding: 10px 18px;
  border-radius: 10px;
  background: var(--accent);
  color: var(--accent-contrast);
  font-weight: 600;
}

.link:hover {
  background: var(--accent-strong);
  color: var(--accent-contrast);
}

/* ---------- Markdown content ---------- */
.prose {
  margin-top: 28px;
  padding-top: 28px;
  border-top: 1px solid var(--border);
  font-size: 1.02rem;
  overflow-wrap: anywhere;
}

.prose > :deep(:first-child) {
  margin-top: 0;
}

.prose :deep(h2),
.prose :deep(h3),
.prose :deep(h4) {
  margin: 1.8em 0 0.6em;
  line-height: 1.25;
  letter-spacing: -0.02em;
}

.prose :deep(h2) {
  font-size: 1.5rem;
}

.prose :deep(h3) {
  font-size: 1.2rem;
}

.prose :deep(p),
.prose :deep(ul),
.prose :deep(ol),
.prose :deep(blockquote),
.prose :deep(pre),
.prose :deep(table),
.prose :deep(figure) {
  margin: 0 0 1em;
}

.prose :deep(ul),
.prose :deep(ol) {
  padding-left: 1.4em;
}

.prose :deep(li + li) {
  margin-top: 0.3em;
}

.prose :deep(li::marker) {
  color: var(--accent);
}

.prose :deep(a) {
  text-decoration: underline;
  text-underline-offset: 3px;
}

.prose :deep(img),
.prose :deep(video) {
  display: block;
  max-width: 100%;
  height: auto;
  margin: 1.2em auto;
  border: 1px solid var(--border);
  border-radius: 12px;
}

.prose :deep(iframe) {
  display: block;
  width: 100%;
  aspect-ratio: 16 / 9;
  height: auto;
  margin: 1.2em 0;
  border: 0;
  border-radius: 12px;
}

.prose :deep(figcaption) {
  margin-top: -0.6em;
  color: var(--text-muted);
  font-size: 0.9rem;
  text-align: center;
}

.prose :deep(blockquote) {
  padding: 10px 16px;
  border-left: 4px solid var(--accent);
  border-radius: 0 10px 10px 0;
  background: var(--accent-soft);
}

.prose :deep(blockquote > :last-child) {
  margin-bottom: 0;
}

.prose :deep(code) {
  padding: 0.15em 0.4em;
  border-radius: 6px;
  background: var(--surface-2);
  font-family: ui-monospace, "Cascadia Code", Consolas, monospace;
  font-size: 0.9em;
}

.prose :deep(pre) {
  padding: 14px 16px;
  border: 1px solid var(--border);
  border-radius: 12px;
  background: var(--surface-2);
  overflow-x: auto;
}

.prose :deep(pre code) {
  padding: 0;
  background: none;
}

.prose :deep(table) {
  display: block;
  max-width: 100%;
  overflow-x: auto;
  border-collapse: collapse;
}

.prose :deep(th),
.prose :deep(td) {
  padding: 8px 12px;
  border: 1px solid var(--border);
  text-align: left;
}

.prose :deep(th) {
  background: var(--surface-2);
}

.prose :deep(hr) {
  margin: 2em 0;
  border: 0;
  border-top: 1px solid var(--border);
}
</style>
