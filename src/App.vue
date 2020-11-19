<template>
  <div id="app">
    <keep-alive :include="keepAliveInclude">
      <router-view v-if="isRefreshRouteComponents" />
    </keep-alive>
  </div>
</template>
<script>
import keepAliveRouterView from '@geip/portal-utils/lib/microApp/mixins/keepAliveRouterView.js'

export default {
  name: 'App',
  mixins: [keepAliveRouterView],
  data () {
    return {
      // keepAliveInclude: 'Home'
    }
  }
}
</script>
<style lang="scss">
  #app {
    width: 100%;
  }
</style>
