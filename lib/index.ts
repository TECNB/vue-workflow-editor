import { App } from 'vue'
import WorkflowToolbar from '../src/components/Workflow/WorkflowToolbar.vue'
import PublishDialog from '../src/components/Workflow/PublishDialog.vue'
import PropertyEditor from '../src/components/Workflow/PropertyEditor.vue'

// PropertyEditor 的依赖组件
import IOEditor from '../src/components/Workflow/NodeProperties/IOEditor.vue'
import LLMProperties from '../src/components/Workflow/NodeProperties/LLMProperties.vue'
import KnowledgeProperties from '../src/components/Workflow/NodeProperties/KnowledgeProperties.vue'
import ConditionalProperties from '../src/components/Workflow/NodeProperties/ConditionalProperties.vue'
import StartProperties from '../src/components/Workflow/NodeProperties/StartProperties.vue'
import OutputProperties from '../src/components/Workflow/NodeProperties/OutputProperties.vue'
import SearchProperties from '../src/components/Workflow/NodeProperties/SearchProperties.vue'
import LLMPromptEditor from '../src/components/Workflow/NodeProperties/LLMPromptEditor.vue'
import VariableSuggestions from '../src/components/Workflow/NodeProperties/VariableSuggestions.vue'

// 导出主要组件
export { 
  WorkflowToolbar, 
  PublishDialog, 
  PropertyEditor 
}

// 导出属性编辑器子组件
export {
  IOEditor,
  LLMProperties,
  KnowledgeProperties,
  ConditionalProperties,
  StartProperties,
  OutputProperties,
  SearchProperties,
  LLMPromptEditor,
  VariableSuggestions
}

// 为了支持单独导入
export default WorkflowToolbar

// 插件安装函数
export const install = (app: App) => {
  app.component('WorkflowToolbar', WorkflowToolbar)
  app.component('PublishDialog', PublishDialog)
  app.component('PropertyEditor', PropertyEditor)
  
  // 注册属性编辑器子组件
  app.component('IOEditor', IOEditor)
  app.component('LLMProperties', LLMProperties)
  app.component('KnowledgeProperties', KnowledgeProperties)
  app.component('ConditionalProperties', ConditionalProperties)
  app.component('StartProperties', StartProperties)
  app.component('OutputProperties', OutputProperties)
  app.component('SearchProperties', SearchProperties)
  app.component('LLMPromptEditor', LLMPromptEditor)
  app.component('VariableSuggestions', VariableSuggestions)
}

// 支持全局安装
const plugin = {
  install
}

export { plugin as Vue3WorkflowEditor }
