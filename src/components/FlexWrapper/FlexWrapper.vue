<template>
  <div class="flex-wrapper">
    <slot></slot>
  </div>
</template>

<script>
// 提供一个流式布局
export default {
  name: 'FlexWrapper'
}
</script>

<style lang="scss">
  .flex-wrapper {
    display: flex;
    flex-wrap: wrap;
    padding-right: 10px;
    padding-bottom: 10px;

    > div {
      /*border: 1px solid #dddddd;*/
      box-sizing: border-box;
      text-align: left;
      margin-right: 10px;
      margin-bottom: 10px;
    }
  }
</style>
