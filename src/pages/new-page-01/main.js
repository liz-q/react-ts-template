import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import routes from './router'
import './plugins/basic-components'
import { i18n, setI18nLanguage } from './plugins/i18n'
import { setHeaders, microAppRouterBeforeEach, MicroAppStore } from '@geip/portal-utils/lib/microApp'

Vue.use(VueRouter)

Vue.config.productionTip = false

let router = null
let instance = null
const rootState = {
    orgId: '',
    refresh: false
}
function render (props = {}) {
    const { container, baseUrl } = props
    router = new VueRouter({
        base: window.__POWERED_BY_QIANKUN__ ? `${baseUrl}` : `${process.env.BASE_URL}`,
        mode: 'history',
        routes
    })

    microAppRouterBeforeEach(router)

    instance = new Vue({
        router,
        i18n,
        data () {
            return rootState
        },
        render: h => h(App)
    }).$mount(container ? container.querySelector('#app') : '#app')
}

if (!window.__POWERED_BY_QIANKUN__) {
    render()
} else {
    // eslint-disable-next-line camelcase, no-undef
    __webpack_public_path__ = window.__INJECTED_PUBLIC_PATH_BY_QIANKUN__
    // eslint-disable-next-line camelcase, no-undef
    console.log('__webpack_public_path__: ', __webpack_public_path__)
}

function initStore (props) {
    console.log(props)
    const options = { selfRefresh: true }
    const store = new MicroAppStore(props, options)
    Vue.prototype.$microAppStore = store
    store.toBindStateChange({ rootState, setHeaders, setI18nLanguage })
}

/**
 * bootstrap 只会在微应用初始化的时候调用一次，下次微应用重新进入时会直接调用 mount 钩子，不会再重复触发 bootstrap。
 * 通常我们可以在这里做一些全局变量的初始化，比如不会在 unmount 阶段被销毁的应用级别的缓存等。
 */
export async function bootstrap () {
    console.log('[permission-schema] vue app bootstraped')
}

/**
 * 应用每次进入都会调用 mount 方法，通常我们在这里触发应用的渲染方法
 */
export async function mount (props) {
    console.log('[permission-schema] props from main framework', props)
    initStore(props)
    render(props)
}

/**
 * 应用每次 切出/卸载 会调用的方法，通常在这里我们会卸载微应用的应用实例
 */
export async function unmount () {
    instance.$destroy()
    instance = null
    router = null
}
