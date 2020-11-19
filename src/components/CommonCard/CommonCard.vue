<template>
  <div class="common-card">
    <el-card>
      <div slot="header">
        <span>{{title ? `>> ${title}` : ''}}</span>
        <el-button @click="back" class="back" type="primary" icon="el-icon-arrow-left" circle></el-button>
      </div>
      <slot></slot>
    </el-card>
  </div>
</template>

<script>
export default {
  name: 'CommonCard',
  props: {
    title: String
  },
  methods: {
    back () {
      this.$router.back()
    }
  }
}
</script>

<style scoped lang="scss">
.common-card{
  width: 100%;
  .back{
    float: right;
    margin-top: -3px;
  }
}
</style>
