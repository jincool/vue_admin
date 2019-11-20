import Vue from 'vue'
import ElementUI from 'element-ui';
// import 'element-ui/lib/theme-chalk/index.css';
// import { Button,Tabs,Progress,TabPane } from 'element-ui';
// Vue.use(Tabs);
// Vue.use(Button);
// Vue.use(TabPane);
// Vue.use(Progress,);
import '@/assets/css/theme/index.css';
import '@/assets/css/common.css';
import App from './App.vue'
import router from './router'
import store from '@/store/store'
import api from '@/api/api'


Vue.config.productionTip = false;
Vue.prototype.$api = api;//axios绑定原型
Vue.use(ElementUI);
new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
