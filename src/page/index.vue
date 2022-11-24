<template>
  <div class="container">
    <!-- <ul>
      <li :class="['workflowContainer', { isActive: item.id === curWorkflow.id }]"
          @click="handleSelect(item)"
          v-for="(item,index) in workflowProcessList" :key="index">
          {{item.name}}
      </li>
    </ul> -->
    <!-- <el-tabs v-model="activeName" @tab-click="handleTab"> -->
      <!-- <el-tab-pane label="表格设计" name="design"> -->
        <VFormDesigner ref="vfDesignerRef" :designer-config="designerConfig" :fieldListApi="fieldListApi">
          <template #customToolButtons>
            <el-button type="text" @click="printFormJson">测试按钮</el-button>
          </template>
        </VFormDesigner>
      <!-- </el-tab-pane>
      <el-tab-pane label="表格渲染" name="render">
        <VFormRender :form-json="formJson" :form-data="formData" :option-data="optionData" ref="vFormRef"></VFormRender>
        <el-button type="primary" @click="submitForm">Submit</el-button>
        <el-button type="primary" @click="setFormDisabled">Disable Form</el-button>
        <el-button type="primary" @click="setFormEnabled">Enable Form</el-button>
        <el-button type="primary" @click="setForm">set Form</el-button>
        <el-button type="primary" @click="resetForm">reset Form</el-button>
        
      </el-tab-pane> -->
    <!-- </el-tabs> -->
  </div>
</template>

<script>
import VFormDesigner from '../components/form-designer/index.vue'
import VFormRender from '../components/form-render/index.vue'
import demoJson from './costModelApproval'

export default {
  name: 'App',
  components: {
    VFormDesigner, VFormRender
  },
  data() {
    return {
      designerConfig: {
        languageMenu: false,  //是否显示语言切换菜单
        externalLink: false,  //是否显示GitHub、文档等外部链接
        formTemplates: false,  //是否显示表单模板
        eventCollapse: true,  //是否显示组件事件属性折叠面板
        widgetNameReadonly: false,  //禁止修改组件名称

        clearDesignerButton: true,  //是否显示清空设计器按钮
        previewFormButton: true,  //是否显示预览表单按钮
        importJsonButton: true,  //是否显示导入JSON按钮
        exportJsonButton: true,  //是否显示导出JSON器按钮
        exportCodeButton: false,  //是否显示导出代码按钮
        generateSFCButton: false,  //是否显示生成SFC按钮
        toolbarMaxWidth: 400,  //设计器工具按钮栏最大宽度（单位像素）
        toolbarMinWidth: 100,  //设计器工具按钮栏最小宽度（单位像素）
        presetCssCode: '',  //设计器预设CSS样式代码
        resetFormJson: false,  //是否在设计器初始化时将表单内容重置为空
      },
      workflowProcessList: [],
      curWorkflow: {},
      activeName: 'design',
      formJson: demoJson,
      formData: {},
      optionData: {},
      fieldListApi: {
        fieldData: [
          { name: 'caseId', label: 'Case Id', labelZh: '案例ID'},
          { name: 'prospectName', label: 'Prospect Name', labelZh: '潛在客戶名稱'},
          { name: 'country', label: 'Country', labelZh: '國家'},
          { name: 'user_approver_name', label: 'Approver', labelZh: '審批人'},
          { name: 'user_copy_personnel_name', label: 'Copy Personal', labelZh: '複製人員'},
          { name: 'description', label: 'Description', labelZh: '描述'},
          { name: 'excelCalcFile', label: 'Excel Calc File', labelZh: 'Excel 計算文件'},
          { name: 'supplementaryFiles', label: 'Supplementary Files', labelZh: '補充文件'}
        ]
      }
    }
  },
  methods: {
    printFormJson() {
      console.log( this.$refs.vfDesignerRef.getFormJson() )
    },
    async workflowProcessListGet() {
      const res = await window.axios.post('/api/docpal/workflow/process/list')
      this.workflowProcessList = [...res]
    },
    handleSelect (item) {
      if (item.id === this.curWorkflow.id) return
      this.curWorkflow = item
    },
    handleTab () {

    },
    submitForm () {
      this.$refs['vFormRef'].getFormData().then(formData => {
        // Form Validation OK
        console.log(formData)
      }).catch(error => {
        // Form Validation failed
        ElMessage.error(error.msg)
      })
    },
    setFormDisabled () {
      this.$refs['vFormRef'].disableForm()
    },

    setFormEnabled () {
      this.$refs['vFormRef'].enableForm()
    },
    setForm () {
      this.$refs['vFormRef'].setFormData({
        description: "Description",
        caseId: "caseId",
        country: "CN",
        prospectName: "Administrator",
        user_approver_name: "Administrator",
        user_copy_personnel_name: "ikki_cheng",
        excelCalcFile: [
          {
            id: "f0a2cb30-bec8-11ec-9811-0242ac12000b",
            name: "2022-02-18 16-16-45 的屏幕截图.png"
          }
        ]
      })
    },
    resetForm () {
      this.$refs['vFormRef'].resetForm()
    }
  },
  mounted () {
    this.workflowProcessListGet()
  },
}
</script>

<style scoped lang="scss">
::v-deep .el-tab-pane {
  height: 100%;
}
.container {
  height: 100%;
  overflow: hidden;
  display: flex;
}
.workflowContainer {
  padding: 0.5rem;
  cursor: pointer;
}
.isActive {
  background: #17B2C0;
}
ul {
  border-right: 1px solid #ddd;
  margin: unset;
  padding: 0 1rem ;
  list-style-type: none
}
::v-deep .el-tabs {
  width: 100%;
  height: 100%;
}
</style>
