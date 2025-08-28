# Vue3 Workflow Editor

一个基于Vue3的工作流编辑器工具栏组件，提供缩放控制、保存、运行、重置和发布等功能。

## 特性

- ✅ Vue 3 + TypeScript 支持
- ✅ 响应式设计
- ✅ Tailwind CSS 样式
- ✅ Font Awesome 图标
- ✅ 完整的事件系统
- ✅ ES模块和UMD格式支持

## 安装

```bash
npm install vue3-workflow-editor
```

## 使用方法

### 作为Vue插件使用

```javascript
import { createApp } from 'vue'
import { Vue3WorkflowEditor } from 'vue3-workflow-editor'
import 'vue3-workflow-editor/dist/vue3-workflow-editor.css'

const app = createApp(App)
app.use(Vue3WorkflowEditor)
```

### 单独导入组件

```javascript
import { WorkflowToolbar } from 'vue3-workflow-editor'
import 'vue3-workflow-editor/dist/vue3-workflow-editor.css'

export default {
  components: {
    WorkflowToolbar
  }
}
```

### 在模板中使用

```vue
<template>
  <WorkflowToolbar 
    :scale="scale"
    @zoom-in="handleZoomIn"
    @zoom-out="handleZoomOut"
    @reset-zoom="handleResetZoom"
    @save="handleSave"
    @run="handleRun"
    @reset="handleReset"
    @publish="handlePublish"
  />
</template>

<script setup>
import { ref } from 'vue'

const scale = ref(1.0)

const handleZoomIn = () => {
  scale.value = Math.min(scale.value + 0.1, 3.0)
}

const handleZoomOut = () => {
  scale.value = Math.max(scale.value - 0.1, 0.1)
}

const handleResetZoom = () => {
  scale.value = 1.0
}

const handleSave = () => {
  console.log('保存工作流')
}

const handleRun = (data) => {
  console.log('运行工作流', data)
}

const handleReset = () => {
  console.log('重置工作流')
}

const handlePublish = (data) => {
  console.log('发布工作流', data)
}
</script>
```

### CDN 使用

```html
<!DOCTYPE html>
<html>
<head>
  <script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>
  <link rel="stylesheet" href="https://unpkg.com/vue3-workflow-editor/dist/vue3-workflow-editor.css">
</head>
<body>
  <div id="app">
    <workflow-toolbar 
      :scale="scale"
      @zoom-in="handleZoomIn"
      @zoom-out="handleZoomOut"
      @reset-zoom="handleResetZoom"
      @save="handleSave"
      @run="handleRun"
      @reset="handleReset"
      @publish="handlePublish"
    ></workflow-toolbar>
  </div>
  
  <script src="https://unpkg.com/vue3-workflow-editor/dist/vue3-workflow-editor.umd.js"></script>
  <script>
    const { createApp, ref } = Vue;
    
    createApp({
      setup() {
        const scale = ref(1.0);
        
        const handleZoomIn = () => {
          scale.value = Math.min(scale.value + 0.1, 3.0);
        };
        
        // ... 其他事件处理函数
        
        return {
          scale,
          handleZoomIn,
          // ... 其他方法
        };
      }
    })
    .component('WorkflowToolbar', Vue3WorkflowEditor.WorkflowToolbar)
    .mount('#app');
  </script>
</body>
</html>
```

## Props

| 属性名 | 类型 | 必填 | 默认值 | 说明 |
|--------|------|------|--------|------|
| scale | number | 是 | - | 当前缩放比例 |

## Events

| 事件名 | 参数 | 说明 |
|--------|------|------|
| zoom-in | - | 放大缩放 |
| zoom-out | - | 缩小缩放 |
| reset-zoom | - | 重置缩放 |
| save | - | 保存工作流 |
| run | { timestamp, source } | 运行工作流 |
| reset | - | 重置工作流 |
| publish | { timestamp, source } | 发布工作流 |

## 依赖

- Vue 3.x
- Tailwind CSS (用于样式)
- Font Awesome (用于图标)

## 开发

```bash
# 克隆项目
git clone https://github.com/TECNB/vue-workflow-editor.git

# 安装依赖
npm install

# 开发模式
npm run dev

# 构建库
npm run build:lib

# 预览
npm run preview
```

## 许可证

MIT

## 更新日志

### 1.0.0
- 初始版本
- 基础工具栏功能
- 缩放控制
- 事件系统
