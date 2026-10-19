<script setup lang="ts">
const { theme } = useColorTheme()
const { locale, t } = useLocale()

useHead({
  htmlAttrs: {
    lang: locale,
    'data-theme': () => theme.value ?? undefined
  },
  meta: [{ name: 'description', content: () => t('site.description') }]
})
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
