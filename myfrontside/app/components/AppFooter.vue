<script setup lang="ts">
const { t } = useLocale()

const email = 'glevse@yandex.com'
const telegram = 'gdenout'
</script>

<template>
  <footer class="app-footer">
    <div class="inner">
      <span class="title">{{ t('footer.contacts') }}</span>
      <ul>
        <li>
          <a :href="`mailto:${email}`">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <rect x="3" y="5" width="18" height="14" rx="2" />
              <path d="m3 7 9 6 9-6" />
            </svg>
            <span class="sr-only">{{ t('footer.email') }}:</span>
            {{ email }}
          </a>
        </li>
        <li>
          <a :href="`https://t.me/${telegram}`" target="_blank" rel="noopener">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <path d="M21 4 3 11l6 2.5M21 4l-3 16-9-6.5M21 4 9 13.5V19l3-3.5" />
            </svg>
            <span class="sr-only">Telegram:</span>
            @{{ telegram }}
          </a>
        </li>
      </ul>
    </div>
  </footer>
</template>

<style scoped>
.app-footer {
  border-top: 1px solid var(--border);
  background: var(--surface);
}

.inner {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 12px 24px;
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px 16px;
}

.title {
  font-size: 0.8rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--text-muted);
}

ul {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 8px 20px;
}

a {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  color: var(--text);
  font-weight: 500;
}

a:hover {
  color: var(--accent);
}

svg {
  width: 18px;
  height: 18px;
  color: var(--accent);
}

.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  overflow: hidden;
  clip: rect(0 0 0 0);
  white-space: nowrap;
}

@media (min-width: 640px) {
  .inner {
    padding: 24px;
  }
}
</style>
