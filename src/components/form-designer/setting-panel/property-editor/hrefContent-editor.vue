<template>
  <el-form-item :label="i18nt('designer.setting.hrefContent')">
    <el-input type="text" v-model="optionModel.hrefContent"></el-input>
  </el-form-item>
</template>

<script>
  import i18n from "@/utils/i18n"

  export default {
    name: "hrefContent-editor",
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
