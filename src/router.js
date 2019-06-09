import Vue from 'vue'
import Router from 'vue-router'
import login from './components/login.vue'
Vue.use(Router)
const router=new Router({
    routes: [
        {
            path: '/login',
            name: 'login',
            component: login
        },
    ]
});
router.beforeEach((to, from, next) => {
        document.body.style.background="linear-gradient(to right, #f5e9e9, #f2f5e9)";
        // 判断是否登录
        if (!sessionStorage.getItem('user') && to.path !== '/login') {
            next({
                path: '/login',
                query: {redirect: to.fullPath}
            })
        } else {
            next({
                // path: '/pay',
            })
        }


    next();
})
export default router
