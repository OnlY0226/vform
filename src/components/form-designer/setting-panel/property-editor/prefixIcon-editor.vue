<template>
  <el-form-item :label="i18nt('designer.setting.prefixIcon')">
    <el-select v-model="optionModel.prefixIcon" filterable allow-create clearable
               default-first-option>
      <el-option v-for="(item, idx) in defaultIconClass" :key="idx" :label="item" :value="item"></el-option>
    </el-select>
  </el-form-item>
</template>

<script>
  import i18n from "@/utils/i18n";

  export default {
    name: "prefixIcon-editor",
    mixins: [i18n],
    props: {
      designer: Object,
      selectedWidget: Object,
      optionModel: Object,
    },
    data() {
      return {
        defaultIconClass: ['el-icon-search']
      }
    }
  }
</script>

<style scoped>

</style>
