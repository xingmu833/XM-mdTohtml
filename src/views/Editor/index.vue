<script setup lang="ts">
  import { useMarkdownStore } from '@/stores/editor'

  const store = useMarkdownStore()

  // 监听输入事件
  const handleInput = (e: Event) => {
    const target = e.target as HTMLTextAreaElement
    store.updateContent(target.value)
  }
</script>

<template>
  <div class="editor-wrapper">
    <textarea
      class="md-editor"
      v-model="store.mdContent"
      @input="handleInput"
      placeholder="请输入 Markdown 内容..."
    ></textarea>
  </div>
</template>

<style scoped lang="scss">
.editor-wrapper {
  height: 100%;
  padding: 10px;
  box-sizing: border-box;
  
  .md-editor {
    width: 100%;
    height: 100%;
    padding: 1px;
    border: 1px solid #dcdfe6;
    border-radius: 4px;
    outline: none;
    font-family: "Consolas", monospace;
    font-size: 14px;
    line-height: 1.6;
    resize: none;
    
    &:focus {
      border-color: #409eff;
    }
  }
}
</style>