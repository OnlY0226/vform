1. yarn install
2. dev:form
# 修改方案
+ [ ] 把 fieldListApi 改成本地远程兼容
+ [x] 把 loadFormTempalte 改成本地远程兼容
+ [x] label双语支持

1. 把 fieldListApi 改成本地远程兼容
   
  - + [x] 将[**loadFieldListFromServer**](src/components/form-designer/index.vue)方法改成了本地传参

2. 把 loadFormTempalte 改成本地远程兼容
  - + [x] 将[**loadFormTemplate**](src/components/form-designer/widget-panel/index.vue) 方法改成了本地远程兼容
  - + [x] 将[**loadFormTemplate**](src/components/form-designer/widget-panel/templatesConfig.js) 添加本地模板

3. label双语支持
  - 属性添加
  - + [x] 添加[**labelZh-editor**](src/components/form-designer/setting-panel/property-editor/labelZh-editor.vue) 组件
  - + [x] 在[**widgetsConfig.js**](src/components/form-designer/widget-panel/widgetsConfig.js) 中为各组件添加options：labelZh，配置组件options
  - + [x] 在[**propertyRegister.js**](src/components/form-designer/setting-panel/propertyRegister.js) 中添加编辑器的组件名称labelZh，注册组件
  - + [x] 在[**form-item-wrapper.vue**](src/components/form-designer/form-widget/field-widget/form-item-wrapper.vue) 将label属性改成中文兼容
  - 改变属性后同步改变新增组件的中文名称
  - +  在[**page/index.vue**](src/page/index.vue) 修改fieldListApi的fieldData数据
  - +  在[**index.vue**](src/components/form-designer/index.vue) 将handleLoadFieldList方法改成本地远程兼容
  - +  在[**name-editor.vue**](src/components/form-designer/setting-panel/property-editor/name-editor.vue) 将updateWidgetNameAndRef、getLabelByFieldName方法改成中文兼容
  - +  在[**designer.js**](src/components/form-designer/designer.js) 将updateSelectedWidgetNameAndRef、copyNewFieldWidget、copyNewContainerWidget、addTabPaneOfTabs方法改成中文兼容

跟踪handlePreview
//console.log(file
