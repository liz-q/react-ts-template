<template>
  <div>
    <el-form-item v-for="item in formConfig" :label="item.label" :prop="item.prop" :key="item.prop">
      <el-input
          v-if="item.type === 'input'"
          v-model="form[item.prop]"
          :placeholder="item.placeholder"
      ></el-input>
      <el-input
          v-if="item.type === 'textarea'"
          type="textarea"
          v-model="form[item.prop]"
          :placeholder="item.placeholder"
      ></el-input>
    </el-form-item>
  </div>
</template>

<script>
export default {
  name: 'FormItemCreator',
  props: {
    formConfig: { type: Array, required: true },
    form: { type: Object, required: true }
  }
}
</script>

<style scoped>

</style>
