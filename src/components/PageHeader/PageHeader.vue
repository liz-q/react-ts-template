<template>
  <div class="page-header">
    <div class="header">
      <span style="font-weight: bold;font-size: 16px;">{{title}}</span>
      <el-button
          @click="back"
          class="back"
          type="primary"
          icon="el-icon-arrow-left"
          circle
      />
    </div>
    <div class="footer" v-if="tabConfig.length > 0">
      <el-tabs
          tab-position="bottom"
          @tab-click="handleClick"
          :value="activeTab"
      >
        <el-tab-pane
            v-for="item in tabConfig"
            :label="item.label"
            :name="item.key"
            :key="item.key"
        />
      </el-tabs>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PageHeader',
  props: {
    title: { type: String },
    tabConfig: { type: Array },
    handleTabChange: { type: Function },
    activeTab: String
  },
  methods: {
    back () {
      this.$router.back()
    },
    handleClick ({ name, label }) {
      this.handleTabChange({ name, label })
    }
  }
}
</script>

<style scoped lang="scss">
  .page-header {
    width: 100%;
    background: #ffffff;

    > .header {
      padding: 20px;

      .back {
        float: right;
        margin-top: -3px;
      }
    }

    > .footer {
      padding: 0 20px;
    }

  }
</style>
