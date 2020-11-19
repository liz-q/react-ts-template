<!--
@Author: liz-q
@Date: 2020-11-18 10:48:45
@Description: 描述列表
-->
<template>
  <div>
    <div v-for="(item, index) in list" :key="index">
      <el-space
          size="small"
          direction="horizontal"
          align="baseline"
      >
        <div class="desc-item" :style="`width: ${labelWidth}px;text-align: right`">{{item.name}}：</div>
        <div class="desc-item">
          <template v-if="Array.isArray(item.val)">
            <div class="desc-item" v-for="(subItem, subIndex) in item.val" :key="subIndex">
              {{subItem}}
            </div>
          </template>
          <template v-else>
            <div>{{item.val}}</div>
          </template>
        </div>
      </el-space>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Descriptions',
  props: {
    labelWidth: { type: String, default: '120' },
    list: { type: Array }
  }
}
</script>

<style scoped lang="scss">
  .desc-item{
    color: #595959;
    font-size: 14px;
    padding: 6px 0;
  }
</style>
