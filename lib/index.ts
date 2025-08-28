import { App } from 'vue'
import WorkflowToolbar from '../src/components/Workflow/WorkflowToolbar.vue'
import PublishDialog from '../src/components/Workflow/PublishDialog.vue'

// 导出组件
export { WorkflowToolbar, PublishDialog }

// 为了支持单独导入
export default WorkflowToolbar

// 插件安装函数
export const install = (app: App) => {
  app.component('WorkflowToolbar', WorkflowToolbar)
  app.component('PublishDialog', PublishDialog)
}

// 支持全局安装
const plugin = {
  install
}

export { plugin as Vue3WorkflowEditor }
