[toc] 
# Variant Form
#### 一款高效的Vue低代码表单，可视化设计，一键生成源码，享受更多摸鱼时间。

![image](https://ks3-cn-beijing.ksyuncs.com/vform-static/img/vform_demo.gif)

<br/>

### 立即体验
[在线Demo](http://120.92.142.115/)
[Pro Demo](http://120.92.142.115/pro)


### Vue 3正式版已发布
[立即进入](https://gitee.com/vdpadmin/variant-form3-vite)


### 友情链接
[Fantastic-admin](https://hooray.gitee.io/fantastic-admin/) —— 一款开箱即用的 Vue 中后台管理系统框架（支持Vue2/Vue3）

[REBUILD](https://getrebuild.com/) —— 高度可定制化的企业管理系统

<br/>

### 功能一览
```
> 拖拽式可视化表单设计；
> 支持PC、Pad、H5三种布局；
> 支持运行时动态加载表单；
> 支持表单复杂交互控制；
> 支持自定义CSS样式；
> 支持自定义校验逻辑；
> 支持国际化多语言；
> 兼容IE 11浏览器；
> 可导出Vue组件、HTML源码；
> 可导出Vue的SFC单文件组件；
> 支持开发自定义组件；
> 支持响应式自适应布局；
> 支持VS Code插件；
> 更多功能等你探究...；
```

### 安装依赖
```
npm install --registry=https://registry.npm.taobao.org
```

### 开发调试
```
npm run serve
```

### 生产打包
```
npm run build
```

### 表单设计器 + 表单渲染器打包
```
npm run lib
```

### 表单渲染器打包
```
npm run lib-render
```

### 浏览器兼容性
```Chrome（及同内核的浏览器如QQ浏览器、360浏览器等等），Edge, Firefox，Safari，IE 11```

<br/>

### 跟Vue项目集成

<br/>

#### 1. 安装包
  ```bash
  npm i vform-builds
  ```
或
  ```bash
  yarn add vform-builds
  ```

<br/>

#### 2. 引入并全局注册VForm组件
```javascript
import Vue from 'vue'
import App from './App.vue'

import ElementUI from 'element-ui'  //引入element-ui库
import VForm from 'vform-builds'  //引入VForm库

import 'element-ui/lib/theme-chalk/index.css'  //引入element-ui样式
import 'vform-builds/dist/VFormDesigner.css'  //引入VForm样式

Vue.config.productionTip = false

Vue.use(ElementUI)  //全局注册element-ui
Vue.use(VForm)  //全局注册VForm(同时注册了v-form-designer和v-form-render组件)

new Vue({
  render: h => h(App),
}).$mount('#app')
```

<br/>

#### 3. 在Vue模板中使用表单设计器组件
```html
<template>
  <v-form-designer></v-form-designer>
</template>

<script>
  export default {
    data() {
      return {
      }
    }
  }
</script>

<style lang="scss">
body {
  margin: 0;  /* 如果页面出现垂直滚动条，则加入此行CSS以消除之 */
}
</style>
```

<br/>

#### 4. 在Vue模板中使用表单渲染器组件
```html
<template>
  <div>
    <v-form-render :form-json="formJson" :form-data="formData" :option-data="optionData" ref="vFormRef">
    </v-form-render>
    <el-button type="primary" @click="submitForm">Submit</el-button>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        formJson: {"widgetList":[],"formConfig":{"labelWidth":80,"labelPosition":"left","size":"","labelAlign":"label-left-align","cssCode":"","customClass":"","functions":"","layoutType":"PC","onFormCreated":"","onFormMounted":"","onFormDataChange":""}},
        formData: {},
        optionData: {}
      }
    },
    methods: {
      submitForm() {
        this.$refs.vFormRef.getFormData().then(formData => {
          // Form Validation OK
          alert( JSON.stringify(formData) )
        }).catch(error => {
          // Form Validation failed
          this.$message.error(error)
        })
      }
    }
  }
</script>
```

<br/>

### 资源链接
<hr>

文档官网：<a href="https://www.vform666.com/" target="_blank">https://www.vform666.com/</a>

在线演示：<a href="http://120.92.142.115/" target="_blank">http://120.92.142.115/</a>

Gitee仓库：<a href="https://gitee.com/vdpadmin/variant-form" target="_blank">https://gitee.com/vdpadmin/variant-form</a>

Github仓库：<a href="https://github.com/vform666/variant-form" target="_blank">https://github.com/vform666/variant-form</a>

VS Code插件：<a href="https://www.vform666.com/pages/plugin/" target="_blank">https://www.vform666.com/pages/plugin/</a>

更新日志：<a href="https://www.vform666.com/pages/changelog/" target="_blank">https://www.vform666.com/pages/changelog/</a>

订阅Pro版：<a href="https://www.vform666.com/pages/pro/" target="_blank">https://www.vform666.com/pages/pro/</a>

技术交流群：微信搜索“vformAdmin”，或者扫如下二维码加群

![image](https://ks3-cn-beijing.ksyuncs.com/vform-static/img/vx-qrcode-242.png)

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
