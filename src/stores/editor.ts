import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useMarkdownStore = defineStore('markdown', () => {
  const mdContent = ref('')
  
  function updateContent(newContent: string) {
    mdContent.value = newContent
  }

  return {
    mdContent,
    updateContent
  }
})