import Vue from 'vue'
import ElementUI from 'element-ui';
import '@/assets/css/element-variables.scss'
import 'element-ui/lib/theme-chalk/display.css';
import '@/assets/css/common.css';
import App from './App.vue'
import router from './router'
import VueDND from 'awe-dnd'
import store from './store/store'
import api from './api/api'
Vue.config.productionTip = false;
Vue.prototype.$api = api;//axios绑定原型
Vue.use(ElementUI);
Vue.use(VueDND)//拖拽排序
// 用户手动刷新页面，这是路由会被重设，要重新新增
import '@/utils/load-menu.js'
console.log(process.env.NODE_ENV)
new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
