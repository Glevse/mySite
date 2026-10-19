<script setup lang="ts">
const { locale, t, toggle } = useLocale()
</script>

<template>
  <button class="icon-btn lang-toggle" type="button" :aria-label="t('lang.toggle')" :title="t('lang.toggle')" @click="toggle">
    {{ locale === 'en' ? 'RU' : 'EN' }}
  </button>
</template>

<style scoped>
.lang-toggle {
  width: auto;
  min-width: 40px;
  padding: 0 10px;
  font-size: 0.8rem;
  font-weight: 700;
  letter-spacing: 0.05em;
}
</style>
