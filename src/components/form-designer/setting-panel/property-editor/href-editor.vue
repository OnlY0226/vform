<template>
  <el-form-item>
    <span slot="label">{{i18nt('designer.setting.href')}}
      <el-tooltip effect="light" :content="i18nt('designer.setting.hrefTip')">
        <i class="el-icon-info"></i></el-tooltip>
    </span>
    <el-input type="text" v-model="optionModel.href"></el-input>
  </el-form-item>
</template>

<script>
  import i18n from "@/utils/i18n"

  export default {
    name: "href-editor",
    mixins: [i18n],
    props: {
      designer: Object,
      selectedWidget: Object,
      optionModel: Object,
    },

  }
</script>

<style scoped>

</style>
