<script setup lang="ts">
import { useMarkdownStore } from '@/stores/editor'

const store = useMarkdownStore()
</script>

<template>
  <div class="preview-wrapper">
    {{ store.mdContent }}
  </div>
</template>

<style scoped lang="scss">
.preview-wrapper {
  height: 100%;
  padding: 15px;
  border: 1px solid #dcdfe6;
  border-radius: 4px;
}
</style>