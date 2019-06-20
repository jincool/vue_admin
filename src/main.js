import Vue from 'vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/style.css';
import '@/assets/css/common.css';
import App from './App.vue'
import router from './router'
import VueDND from 'awe-dnd'
// import store from './store'
import store from './store/store'
import echarts from 'echarts'
import api from './api/api'
import CardCool from '@/components/echarts/common/CardCool'
import FormFrame from '@/components/common/FormFrame'
Vue.config.productionTip = false;
Vue.prototype.$api = api;
Vue.use(ElementUI);
Vue.use(VueDND)//拖拽排序
// 用户手动刷新页面，这是路由会被重设，要重新新增
if (sessionStorage.getItem('user')) {
    let routes = JSON.parse(sessionStorage.getItem('routes'))
    store.dispatch("add_Routes", routes)
}
Vue.component('card_cool', CardCool);
Vue.component('form_frame', FormFrame);
Vue.prototype.$echarts = echarts;
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
