<template>
  <div>
    <el-pagination
        v-if="total > pageSize"
        @size-change="sizeChange"
        @current-change="currentChange"
        type='manual'
        layout=" prev, pager, next, ->, total, sizes"
        :total="total"
        :current-page="current"
    />
  </div>
</template>

<script>
export default {
  name: 'CommonPagination',
  props: {
    total: { required: false, default: 0 },
    pageSize: { required: false, default: 10 },
    current: { required: false, default: 1 }
  },
  methods: {
    search (params) {
      this.$emit('change', params)
    },
    sizeChange (val) {
      this.search({
        pageSize: val,
        current: this.current
      })
    },
    currentChange (val) {
      this.search({
        pageSize: this.pageSize,
        current: val
      })
    }
  }
}
</script>

<style scoped>

</style>
