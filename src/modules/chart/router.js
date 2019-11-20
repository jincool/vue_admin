import Vue from 'vue'
import Router from 'vue-router'
import expend from '@/views/expend/expend-apply'
Vue.use(Router)
const router=new Router({
    routes: [
        {
            path: '/expend',
            name: 'expend',
            component: expend
        },
    ]
});
export default router
