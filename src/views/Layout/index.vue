<script setup lang="ts">
import editor from '@/views/Editor/index.vue'
import preview from '@/views/Preview/index.vue'

</script>

<template>
  <div class="common-layout">
    <el-container>
      <el-header>Header</el-header>
      <el-main class="main">
        <div class="editor">
          <editor></editor>
        </div>
        <div class="line"></div>
        <div class="preview">
          <preview></preview>
        </div>
      </el-main>
      <el-footer>Footer</el-footer>
    </el-container>
  </div>
</template>

<style lang="scss" scoped>
.common-layout {
  .main {
    display: flex;
    justify-content: space-between;
    height: calc(100vh - 60px - 80px);
    .editor {
      background-color: #e7e4e471;
      width: 49%;
    }
    .line {
      width: 1px;
      height: 100%;
      background-color: #000000;
    }
    .preview {
      background-color: #c7c4c471;
      width: 49%;
    }
  }
}
</style>