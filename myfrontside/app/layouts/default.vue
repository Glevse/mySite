<script setup lang="ts">
const sidebarOpen = ref(false)
const route = useRoute()

watch(() => route.fullPath, () => {
  sidebarOpen.value = false
})
</script>

<template>
  <div class="layout">
    <AppHeader :sidebar-open="sidebarOpen" @toggle-sidebar="sidebarOpen = !sidebarOpen" />
    <AppSidebar v-model:open="sidebarOpen" />
    <main class="content">
      <slot />
    </main>
    <AppFooter />
  </div>
</template>

<style scoped>
.layout {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.content {
  flex: 1;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 32px 16px 64px;
}

@media (min-width: 640px) {
  .content {
    padding: 48px 24px 80px;
  }
}
</style>
